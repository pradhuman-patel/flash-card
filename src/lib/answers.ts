import { DEFAULT_ANSWERS } from "@/data/questions";
import { REPLACED_ANSWERS } from "@/data/replacedAnswers";

export type Answers = Record<string, string>;

const STORAGE_KEY = "aiml-flashcards:answers:v2";
const LEGACY_STORAGE_KEY = "aiml-flashcards:answers:v1";
const CORRUPT_BACKUP_KEY = `${STORAGE_KEY}:unreadable-backup`;
/** The file answers this browser last saw, to tell file updates apart from your edits. */
const SEEN_DEFAULTS_KEY = "aiml-flashcards:seen-file-answers:v1";

let cache: Answers | null = null;
let warning: string | null = null;
const listeners = new Set<() => void>();

/**
 * Returns every question's answer from a stored value, or null if it isn't an
 * answers object. A stored "" stays blank, so a deleted answer doesn't come back.
 */
function normalize(value: unknown): Answers | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }
  const stored = value as Record<string, unknown>;
  const answers = { ...DEFAULT_ANSWERS };
  for (const id of Object.keys(answers)) {
    const answer = stored[id];
    if (typeof answer === "string") answers[id] = answer;
  }
  return answers;
}

function parse(raw: string): Answers | null {
  try {
    return normalize(JSON.parse(raw));
  } catch {
    return null;
  }
}

/** First answers for this browser: the defaults, kept below anything typed under the old key. */
function initialAnswers(): Answers {
  const answers = { ...DEFAULT_ANSWERS };
  const raw = window.localStorage.getItem(LEGACY_STORAGE_KEY);
  const legacy = raw === null ? null : parse(raw);
  if (legacy) {
    for (const [id, answer] of Object.entries(legacy)) {
      if (answer.trim() && answer !== DEFAULT_ANSWERS[id]) answers[id] = answer;
    }
  }
  return answers;
}

function rememberDefaults() {
  const current = JSON.stringify(DEFAULT_ANSWERS);
  if (window.localStorage.getItem(SEEN_DEFAULTS_KEY) !== current) {
    window.localStorage.setItem(SEEN_DEFAULTS_KEY, current);
  }
}

/**
 * Brings in answers that changed in flashcards.json since this browser saved its
 * copy, but only where it still has the old file answer. Edited answers are kept.
 */
function applyFileUpdates(answers: Answers): Answers {
  try {
    const raw = window.localStorage.getItem(SEEN_DEFAULTS_KEY);
    // Browsers from before this record existed saw the original file answers.
    const seen = (raw !== null && parse(raw)) || {
      ...DEFAULT_ANSWERS,
      ...REPLACED_ANSWERS,
    };
    const updated = { ...answers };
    let changed = false;
    for (const [id, answer] of Object.entries(DEFAULT_ANSWERS)) {
      if (seen[id] !== answer && updated[id] === seen[id]) {
        updated[id] = answer;
        changed = true;
      }
    }
    if (changed) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
    rememberDefaults();
    return updated;
  } catch {
    return answers;
  }
}

function load(): Answers {
  warning = null;
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    warning =
      "Browser storage is unavailable, so answers can't be saved in this window.";
    return { ...DEFAULT_ANSWERS };
  }

  if (raw === null) {
    const answers = initialAnswers();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
      rememberDefaults();
    } catch {
      warning =
        "Browser storage is unavailable, so answers can't be saved in this window.";
    }
    return answers;
  }

  const answers = parse(raw);
  if (answers) return applyFileUpdates(answers);

  // Keep the unreadable data rather than letting the next save destroy it.
  warning = `Your saved answers couldn't be read. The original data was kept in browser storage under "${CORRUPT_BACKUP_KEY}".`;
  try {
    window.localStorage.setItem(CORRUPT_BACKUP_KEY, raw);
  } catch {
    warning =
      "Your saved answers couldn't be read and no backup copy could be made. Import a backup to restore them.";
  }
  return { ...DEFAULT_ANSWERS };
}

function emit() {
  listeners.forEach((listener) => listener());
}

function handleStorageEvent(event: StorageEvent) {
  if (event.key === STORAGE_KEY || event.key === null) {
    cache = load();
    emit();
  }
}

/** Merges changes over the latest stored data, so a second open tab isn't overwritten. */
function write(changes: Answers): boolean {
  const current = cache ?? load();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const latest = (raw !== null && parse(raw)) || current;
    const next = { ...latest, ...changes };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    cache = next;
    emit();
    return true;
  } catch {
    return false;
  }
}

export function subscribe(listener: () => void): () => void {
  if (listeners.size === 0) {
    window.addEventListener("storage", handleStorageEvent);
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("storage", handleStorageEvent);
    }
  };
}

export function getAnswers(): Answers {
  if (!cache) cache = load();
  return cache;
}

/** No storage on the server: null means "answers not loaded yet". */
export function getServerAnswers(): Answers | null {
  return null;
}

export function getStorageWarning(): string | null {
  getAnswers();
  return warning;
}

export function getServerStorageWarning(): string | null {
  return null;
}

export function saveAnswer(id: string, text: string): boolean {
  return write({ [id]: text });
}

export function saveAnswers(changes: Answers): boolean {
  return write(changes);
}

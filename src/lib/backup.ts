import { QUESTIONS } from "@/data/questions";
import type { Answers } from "@/lib/answers";

const BACKUP_APP_ID = "aiml-interview-flashcards";
const MAX_BACKUP_BYTES = 10 * 1024 * 1024;

export function downloadBackup(answers: Answers) {
  const backup = {
    app: BACKUP_APP_ID,
    version: 1,
    exportedAt: new Date().toISOString(),
    answers,
  };
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = `aiml-flashcards-answers-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

export type ParsedBackup =
  | { ok: true; answers: Answers }
  | { ok: false; error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Validates a backup file. Accepts this app's export format or a plain
 * { "q1": "answer" } object. Only non-empty answers are returned, so restoring
 * a backup can never blank out an answer that already exists.
 */
export async function readBackup(file: File): Promise<ParsedBackup> {
  const invalid = "That file isn't a valid answers backup. Nothing was changed.";
  if (file.size > MAX_BACKUP_BYTES) return { ok: false, error: invalid };

  let parsed: unknown;
  try {
    parsed = JSON.parse(await file.text());
  } catch {
    return { ok: false, error: invalid };
  }
  if (!isRecord(parsed)) return { ok: false, error: invalid };

  const source = parsed.app === BACKUP_APP_ID ? parsed.answers : parsed;
  if (!isRecord(source)) return { ok: false, error: invalid };

  const answers: Answers = {};
  let recognized = 0;
  for (const { id } of QUESTIONS) {
    if (!Object.hasOwn(source, id)) continue;
    const value = source[id];
    if (typeof value !== "string") return { ok: false, error: invalid };
    recognized += 1;
    if (value.trim()) answers[id] = value;
  }

  if (recognized === 0) return { ok: false, error: invalid };
  return { ok: true, answers };
}

/** How many saved answers would be replaced by different text from the backup. */
export function countOverwrites(current: Answers, incoming: Answers): number {
  return Object.entries(incoming).filter(
    ([id, text]) => current[id]?.trim() && current[id] !== text,
  ).length;
}

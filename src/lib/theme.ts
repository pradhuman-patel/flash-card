export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "aiml-flashcards:theme";

const listeners = new Set<() => void>();

export function subscribeTheme(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function getServerTheme(): Theme {
  return "light";
}

export function toggleTheme() {
  const next: Theme = getTheme() === "dark" ? "light" : "dark";
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // The theme still applies for this visit; it just won't persist.
  }
  listeners.forEach((listener) => listener());
}

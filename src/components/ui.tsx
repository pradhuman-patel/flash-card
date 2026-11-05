"use client";

import { useSyncExternalStore } from "react";
import { AlertTriangle, CheckCircle2, Moon, Sun } from "lucide-react";
import { categoryName, categoryShortName } from "@/data/questions";
import { useStorageWarning } from "@/hooks/useAnswers";
import type { ToastMessage } from "@/hooks/useToast";
import { getServerTheme, getTheme, subscribeTheme, toggleTheme } from "@/lib/theme";

export function CategoryBadge({ categoryId }: { categoryId: string }) {
  return (
    <span
      title={categoryName(categoryId)}
      className="max-w-full truncate rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-ink"
    >
      {categoryShortName(categoryId)}
    </span>
  );
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="flex min-h-11 shrink-0 items-center gap-2 rounded-2xl border border-line bg-card px-4 text-sm font-medium shadow-soft transition-shadow hover:shadow-lift"
    >
      <Icon className="size-4 text-accent-ink" aria-hidden />
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export function Toast({ toast }: { toast: ToastMessage | null }) {
  return (
    <div
      role="status"
      className="pointer-events-none fixed inset-x-0 bottom-20 z-30 flex justify-center px-4"
    >
      {toast && (
        <p
          className={`flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-page shadow-lift ${
            toast.tone === "error" ? "rounded-2xl" : ""
          }`}
        >
          {toast.tone === "error" ? (
            <AlertTriangle className="size-4 shrink-0" aria-hidden />
          ) : (
            <CheckCircle2 className="size-4 shrink-0" aria-hidden />
          )}
          {toast.text}
        </p>
      )}
    </div>
  );
}

export function StorageWarning() {
  const warning = useStorageWarning();
  if (!warning) return null;
  return (
    <p
      role="alert"
      className="mb-5 flex items-start gap-2 rounded-2xl border border-danger/40 p-4 text-sm text-danger"
    >
      <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
      {warning}
    </p>
  );
}

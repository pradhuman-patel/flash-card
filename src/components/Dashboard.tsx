"use client";

import { useCallback, useDeferredValue, useMemo, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Download, Search, Upload, X } from "lucide-react";
import { AnswerEditor } from "@/components/AnswerEditor";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { FlashCard } from "@/components/FlashCard";
import { QuestionPopup } from "@/components/QuestionPopup";
import { StorageWarning, ThemeToggle, Toast } from "@/components/ui";
import { CATEGORIES, QUESTIONS } from "@/data/questions";
import type { Question } from "@/data/questions";
import { useAnswers } from "@/hooks/useAnswers";
import { useToast } from "@/hooks/useToast";
import { saveAnswers } from "@/lib/answers";
import type { Answers } from "@/lib/answers";
import { countOverwrites, downloadBackup, readBackup } from "@/lib/backup";
import {
  ALL_CATEGORIES,
  filterQuestions,
  filtersToSearch,
  readFilters,
} from "@/lib/filter";
import type { Filters } from "@/lib/filter";

const GRID_CLASS =
  "grid grid-cols-2 gap-3 sm:gap-x-6 sm:gap-y-7 lg:grid-cols-3 lg:gap-x-8";

function Header() {
  return (
    <header className="border-b border-line bg-page/90 backdrop-blur md:sticky md:top-0 md:z-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-4 sm:px-6 md:flex-row md:justify-between md:gap-6">
        <h1 className="text-center text-xl font-bold leading-tight md:text-left md:text-2xl">
          AI/ML Engineer — Interview Q&amp;A Flashcards
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
}

function CategoryPill({
  label,
  title,
  selected,
  onClick,
}: {
  label: string;
  title?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      title={title}
      onClick={onClick}
      className={`min-h-11 rounded-2xl px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
        selected
          ? "bg-accent font-semibold text-white shadow-soft"
          : "border border-line bg-card shadow-soft hover:-translate-y-0.5 hover:shadow-lift"
      }`}
    >
      {label}
    </button>
  );
}

export function Dashboard() {
  const searchParams = useSearchParams();
  const answers = useAnswers();
  const [filters, setFilters] = useState<Filters>(() => readFilters(searchParams));
  const deferredFilters = useDeferredValue(filters);
  const [editing, setEditing] = useState<Question | null>(null);
  const [opened, setOpened] = useState<Question | null>(null);
  const [pendingImport, setPendingImport] = useState<{
    answers: Answers;
    overwrites: number;
  } | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const { toast, showToast } = useToast();

  const visible = useMemo(
    () => filterQuestions(answers, deferredFilters),
    [answers, deferredFilters],
  );

  const updateFilters = (changes: Partial<Filters>) => {
    const next = { ...filters, ...changes };
    setFilters(next);
    // Keeping filters in the URL restores them on return from the detail view.
    window.history.replaceState(null, "", `/${filtersToSearch(next)}`);
  };

  const handleEdit = useCallback((question: Question) => setEditing(question), []);
  const handleOpen = useCallback((question: Question) => setOpened(question), []);

  const closePopup = () => {
    // Previous and Next may have moved on, so bring the last viewed card into view.
    if (opened) {
      document.getElementById(opened.id)?.scrollIntoView({ block: "nearest" });
    }
    setOpened(null);
  };

  const applyImport = (incoming: Answers) => {
    setPendingImport(null);
    const count = Object.keys(incoming).length;
    if (saveAnswers(incoming)) {
      showToast(`Imported ${count} ${count === 1 ? "answer" : "answers"}`);
    } else {
      showToast("Couldn't save the import to browser storage.", "error");
    }
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || !answers) return;

    const backup = await readBackup(file);
    if (!backup.ok) {
      showToast(backup.error, "error");
      return;
    }
    const overwrites = countOverwrites(answers, backup.answers);
    if (overwrites > 0) {
      setPendingImport({ answers: backup.answers, overwrites });
    } else {
      applyImport(backup.answers);
    }
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-8">
        <StorageWarning />

        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-faint"
            aria-hidden
          />
          <input
            type="search"
            value={filters.query}
            onChange={(event) => updateFilters({ query: event.target.value })}
            placeholder="Search questions, answers, or categories..."
            aria-label="Search questions, answers, or categories"
            className="min-h-14 w-full rounded-2xl border border-line bg-card pr-12 pl-13 text-base text-ellipsis shadow-soft placeholder:text-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          {filters.query && (
            <button
              type="button"
              onClick={() => updateFilters({ query: "" })}
              aria-label="Clear search"
              className="absolute top-1/2 right-2 grid size-10 -translate-y-1/2 place-items-center rounded-full text-faint transition-colors hover:text-ink"
            >
              <X className="size-5" aria-hidden />
            </button>
          )}
        </div>

        <div
          role="group"
          aria-label="Filter by category"
          className="mt-5 flex flex-wrap gap-2.5"
        >
          <CategoryPill
            label="All"
            selected={filters.category === ALL_CATEGORIES}
            onClick={() => updateFilters({ category: ALL_CATEGORIES })}
          />
          {CATEGORIES.map((category) => (
            <CategoryPill
              key={category.id}
              label={category.shortName}
              title={category.name}
              selected={filters.category === category.id}
              onClick={() => updateFilters({ category: category.id })}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p aria-live="polite" className="text-sm text-muted">
            Showing {visible.length} of {QUESTIONS.length} questions
          </p>
          <div className="flex flex-wrap gap-1">
            <button
              type="button"
              onClick={() => answers && downloadBackup(answers)}
              className="flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:bg-accent-soft hover:text-accent-ink"
            >
              <Download className="size-4" aria-hidden />
              Export Answers
            </button>
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:bg-accent-soft hover:text-accent-ink"
            >
              <Upload className="size-4" aria-hidden />
              Import Answers
            </button>
            <input
              ref={fileInput}
              type="file"
              accept="application/json,.json"
              onChange={handleImportFile}
              className="hidden"
              aria-label="Choose an answers backup file"
            />
          </div>
        </div>

        {visible.length > 0 ? (
          <div className={`${GRID_CLASS} mt-6 pb-10`}>
            {visible.map((question) => (
              <FlashCard
                key={question.id}
                question={question}
                answer={answers?.[question.id] ?? ""}
                onOpen={handleOpen}
                onEdit={handleEdit}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="font-semibold">No questions match your search.</p>
            <button
              type="button"
              onClick={() =>
                updateFilters({ category: ALL_CATEGORIES, query: "" })
              }
              className="mt-4 min-h-11 rounded-full border border-line px-5 text-sm font-medium transition-colors hover:bg-accent-soft"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      {opened && (
        <QuestionPopup
          question={opened}
          answer={answers?.[opened.id] ?? ""}
          // An edit can drop this question out of a search, so fall back to the full list.
          sequence={visible.some((q) => q.id === opened.id) ? visible : QUESTIONS}
          onNavigate={setOpened}
          onClose={closePopup}
          onSaved={(message) => showToast(message)}
        />
      )}

      {editing && (
        <AnswerEditor
          key={editing.id}
          question={editing}
          savedAnswer={answers?.[editing.id] ?? ""}
          onClose={() => setEditing(null)}
          onSaved={(message) => showToast(message)}
        />
      )}

      {pendingImport && (
        <ConfirmDialog
          title="Overwrite existing answers?"
          message={`This backup will replace ${pendingImport.overwrites} saved ${
            pendingImport.overwrites === 1 ? "answer" : "answers"
          } with different text. Answers the backup leaves blank are kept.`}
          confirmLabel="Overwrite Answers"
          danger
          onConfirm={() => applyImport(pendingImport.answers)}
          onCancel={() => setPendingImport(null)}
        />
      )}

      <Toast toast={toast} />
    </>
  );
}

export function DashboardSkeleton() {
  return (
    <>
      <Header />
      <main aria-busy className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-8">
        <div className="min-h-14 rounded-2xl border border-line bg-card shadow-soft" />
        <div className={`${GRID_CLASS} mt-16`}>
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="mt-9 aspect-square rounded-2xl border border-line bg-card shadow-soft sm:aspect-auto sm:h-72 sm:rounded-3xl md:h-80"
            />
          ))}
        </div>
      </main>
    </>
  );
}

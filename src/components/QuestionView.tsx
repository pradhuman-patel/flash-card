"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, PenLine } from "lucide-react";
import { AnswerEditor } from "@/components/AnswerEditor";
import { CategoryBadge, StorageWarning, Toast } from "@/components/ui";
import { QUESTIONS } from "@/data/questions";
import type { Question } from "@/data/questions";
import { useAnswers } from "@/hooks/useAnswers";
import { useToast } from "@/hooks/useToast";
import { filterQuestions, filtersToSearch, readFilters } from "@/lib/filter";

const NAV_CLASS =
  "flex min-h-11 items-center gap-1.5 rounded-2xl border border-line bg-card px-4 text-sm font-medium shadow-soft transition-shadow";

function AdjacentLink({
  target,
  search,
  direction,
}: {
  target: Question | undefined;
  search: string;
  direction: "Previous" | "Next";
}) {
  const content = (
    <>
      {direction === "Previous" && <ChevronLeft className="size-4" aria-hidden />}
      {direction}
      {direction === "Next" && <ChevronRight className="size-4" aria-hidden />}
    </>
  );

  if (!target) {
    return (
      <span aria-disabled className={`${NAV_CLASS} cursor-not-allowed opacity-40`}>
        {content}
      </span>
    );
  }
  return (
    <Link
      href={`/questions/${target.id}${search}`}
      aria-label={`${direction} question: Q${target.number}`}
      className={`${NAV_CLASS} hover:shadow-lift`}
    >
      {content}
    </Link>
  );
}

export function QuestionView({ question }: { question: Question }) {
  const searchParams = useSearchParams();
  const answers = useAnswers();
  const [isEditing, setIsEditing] = useState(false);
  const { toast, showToast } = useToast();

  const filters = readFilters(searchParams);
  const search = filtersToSearch(filters);

  // Prev/Next follow the list the user came from. An edit can drop this question
  // out of a search, so fall back to the full list rather than getting stuck.
  const filtered = filterQuestions(answers, filters);
  const sequence = filtered.some((q) => q.id === question.id) ? filtered : QUESTIONS;
  const index = sequence.findIndex((q) => q.id === question.id);

  const answer = answers?.[question.id] ?? "";

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-20 border-b border-line bg-page/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link
            href={`/${search}`}
            className={`${NAV_CLASS} shrink-0 hover:shadow-lift`}
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </Link>
          <div className="flex min-w-0 flex-1">
            <CategoryBadge categoryId={question.categoryId} />
          </div>
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            disabled={!answers}
            className={`${NAV_CLASS} shrink-0 hover:shadow-lift`}
          >
            <PenLine className="size-4" aria-hidden />
            Edit
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:px-6 md:py-10">
        <StorageWarning />
        <p className="text-sm font-bold text-accent-ink">Q{question.number}</p>
        <h1 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
          {question.text}
        </h1>

        <h2 className="mt-8 text-lg font-semibold text-muted">Answer:</h2>

        {!answers ? (
          <div aria-busy className="mt-3 min-h-40" />
        ) : answer ? (
          <div className="mt-3 text-base leading-[1.8] break-words whitespace-pre-wrap md:text-lg">
            {answer}
          </div>
        ) : (
          <div className="mt-4 rounded-3xl border border-dashed border-line p-8 text-center">
            <p className="font-semibold">No answer added yet.</p>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="mt-4 min-h-11 rounded-full bg-accent px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Write Answer
            </button>
          </div>
        )}
      </main>

      <nav
        aria-label="Question navigation"
        className="sticky bottom-0 border-t border-line bg-page/90 backdrop-blur"
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <AdjacentLink
            target={sequence[index - 1]}
            search={search}
            direction="Previous"
          />
          <span className="text-sm text-muted">
            {index + 1} of {sequence.length}
          </span>
          <AdjacentLink
            target={sequence[index + 1]}
            search={search}
            direction="Next"
          />
        </div>
      </nav>

      {isEditing && (
        <AnswerEditor
          key={question.id}
          question={question}
          savedAnswer={answer}
          onClose={() => setIsEditing(false)}
          onSaved={(message) => showToast(message)}
        />
      )}

      <Toast toast={toast} />
    </div>
  );
}

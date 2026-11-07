"use client";

import { useId, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, PenLine } from "lucide-react";
import { AnswerEditor } from "@/components/AnswerEditor";
import { AnswerBody } from "@/components/AnswerText";
import { CategoryBadge } from "@/components/ui";
import { useModal } from "@/components/useModal";
import type { Question } from "@/data/questions";

const BAR_BUTTON_CLASS =
  "flex min-h-12 items-center justify-center gap-2 rounded-2xl border text-sm font-semibold transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40";
const OUTLINE_CLASS = `${BAR_BUTTON_CLASS} border-line bg-card`;

type QuestionPopupProps = {
  question: Question;
  answer: string;
  /** The list being browsed, which Previous and Next move through. */
  sequence: Question[];
  onNavigate: (question: Question) => void;
  onClose: () => void;
  onSaved: (message: string) => void;
};

export function QuestionPopup({
  question,
  answer,
  sequence,
  onNavigate,
  onClose,
  onSaved,
}: QuestionPopupProps) {
  const [isEditing, setIsEditing] = useState(false);
  const modal = useModal(onClose);
  const titleId = useId();

  const index = sequence.findIndex((q) => q.id === question.id);
  const previous = sequence[index - 1];
  const next = sequence[index + 1];

  return (
    <dialog
      {...modal}
      aria-labelledby={titleId}
      className="popup m-auto max-h-none w-[calc(100%-1.5rem)] max-w-2xl rounded-3xl bg-card text-ink shadow-lift"
    >
      <div className="flex max-h-[calc(100dvh-1.5rem)] flex-col">
        {/* The key resets the scroll position when moving between questions. */}
        <div key={question.id} className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="flex items-center gap-2">
            <p className="shrink-0 text-sm font-bold text-accent-ink">
              Q{question.number}
            </p>
            <div className="flex min-w-0 flex-1">
              <CategoryBadge categoryId={question.categoryId} />
            </div>
            <p className="shrink-0 text-xs text-muted">
              {index + 1} of {sequence.length}
            </p>
          </div>
          <h2
            id={titleId}
            className="mt-2 text-xl font-bold leading-tight sm:text-2xl"
          >
            {question.text}
          </h2>

          {answer ? (
            <div className="mt-4 text-[15px] leading-relaxed break-words whitespace-pre-wrap sm:text-base">
              <AnswerBody questionId={question.id} text={answer} />
            </div>
          ) : (
            <p className="mt-6 font-semibold">No answer added yet.</p>
          )}
        </div>

        <div className="grid grid-cols-[3rem_1fr_1fr_3rem] gap-2 border-t border-line p-3">
          <button
            type="button"
            onClick={() => previous && onNavigate(previous)}
            disabled={!previous}
            aria-label="Previous question"
            className={OUTLINE_CLASS}
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button type="button" onClick={onClose} className={OUTLINE_CLASS}>
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className={`${BAR_BUTTON_CLASS} border-accent bg-accent text-white`}
          >
            <PenLine className="size-4" aria-hidden />
            {answer ? "Edit" : "Write"}
          </button>
          <button
            type="button"
            onClick={() => next && onNavigate(next)}
            disabled={!next}
            aria-label="Next question"
            className={OUTLINE_CLASS}
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      {isEditing && (
        <AnswerEditor
          key={question.id}
          question={question}
          savedAnswer={answer}
          onClose={() => setIsEditing(false)}
          onSaved={onSaved}
        />
      )}
    </dialog>
  );
}

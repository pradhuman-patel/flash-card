"use client";

import { memo, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Maximize2, PenLine } from "lucide-react";
import { CategoryBadge } from "@/components/ui";
import type { Question } from "@/data/questions";

type FlashCardProps = {
  question: Question;
  answer: string;
  detailHref: string;
  onEdit: (question: Question) => void;
};

const FACE_CLASS =
  "flip-face flex flex-col rounded-3xl border border-line bg-card shadow-soft transition-shadow group-hover:shadow-lift";

function FlipHint() {
  return (
    <>
      <span className="pointer-coarse:hidden">Click to flip</span>
      <span className="hidden pointer-coarse:inline">Tap to flip</span>
    </>
  );
}

export const FlashCard = memo(function FlashCard({
  question,
  answer,
  detailHref,
  onEdit,
}: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const hasFlipped = useRef(false);
  const frontButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);

  // The face that was focused goes inert when flipped, so keep keyboard users in place.
  useEffect(() => {
    if (!hasFlipped.current) return;
    (flipped ? backButton : frontButton).current?.focus({ preventScroll: true });
  }, [flipped]);

  const flip = () => {
    hasFlipped.current = true;
    setFlipped((current) => !current);
  };

  const label = `Q${question.number}`;
  const openLink = (
    <Link
      href={detailHref}
      prefetch={false}
      aria-label={`Open ${label} in full view`}
      title="Open full view"
      onClick={(event) => event.stopPropagation()}
      className="relative grid size-9 shrink-0 place-items-center rounded-full text-faint transition-colors hover:bg-accent-soft hover:text-accent-ink"
    >
      <Maximize2 className="size-4" aria-hidden />
    </Link>
  );

  return (
    <div className="min-w-0">
      <div className="mb-3 flex">
        <CategoryBadge categoryId={question.categoryId} />
      </div>
      <div className="flip-scene group h-72 transition-transform duration-200 hover:-translate-y-1 md:h-80">
        <div className="flip-inner" data-flipped={flipped}>
          {/* Front: question */}
          <div className={FACE_CLASS} inert={flipped}>
            <button
              ref={frontButton}
              type="button"
              onClick={flip}
              aria-label={`${label}: ${question.text} Flip to show answer.`}
              className="absolute inset-0 cursor-pointer rounded-3xl focus-visible:-outline-offset-2"
            />
            <div className="pointer-events-none flex h-full flex-col p-3">
              <div className="flex items-center justify-between">
                <span className="pl-2 text-sm font-bold text-accent-ink">
                  {label}
                </span>
                <span className="pointer-events-auto">{openLink}</span>
              </div>
              <p className="flex flex-1 items-center justify-center px-3 text-center text-base font-semibold leading-snug md:text-lg">
                {question.text}
              </p>
              <p className="pb-1 pr-2 text-right text-xs text-faint">
                <FlipHint />
              </p>
            </div>
          </div>

          {/* Back: saved answer */}
          <div
            className={`${FACE_CLASS} flip-face-back cursor-pointer p-3`}
            inert={!flipped}
            onClick={() => {
              // Don't flip away while the user is selecting answer text.
              if (window.getSelection()?.toString()) return;
              flip();
            }}
          >
            <div className="flex items-center gap-2">
              <span className="shrink-0 pl-2 text-sm font-bold text-accent-ink">
                {label}
              </span>
              <p
                className="min-w-0 flex-1 truncate text-xs text-muted"
                title={question.text}
              >
                {question.text}
              </p>
              {openLink}
            </div>

            {answer ? (
              <div
                tabIndex={flipped ? 0 : -1}
                role="region"
                aria-label={`Answer to ${label}`}
                className="mt-1 min-h-0 flex-1 cursor-text overflow-y-auto rounded-lg px-2 text-sm leading-relaxed break-words whitespace-pre-wrap"
              >
                {answer}
              </div>
            ) : (
              <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-3 text-center">
                <p className="text-sm font-semibold">No answer added yet.</p>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onEdit(question);
                  }}
                  className="min-h-11 rounded-full bg-accent px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Write Answer
                </button>
              </div>
            )}

            <div className="mt-2 flex min-h-9 items-center justify-between gap-2">
              {answer ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onEdit(question);
                  }}
                  aria-label={`Edit answer to ${label}`}
                  className="flex min-h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-medium transition-colors hover:bg-accent-soft"
                >
                  <PenLine className="size-3.5" aria-hidden />
                  Edit
                </button>
              ) : (
                <span />
              )}
              <button
                ref={backButton}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  flip();
                }}
                aria-label={`Flip ${label} back to the question`}
                className="min-h-9 cursor-pointer rounded-full px-2 text-xs text-faint transition-colors hover:text-ink"
              >
                <FlipHint />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

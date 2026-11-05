"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Trash2, X } from "lucide-react";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useModal } from "@/components/useModal";
import type { Question } from "@/data/questions";
import { saveAnswer } from "@/lib/answers";

type PendingConfirm = "discard" | "delete" | "blank";

type AnswerEditorProps = {
  question: Question;
  savedAnswer: string;
  onClose: () => void;
  /** Called after the answer is stored, with the confirmation to show. */
  onSaved: (message: string) => void;
};

export function AnswerEditor({
  question,
  savedAnswer,
  onClose,
  onSaved,
}: AnswerEditorProps) {
  const [text, setText] = useState(savedAnswer);
  const [pending, setPending] = useState<PendingConfirm | null>(null);
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const titleId = useId();

  const isDirty = text !== savedAnswer;
  const isBlank = text.trim() === "";

  const requestClose = () => {
    if (isDirty) setPending("discard");
    else onClose();
  };
  const modal = useModal(requestClose);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }, []);

  useEffect(() => {
    if (!isDirty) return;
    const warnBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };
    window.addEventListener("beforeunload", warnBeforeUnload);
    return () => window.removeEventListener("beforeunload", warnBeforeUnload);
  }, [isDirty]);

  const store = (value: string, message: string) => {
    setPending(null);
    if (saveAnswer(question.id, value)) {
      onSaved(message);
      onClose();
    } else {
      setError(
        "Couldn't save to browser storage. It may be full or blocked. Your text is still here, so copy it somewhere safe.",
      );
    }
  };

  const handleSave = () => {
    if (isBlank) setPending("blank");
    else store(text.trim(), "Saved");
  };

  return (
    <dialog
      {...modal}
      aria-labelledby={titleId}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-card text-ink shadow-lift sm:m-auto sm:h-[min(80dvh,680px)] sm:max-w-2xl sm:rounded-3xl"
    >
      <div className="flex h-full flex-col">
        <header className="flex items-start gap-3 border-b border-line p-4 sm:p-6">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-accent-ink">
              Q{question.number}
            </p>
            <h2 id={titleId} className="mt-1 font-bold leading-snug sm:text-lg">
              {question.text}
            </h2>
          </div>
          <button
            type="button"
            onClick={requestClose}
            aria-label="Close editor"
            className="grid size-10 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
          >
            <X className="size-5" aria-hidden />
          </button>
        </header>

        <div className="flex min-h-0 flex-1 flex-col p-4 sm:px-6 sm:py-5">
          <label htmlFor={`${titleId}-answer`} className="sr-only">
            Your answer
          </label>
          <textarea
            id={`${titleId}-answer`}
            ref={textareaRef}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Write your answer here…"
            className="min-h-0 w-full flex-1 resize-none rounded-2xl border border-line bg-page p-4 text-base leading-relaxed placeholder:text-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          {error && (
            <p role="alert" className="mt-3 text-sm text-danger">
              {error}
            </p>
          )}
        </div>

        <footer className="flex flex-wrap items-center gap-3 border-t border-line p-4 sm:px-6">
          {savedAnswer && (
            <button
              type="button"
              onClick={() => setPending("delete")}
              className="flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-danger transition-colors hover:bg-danger/10"
            >
              <Trash2 className="size-4" aria-hidden />
              Delete Answer
            </button>
          )}
          <div className="ml-auto flex gap-3">
            <button
              type="button"
              onClick={requestClose}
              className="min-h-11 rounded-full border border-line px-5 text-sm font-medium transition-colors hover:bg-accent-soft"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={!isDirty || (isBlank && !savedAnswer)}
              className="min-h-11 rounded-full bg-accent px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Save Answer
            </button>
          </div>
        </footer>
      </div>

      {pending === "discard" && (
        <ConfirmDialog
          title="Discard unsaved changes?"
          message="Your edits to this answer will be lost."
          confirmLabel="Discard"
          cancelLabel="Keep Editing"
          danger
          onConfirm={onClose}
          onCancel={() => setPending(null)}
        />
      )}
      {pending === "delete" && (
        <ConfirmDialog
          title="Delete this answer?"
          message="Your saved answer to this question will be permanently removed."
          confirmLabel="Delete Answer"
          danger
          onConfirm={() => store("", "Answer deleted")}
          onCancel={() => setPending(null)}
        />
      )}
      {pending === "blank" && (
        <ConfirmDialog
          title="Save a blank answer?"
          message="The editor is empty, so saving will delete the answer you already have."
          confirmLabel="Delete Answer"
          cancelLabel="Keep Editing"
          danger
          onConfirm={() => store("", "Answer deleted")}
          onCancel={() => setPending(null)}
        />
      )}
    </dialog>
  );
}

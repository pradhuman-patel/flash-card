"use client";

import { useId } from "react";
import { useModal } from "@/components/useModal";

type ConfirmDialogProps = {
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel?: string;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  title,
  message,
  confirmLabel,
  cancelLabel = "Cancel",
  danger = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const modal = useModal(onCancel);
  const titleId = useId();

  return (
    <dialog
      {...modal}
      role="alertdialog"
      aria-labelledby={titleId}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl bg-card text-ink shadow-lift"
    >
      <div className="p-6">
        <h2 id={titleId} className="text-lg font-bold">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{message}</p>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="min-h-11 rounded-full border border-line px-5 text-sm font-medium transition-colors hover:bg-accent-soft"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`min-h-11 rounded-full px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 ${
              danger ? "bg-[#d92d20]" : "bg-accent"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </dialog>
  );
}

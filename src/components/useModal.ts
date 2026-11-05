"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent, SyntheticEvent } from "react";

/**
 * Opens a native <dialog> as a modal for as long as the component is mounted.
 * Esc and backdrop clicks call onDismiss instead of closing, so the owner decides
 * whether closing is allowed. Focus returns to the previous element afterward.
 */
export function useModal(onDismiss: () => void) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const previousFocus = document.activeElement;
    if (!dialog.open) dialog.showModal();
    return () => {
      dialog.close();
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  return {
    ref,
    onCancel: (event: SyntheticEvent<HTMLDialogElement>) => {
      event.preventDefault();
      onDismiss();
    },
    // Browsers can force-close a dialog on repeated Esc; stay open and ask the owner.
    onClose: () => {
      const dialog = ref.current;
      if (dialog && !dialog.open) {
        dialog.showModal();
        onDismiss();
      }
    },
    onMouseDown: (event: MouseEvent<HTMLDialogElement>) => {
      if (event.target === event.currentTarget) onDismiss();
    },
  };
}

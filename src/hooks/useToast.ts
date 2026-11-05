"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ToastMessage = {
  text: string;
  tone: "success" | "error";
};

export function useToast() {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const showToast = useCallback(
    (text: string, tone: ToastMessage["tone"] = "success") => {
      clearTimeout(timer.current);
      setToast({ text, tone });
      timer.current = setTimeout(
        () => setToast(null),
        tone === "error" ? 6000 : 2500,
      );
    },
    [],
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  return { toast, showToast };
}

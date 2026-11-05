"use client";

import { useSyncExternalStore } from "react";
import {
  getAnswers,
  getServerAnswers,
  getServerStorageWarning,
  getStorageWarning,
  subscribe,
} from "@/lib/answers";

/** Saved answers, shared by every view. Null until loaded in the browser. */
export function useAnswers() {
  return useSyncExternalStore(subscribe, getAnswers, getServerAnswers);
}

export function useStorageWarning() {
  return useSyncExternalStore(
    subscribe,
    getStorageWarning,
    getServerStorageWarning,
  );
}

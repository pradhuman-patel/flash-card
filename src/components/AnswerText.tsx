import { HIGHLIGHTS } from "@/data/highlights";

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Shows an answer with its key phrases highlighted, leaving the text itself unchanged. */
export function AnswerText({
  questionId,
  text,
}: {
  questionId: string;
  text: string;
}) {
  const phrases = HIGHLIGHTS[questionId];
  if (!phrases?.length) return text;

  // Longest first, so a phrase that contains another one wins. The capture group
  // makes split() keep the matches, which land at the odd indexes.
  const pattern = [...phrases]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|");

  return text.split(new RegExp(`(${pattern})`, "g")).map((part, index) =>
    index % 2 === 1 ? (
      <mark
        key={index}
        className="rounded bg-accent-soft font-semibold text-accent-ink shadow-[2px_0_0_var(--accent-soft),-2px_0_0_var(--accent-soft)] [box-decoration-break:clone]"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

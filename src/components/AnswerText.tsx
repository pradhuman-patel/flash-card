import { ANSWER_EXTRAS } from "@/data/answerExtras";
import { KEY_LINES } from "@/data/highlights";

const EXTRA_CLASS = "italic opacity-75";

function HighlightedAnswer({
  questionId,
  text,
}: {
  questionId: string;
  text: string;
}) {
  const keyLine = KEY_LINES[questionId];
  const start = keyLine ? text.indexOf(keyLine) : -1;
  if (start === -1) return text;

  return (
    <>
      {text.slice(0, start)}
      <mark className="rounded bg-accent-soft font-semibold text-accent-ink shadow-[2px_0_0_var(--accent-soft),-2px_0_0_var(--accent-soft)] [box-decoration-break:clone]">
        {keyLine}
      </mark>
      {text.slice(start + keyLine.length)}
    </>
  );
}

/** A saved answer with its key line highlighted, between the faded fillers. */
export function AnswerBody({
  questionId,
  text,
}: {
  questionId: string;
  text: string;
}) {
  const extras = ANSWER_EXTRAS[questionId];

  return (
    <div className="space-y-[1lh]">
      {extras && <p className={EXTRA_CLASS}>{extras.opener}</p>}
      <p>
        <HighlightedAnswer questionId={questionId} text={text} />
      </p>
      {extras && <p className={EXTRA_CLASS}>{extras.closer}</p>}
      {extras && <p className={EXTRA_CLASS}>Optional: {extras.funny}</p>}
    </div>
  );
}

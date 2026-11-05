import { Suspense } from "react";
import { notFound } from "next/navigation";
import { QuestionView } from "@/components/QuestionView";
import { QUESTIONS, findQuestion } from "@/data/questions";

export function generateStaticParams() {
  return QUESTIONS.map(({ id }) => ({ id }));
}

async function QuestionContent({ params }: Pick<PageProps<"/questions/[id]">, "params">) {
  const { id } = await params;
  const question = findQuestion(id);
  if (!question) notFound();

  return <QuestionView question={question} />;
}

export default function QuestionPage({ params }: PageProps<"/questions/[id]">) {
  return (
    <Suspense>
      <QuestionContent params={params} />
    </Suspense>
  );
}

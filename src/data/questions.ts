import flashcards from "./flashcards.json";

export type Category = {
  id: string;
  /** Label for filter pills and badges. */
  shortName: string;
  name: string;
};

export type Question = {
  /** Stable storage key, e.g. "q1". Never change these: saved answers depend on them. */
  id: string;
  number: number;
  categoryId: string;
  text: string;
};

const SHORT_NAMES: Record<string, string> = {
  "category-1": "Introduction",
  "category-2": "Perplexity",
  "category-3": "HCLTech",
  "category-4": "Accenture",
  "category-5": "Education",
  "category-6": "Technical",
  "category-7": "Logistics",
  "category-8": "Behavioral",
  "category-9": "Recruiter",
};

export const CATEGORIES: Category[] = [...flashcards.categories]
  .sort((a, b) => a.order - b.order)
  .map(({ id, name }) => ({ id, name, shortName: SHORT_NAMES[id] ?? name }));

export const QUESTIONS: Question[] = flashcards.questions.map(
  ({ id, number, categoryId, question }) => ({
    id,
    number,
    categoryId,
    text: question,
  }),
);

/** Answers from flashcards.json, used until the browser has its own saved copy. */
export const DEFAULT_ANSWERS: Record<string, string> = Object.fromEntries(
  flashcards.questions.map(({ id, answer }) => [id, answer]),
);

const CATEGORY_NAMES = new Map(CATEGORIES.map((c) => [c.id, c.name]));

export function categoryName(categoryId: string): string {
  return CATEGORY_NAMES.get(categoryId) ?? "";
}

export function categoryShortName(categoryId: string): string {
  return CATEGORIES.find((c) => c.id === categoryId)?.shortName ?? "";
}

export function findQuestion(id: string): Question | undefined {
  return QUESTIONS.find((question) => question.id === id);
}

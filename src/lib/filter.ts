import { CATEGORIES, QUESTIONS, categoryName } from "@/data/questions";
import type { Question } from "@/data/questions";
import type { Answers } from "@/lib/answers";

export const ALL_CATEGORIES = "all";

export type Filters = {
  category: string;
  query: string;
};

export function readFilters(params: { get(name: string): string | null }): Filters {
  const category = params.get("category");
  return {
    category:
      category && CATEGORIES.some((c) => c.id === category)
        ? category
        : ALL_CATEGORIES,
    query: params.get("q") ?? "",
  };
}

/** The filters as a URL query string, including "?", or "" when nothing is filtered. */
export function filtersToSearch({ category, query }: Filters): string {
  const params = new URLSearchParams();
  if (category !== ALL_CATEGORIES) params.set("category", category);
  if (query) params.set("q", query);
  const search = params.toString();
  return search ? `?${search}` : "";
}

export function filterQuestions(
  answers: Answers | null,
  { category, query }: Filters,
): Question[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  return QUESTIONS.filter((question) => {
    if (category !== ALL_CATEGORIES && question.categoryId !== category) {
      return false;
    }
    if (terms.length === 0) return true;
    const haystack = [
      question.text,
      categoryName(question.categoryId),
      answers?.[question.id] ?? "",
    ]
      .join("\n")
      .toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

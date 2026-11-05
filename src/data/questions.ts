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

const GROUPS: { category: Category; questions: string[] }[] = [
  {
    category: {
      id: "introduction",
      shortName: "Introduction",
      name: "Introduction & Professional Background",
    },
    questions: [
      "Tell me about yourself.",
      "Can you walk me through your resume?",
      "How many years of total professional experience do you have?",
      "How many years of experience do you have specifically in AI and machine learning?",
      "Can you walk me through your career journey from Accenture to HCLTech to Perplexity?",
      "What are your primary technical skills?",
      "Which programming language are you most comfortable with?",
      "What is your strongest area within AI/ML?",
      "What kind of projects have you primarily worked on?",
      "Have you ever worked in a startup environment?",
      "What is the most challenging project you have worked on?",
    ],
  },
  {
    category: {
      id: "perplexity",
      shortName: "Perplexity",
      name: "Current Experience — Perplexity",
    },
    questions: [
      "What is your current role at Perplexity?",
      "Can you explain what you are currently working on at Perplexity?",
      "What does your typical day look like at Perplexity?",
      "What are your main day-to-day responsibilities?",
      "Can you explain your current project in simple, nontechnical terms?",
      "What was your specific contribution to the project?",
      "What tools, technologies, and frameworks do you use daily?",
      "How large is your team at Perplexity?",
      "Who do you report to, and what is your reporting structure?",
      "Which other teams do you collaborate with regularly?",
      "Do you work independently or as part of a team?",
      "Have you managed a project from start to finish at Perplexity?",
      "Have you deployed AI or machine learning models into production?",
      "What was the business impact of your work at Perplexity?",
      "How do you monitor models after deployment?",
      "What was the biggest technical challenge you faced at Perplexity?",
      "Why are you leaving Perplexity?",
      "Is your current position at Perplexity full-time or contract?",
      "Why isn't Perplexity converting your contract into a full-time position?",
      "What is the most important thing you learned at Perplexity?",
    ],
  },
  {
    category: {
      id: "hcltech",
      shortName: "HCLTech",
      name: "Previous Experience — HCLTech",
    },
    questions: [
      "What was your role at HCLTech?",
      "What were your main responsibilities at HCLTech?",
      "What projects did you work on at HCLTech?",
      "What tools and technologies did you use at HCLTech?",
      "How was your experience at HCLTech different from Perplexity?",
      "What was your biggest achievement at HCLTech?",
      "Why did you leave HCLTech?",
      "Was your position at HCLTech full-time or contract?",
      "How large was your team at HCLTech?",
      "What was the biggest challenge you faced at HCLTech?",
    ],
  },
  {
    category: {
      id: "accenture",
      shortName: "Accenture",
      name: "Previous Experience — Accenture",
    },
    questions: [
      "How did you start your professional career at Accenture?",
      "Was your initial position at Accenture an internship or a full-time role?",
      "How did you transition from an internship to a full-time position at Accenture?",
      "What was your role at Accenture?",
      "What were your main responsibilities at Accenture?",
      "What AI/ML projects did you work on at Accenture?",
      "Which technologies and tools did you use at Accenture?",
      "What was your biggest learning experience at Accenture?",
      "Why did you leave Accenture?",
      "How did your Accenture experience prepare you for your next role?",
    ],
  },
  {
    category: {
      id: "education",
      shortName: "Education",
      name: "Education & Academic Background",
    },
    questions: [
      "Can you tell me about your educational background?",
      "What degree are you currently pursuing, and when do you expect to graduate?",
      "How do you balance your university coursework with your professional responsibilities?",
      "How has your computer science education helped you in your AI/ML career?",
    ],
  },
  {
    category: {
      id: "technical",
      shortName: "Technical",
      name: "Light Technical & AI/ML Experience",
    },
    questions: [
      "How many years of Python experience do you have?",
      "How comfortable are you with Python?",
      "Which Python libraries and frameworks do you use most frequently?",
      "What machine learning algorithms have you worked with?",
      "What is the difference between supervised and unsupervised learning?",
      "What is overfitting, and how do you prevent it?",
      "Have you worked with deep learning frameworks such as PyTorch or TensorFlow?",
      "Have you worked with large language models?",
      "What is Retrieval-Augmented Generation (RAG)?",
      "Have you built RAG-based applications?",
      "What is the difference between fine-tuning and RAG?",
      "Have you worked with LangChain or LangGraph?",
      "What are embeddings, and why are they useful?",
      "Which vector databases have you worked with?",
      "What is an AI agent?",
      "Have you worked with multi-agent systems?",
      "How do you reduce hallucinations in LLM applications?",
      "Which cloud platforms have you worked with — AWS, Azure, or GCP?",
      "Have you worked with Docker or Kubernetes?",
      "Have you worked with CI/CD pipelines for ML applications?",
    ],
  },
  {
    category: {
      id: "logistics",
      shortName: "Logistics",
      name: "Logistics, Work Authorization & Availability",
    },
    questions: [
      "Where are you currently located?",
      "What is your current address?",
      "Are you authorized to work in the United States?",
      "Do you require visa sponsorship now or in the future?",
      "Are you currently on OPT, H-1B, or a green card?",
      "Are you open to relocating for the right opportunity?",
      "What is your preferred work location?",
      "Are you comfortable with onsite, hybrid, or remote positions?",
      "Are you open to W-2, C2C, or 1099 contract opportunities?",
      "Do you prefer full-time employment or contract positions?",
      "What is your expected annual salary?",
      "What is your expected hourly or weekly rate for contract positions?",
      "What was your previous salary or compensation?",
      "What is your notice period?",
      "How soon would you be available to join?",
      "What is your availability for interviews, and which timezone do you use?",
    ],
  },
  {
    category: {
      id: "behavioral",
      shortName: "Behavioral",
      name: "Behavioral, Motivation & Career Goals",
    },
    questions: [
      "Why are you currently looking for a new opportunity?",
      "What type of AI/ML roles are you targeting?",
      "What motivates you professionally?",
      "Why are you interested in this particular position?",
      "Are you currently interviewing with other companies?",
      "Do you have any competing offers or final-round interviews?",
      "How do you explain technical concepts to nontechnical stakeholders?",
      "How do you handle disagreements with teammates?",
      "How do you manage working remotely?",
      "How do you prioritize multiple tasks with tight deadlines?",
      "Have you mentored junior engineers?",
      "How do you handle unclear project requirements?",
      "How do you stay updated with new AI/ML technologies?",
      "How did you find your previous job opportunities or connect with recruiters?",
    ],
  },
  {
    category: {
      id: "recruiter",
      shortName: "Recruiter",
      name: "Questions to Ask the Recruiter",
    },
    questions: ["Do you have any questions for me?"],
  },
];

export const CATEGORIES: Category[] = GROUPS.map((group) => group.category);

export const QUESTIONS: Question[] = GROUPS.flatMap((group) =>
  group.questions.map((text) => ({ categoryId: group.category.id, text })),
).map((question, index) => ({
  ...question,
  id: `q${index + 1}`,
  number: index + 1,
}));

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

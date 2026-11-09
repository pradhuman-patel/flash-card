/**
 * Answers from earlier versions of flashcards.json, by question ID. Browsers that
 * saved one of these before the app started recording which file answers it had
 * seen still get the newer answer, as long as nobody edited it there.
 */
export const REPLACED_ANSWERS: Record<string, string> = {
  q1: "Yeah, sure. I'm an AI/ML Engineer with around five years of professional experience, mainly in Python, machine learning, NLP, and more recently generative AI, RAG, and AI agents. I started at Accenture as an ML intern and later became a full-time engineer. After moving to the U.S., I joined HCLTech, where I worked on an AI-powered developer assistant. Currently, I'm working with Perplexity through a contract vendor, focusing on multi-agent research, retrieval, and LLM evaluation. My contract ends in the next two weeks, so I'm looking for a long-term role where I can keep building impactful AI products.",
  q6: "My strongest language is Python, and my main focus is AI/ML engineering, especially LLMs, RAG, NLP, and AI agents. I've used LangChain, LangGraph, LlamaIndex, FAISS, Pinecone, FastAPI, SQL, PostgreSQL, Redis, AWS, Azure, Docker, and Kubernetes.",
};

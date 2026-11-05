/**
 * Key phrases to highlight in each answer, by question ID. Each phrase must match
 * the answer text exactly. A phrase that no longer appears after an edit is ignored.
 */
export const HIGHLIGHTS: Record<string, string[]> = {
  q1: [
    "AI/ML Engineer",
    "around five years",
    "generative AI, RAG, and AI agents",
    "multi-agent research, retrieval, and LLM evaluation",
    "contract ends in the next two weeks",
  ],
  q2: [
    "Accenture in March 2020",
    "full-time ML Engineer in January 2021",
    "HCLTech in June 2023",
    "In January 2025",
    "traditional ML toward production generative AI",
  ],
  q3: ["around five years", "March 2020"],
  q4: [
    "entire professional career",
    "predictive modeling and NLP",
    "LLMs, RAG, and agentic AI",
  ],
  q5: [
    "foundation in Python, machine learning, and NLP",
    "enterprise generative AI and developer-assistant applications",
    "multi-agent research, retrieval quality, and LLM evaluation",
  ],
  q6: [
    "strongest language is Python",
    "LLMs, RAG, NLP, and AI agents",
    "LangChain, LangGraph, LlamaIndex",
  ],
  q7: [
    "Python is definitely my strongest language",
    "data processing, ML and NLP pipelines, backend APIs, and LLM applications",
  ],
  q8: [
    "end-to-end LLM applications",
    "RAG pipelines, intelligent search, and agent workflows",
  ],
  q9: [
    "intelligent search, document understanding, developer assistants, and AI-powered research systems",
  ],
  q10: ["haven't worked at a very early-stage startup", "open to a startup"],
  q11: [
    "multi-agent research system at Perplexity",
    "balancing answer quality and latency",
    "retrieval tuning, reranking, and evaluation",
  ],
  q12: [
    "AI/ML Engineer at Perplexity through a contract vendor",
    "LLM research workflows, RAG pipelines, intelligent search, and multi-agent systems",
  ],
  q13: [
    "multi-agent research workflows",
    "retrieval quality, reranking, agent orchestration, and evaluation",
  ],
  q14: ["mix of development, experimentation, and performance improvement"],
  q15: [
    "RAG pipelines",
    "integrating agent tools and APIs",
    "evaluating LLM outputs",
    "optimizing retrieval and latency",
  ],
  q16: ["breaks the question into parts", "faster, more accurate, and more reliable"],
  q17: [
    "retrieval, evaluation, and agent workflow integration",
    "15% better Recall@10",
    "14% improvement in grounded-response quality",
  ],
  q18: [
    "Python, LangChain, LangGraph, LlamaIndex, FAISS, Pinecone, FastAPI, and SQL",
    "RAGAS, LangSmith, and MLflow",
    "AWS, Docker, Kubernetes, and Redis",
  ],
  q19: ["around four to five people"],
  q20: [
    "small engineering team",
    "prefer to keep my manager's specific details private",
  ],
  q21: [
    "AI/ML and engineering teams",
    "answer quality and overall system performance",
  ],
  q22: ["Both, actually", "independently own certain tasks", "collaborate closely"],
  q23: [
    "from technical discussion through implementation, testing, and integration",
    "shared ownership",
  ],
  q24: [
    "production AI systems and deployment workflows",
    "Docker containers, and AWS and Kubernetes-based environments",
  ],
  q25: [
    "15% higher Recall@10",
    "14% better grounded-response quality",
    "25% reduction in p95 research latency",
  ],
  q26: [
    "model quality and system health",
    "retrieval relevance, groundedness, and evaluation scores",
    "latency, errors, and resource usage",
    "MLflow, LangSmith, and CloudWatch",
  ],
  q27: [
    "improving retrieval without making responses too slow",
    "retrieval strategies, caching, parallel execution, and model routing",
  ],
  q28: ["contract-based", "next two weeks", "long-term full-time opportunity"],
  q29: ["contract position through a vendor", "the contract was extended"],
  q30: [
    "contract vendor for six months",
    "positive feedback",
    "budget and headcount limitations, rather than my performance",
    "long-term full-time role",
  ],
  q31: [
    "much more than a powerful model",
    "Retrieval, orchestration, evaluation, latency, and reliability",
  ],
  q32: [
    "AI Engineer at HCLTech from June 2023 to December 2024",
    "AI-powered developer tools",
  ],
  q33: [
    "RAG pipelines, integrated LLMs, built backend APIs, and improved retrieval",
    "both AI and backend engineering",
  ],
  q34: [
    "AI-powered developer assistant",
    "more than 50 repositories",
    "over 100,000 source files and documents",
  ],
  q35: [
    "Python, LangChain, LangGraph, LlamaIndex, Hugging Face, Azure OpenAI, FAISS, Pinecone, and Azure AI Search",
    "FastAPI, PostgreSQL, Redis, Kafka, Docker, Kubernetes, and Azure services",
  ],
  q36: [
    "enterprise AI",
    "multi-agent orchestration, retrieval, and evaluation",
    "deepened my agentic AI experience",
  ],
  q37: [
    "improved retrieval relevance by around 25%",
    "reduced developer investigation time by approximately 30%",
  ],
  q38: [
    "LLMs, advanced search, and multi-agent systems",
    "strong technical next step",
    "on good terms",
  ],
  q39: ["AI Engineer from June 2023 through December 2024"],
  q40: ["around four to five people"],
  q41: [
    "searching across large codebases and documentation",
    "chunking, metadata, embeddings, and reranking",
  ],
  q42: ["March 2020", "early-talent internship program", "get a referral"],
  q43: [
    "Machine Learning Intern for six months",
    "extended for another three months",
    "full-time ML Engineer role",
  ],
  q44: [
    "real ML tasks",
    "Python, SQL, preprocessing, and model evaluation",
    "offered a full-time ML Engineer position",
  ],
  q45: [
    "Machine Learning Intern",
    "full-time ML Engineer in January 2021",
    "NLP, document intelligence, semantic search, and ML services",
  ],
  q46: ["developed and evaluated ML and NLP models", "Python-based services"],
  q47: [
    "delayed payments",
    "enterprise knowledge platform",
    "classification, intent detection, and named entity recognition",
  ],
  q48: [
    "Python, Pandas, NumPy, SQL, scikit-learn",
    "BERT, Transformers, PyTorch, and TensorFlow",
    "FAISS, FastAPI, Docker, AWS, and MLflow",
  ],
  q49: [
    "how ML works in a real business setting",
    "Data quality, understanding the problem, evaluation, and reliability",
  ],
  q50: [
    "relocate to the United States",
    "personal and long-term career reasons",
    "wasn't because of a problem at Accenture",
  ],
  q51: [
    "Python, ML, NLP, APIs, and working with real datasets",
    "enterprise LLM and RAG systems",
  ],
  q52: [
    "Associate of Science in Computer Science at Harper College",
    "Bachelor's in Computer Science at the University of Illinois Chicago",
  ],
  q53: [
    "Bachelor of Science in Computer Science at UIC",
    "May 2027",
    "part-time",
    "in the evenings",
  ],
  q54: [
    "part-time and mostly in the evenings",
    "don't interfere with professional responsibilities",
  ],
  q55: ["data structures, algorithms, databases, and software engineering"],
  q56: [
    "since my Accenture internship in 2020",
    "around six calendar years",
    "data analysis, ML, NLP, APIs, and LLM applications",
  ],
  q57: [
    "Python is my strongest language",
    "Pandas, ML pipelines, FastAPI, and asynchronous services",
  ],
  q58: [
    "Pandas and NumPy",
    "scikit-learn and XGBoost",
    "PyTorch, TensorFlow, and Hugging Face",
    "LangChain, LangGraph, LlamaIndex, and FastAPI",
  ],
  q59: ["Logistic Regression, Random Forest, and XGBoost", "BERT and Transformer models"],
  q60: [
    "Supervised learning uses labeled examples",
    "Unsupervised learning uses unlabeled data",
    "known target labels",
  ],
  q61: [
    "performs poorly on new data",
    "validation splits, cross-validation, regularization, early stopping",
  ],
  q62: ["PyTorch and TensorFlow", "Transformer-based models", "Hugging Face"],
  q63: [
    "GPT, Claude, Gemini, Llama, Mistral, and Sonar",
    "LLM integration, RAG, tool calling, agent workflows, prompt optimization, and evaluation",
  ],
  q64: [
    "retrieving relevant information from external sources",
    "more grounded in the source material",
  ],
  q65: [
    "HCLTech and Perplexity",
    "ingestion, chunking, embeddings, vector and hybrid search, reranking, generation, and retrieval evaluation",
  ],
  q66: [
    "updates model weights",
    "leaves the model weights unchanged",
    "RAG is useful for changing knowledge",
    "fine-tuning is useful for task-specific behavior",
  ],
  q67: [
    "used both",
    "connect models with retrievers, prompts, and tools",
    "stateful, multi-step agent workflows",
  ],
  q68: ["numerical vectors representing the meaning", "semantic search and RAG"],
  q69: ["FAISS, Pinecone, and Azure AI Search", "hybrid search"],
  q70: ["decide what steps or tools to use"],
  q71: [
    "key part of my Perplexity work",
    "LangGraph, tool orchestration, and structured outputs",
  ],
  q72: [
    "reliable retrieval and source grounding",
    "clear prompts, response validation, and evaluation",
    "RAGAS and DeepEval",
  ],
  q73: [
    "AWS and Azure",
    "S3, EC2, Lambda, SageMaker, EKS, and CloudWatch",
    "Azure OpenAI, Azure AI Search, Storage, Azure ML, and AKS",
  ],
  q74: ["Docker", "Kubernetes-based environments", "AWS EKS and Azure AKS"],
  q75: ["CI/CD and MLOps", "MLflow"],
  q76: ["South San Francisco, California"],
  q77: ["South San Francisco, California"],
  q78: ["U.S. lawful permanent resident", "fully authorized"],
  q79: ["don't require employer visa sponsorship", "green card holder"],
  q80: ["green card holder", "not on OPT or H-1B"],
  q81: ["open to relocating"],
  q82: ["California", "flexible and open to other locations"],
  q83: ["onsite, hybrid, or remote"],
  q84: ["W-2 and C2C", "full-time W-2 position"],
  q85: ["full-time W-2 role", "open to contract work"],
  q86: ["$150,000 to $180,000"],
  q87: ["$72 to $86 per hour", "$2,880 to $3,440 weekly"],
  q88: ["keep my previous compensation private", "$150,000 to $180,000"],
  q89: ["next two weeks", "wouldn't need a long notice period"],
  q90: ["approximately two weeks"],
  q91: ["Pacific Time", "fairly flexible"],
  q92: ["next two weeks", "long-term full-time opportunity"],
  q93: [
    "AI/ML Engineer, Generative AI Engineer, LLM Engineer, and Applied AI Engineer",
    "LLMs, RAG, NLP, AI agents, and production applications",
  ],
  q94: ["solving difficult technical problems", "help real users"],
  q95: ["Python, LLM, RAG, and production AI experience", "technical challenges, the team"],
  q96: ["actively exploring opportunities", "contract is ending soon"],
  q97: ["keep the details of other interview processes private", "communicate clearly"],
  q98: [
    "start with the business problem",
    "find information by meaning rather than exact keywords",
  ],
  q99: [
    "listen to the other person's perspective first",
    "data, experiments, or a small proof of concept",
  ],
  q100: ["Communication and ownership", "raise blockers early"],
  q101: ["highest impact", "break work into smaller steps", "communicate early"],
  q102: ["explaining approaches and helping troubleshoot", "knowledge sharing"],
  q103: ["clarify the problem and what success looks like", "small proof of concept"],
  q104: [
    "research papers, technical blogs, documentation, and open-source projects",
    "small experiments",
  ],
  q105: ["came through a referral", "ML portfolio", "Perplexity contract opportunity"],
  q106: [
    "AI team and its main projects",
    "success look like in the first three to six months",
    "next steps in the interview process",
  ],
};

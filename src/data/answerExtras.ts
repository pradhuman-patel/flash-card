export type AnswerExtras = {
  /** Short filler said before the answer. */
  opener: string;
  /** Short filler said after the answer. */
  closer: string;
  /** Optional light joke, related to the question. */
  funny: string;
};

/** Shown around each saved answer, in a lighter italic style. Not part of the answer text. */
export const ANSWER_EXTRAS: Record<string, AnswerExtras> = {
  q1: {
    opener: "Thanks for asking, happy to share.",
    closer: "That's the short version, and I'm happy to go deeper anywhere.",
    funny: "I also promise my RAG pipelines retrieve better than I retrieve my car keys.",
  },
  q2: {
    opener: "I'll keep it quick.",
    closer: "That's my journey so far. Anything you'd like me to zoom in on?",
    funny: "Think of it as my resume with retrieval and reranking already applied.",
  },
  q3: {
    opener: "Good question, let me be precise.",
    closer: "Happy to break that down further if it helps.",
    funny: "In LLM years, that's practically a few centuries.",
  },
  q4: {
    opener: "That's an easy one for me.",
    closer: "So AI/ML has really been my whole path.",
    funny: "At this point even my grocery list gets evaluated for relevance.",
  },
  q5: {
    opener: "Happy to walk you through it.",
    closer: "Each chapter really set up the next one.",
    funny: "No hallucinations in that story, every step is grounded in real sources.",
  },
  q6: {
    opener: "Sure, here's the quick summary.",
    closer: "I'm happy to go deeper on any of these.",
    funny: "My requirements.txt could probably qualify for its own resume.",
  },
  q7: {
    opener: "Easy answer.",
    closer: "That's where I feel most at home.",
    funny: "I've been known to think in indentation.",
  },
  q8: {
    opener: "Let me pick just one.",
    closer: "That's the kind of work I enjoy most.",
    funny: "I get unreasonably happy when Recall@10 goes up.",
  },
  q9: {
    opener: "Sure, here's the big picture.",
    closer: "The common thread is making information easier to find and use.",
    funny: "Basically, I help computers find things so people can stop losing them.",
  },
  q10: {
    opener: "Let me be upfront about that.",
    closer: "I'd really enjoy that kind of ownership.",
    funny: "I'm ready to wear many hats, as long as one of them says Python.",
  },
  q11: {
    opener: "One definitely comes to mind.",
    closer: "It taught me a lot about balancing quality and speed.",
    funny: "Getting several agents to cooperate is harder than scheduling one team meeting.",
  },
  q12: {
    opener: "Sure, happy to explain.",
    closer: "It's been very hands-on work.",
    funny: "Yes, I ask AI questions for a living, but I also check the answers.",
  },
  q13: {
    opener: "Happy to, it's fun to talk about.",
    closer: "It's challenging work, and I really enjoy it.",
    funny: "Picture a research team that never asks for a coffee break.",
  },
  q14: {
    opener: "It varies, but here's a typical day.",
    closer: "No two days look exactly the same.",
    funny: "The coffee is the only part of my pipeline that never gets refactored.",
  },
  q15: {
    opener: "Sure, let me break that down.",
    closer: "So it's a good mix of building and improving.",
    funny: "Some days debugging is my main responsibility, and it knows it.",
  },
  q16: {
    opener: "Absolutely, let me keep it simple.",
    closer: "That's it in plain English.",
    funny: "It's like a very fast research assistant that doesn't need a lunch break.",
  },
  q17: {
    opener: "Sure, I'll focus on my part.",
    closer: "It was a team effort, but those were my main pieces.",
    funny: "I like results I can measure, mostly so I can brag responsibly.",
  },
  q18: {
    opener: "Let me run through the main ones.",
    closer: "I'm always happy to pick up new tools when the work needs it.",
    funny: "My browser tabs are basically a second tech stack.",
  },
  q19: {
    opener: "It's a fairly small team.",
    closer: "I like that size because everyone has real ownership.",
    funny: "Small enough that nobody can hide behind a merge request.",
  },
  q20: {
    opener: "Sure, at a high level.",
    closer: "The structure keeps communication pretty simple.",
    funny: "My experiments report to me, usually with the bad news first.",
  },
  q21: {
    opener: "A few groups, mainly.",
    closer: "Staying in sync helps us avoid surprises.",
    funny: "Nothing builds friendship like a shared latency graph.",
  },
  q22: {
    opener: "Honestly, it's a balance.",
    closer: "I'm comfortable in either mode.",
    funny: "Even when I work alone, my logs keep me company.",
  },
  q23: {
    opener: "I want to answer that accurately.",
    closer: "I like being clear about what was mine and what was shared.",
    funny: "I'd take credit for the whole platform, but my teammates have read access.",
  },
  q24: {
    opener: "Happy to speak to that.",
    closer: "Getting it reliably into production is the part I find most satisfying.",
    funny: "I've learned that 'it works on my machine' doesn't count as a deployment strategy.",
  },
  q25: {
    opener: "Sure, let me put some numbers on it.",
    closer: "Better answers and less waiting is a win for everyone.",
    funny: "Users may not know what Recall@10 is, but they notice when it improves.",
  },
  q26: {
    opener: "Good question, it's something I care about.",
    closer: "Shipping is really just the start of the work.",
    funny: "A model without monitoring is just an optimist in production.",
  },
  q27: {
    opener: "One stands out for me.",
    closer: "It taught me to treat speed and quality as one problem.",
    funny: "Turns out users love accuracy, just not while watching a spinner.",
  },
  q28: {
    opener: "Sure, it's pretty straightforward.",
    closer: "I'm leaving on good terms and looking forward to what's next.",
    funny: "Even my contract has an end date, but my curiosity doesn't.",
  },
  q29: {
    opener: "It's a contract role.",
    closer: "The extension was a nice sign the work was valued.",
    funny: "Think of it as a six-month run that kept passing its evaluation.",
  },
  q30: {
    opener: "Happy to explain that.",
    closer: "So it came down to circumstances, and I'm proud of the work.",
    funny: "Headcount was the one metric I couldn't optimize.",
  },
  q31: {
    opener: "That's a great question.",
    closer: "That lesson will stay with me.",
    funny: "A brilliant model with bad retrieval is like a genius with the wrong textbook.",
  },
  q32: {
    opener: "Sure, happy to share.",
    closer: "It was great hands-on experience.",
    funny: "I helped developers find their code, including code they wished they hadn't written.",
  },
  q33: {
    opener: "Sure, quick overview.",
    closer: "So I got to work on both sides of the product.",
    funny: "I got fluent in embeddings and in explaining why the API returned a 500.",
  },
  q34: {
    opener: "One main project comes to mind.",
    closer: "It had a very direct impact on how developers worked.",
    funny: "Searching 100,000 files is still easier than finding that one old chat message.",
  },
  q35: {
    opener: "Let me list the main ones.",
    closer: "It was a solid enterprise AI stack.",
    funny: "Yes, that's a long list, and yes, I really did use them.",
  },
  q36: {
    opener: "They were quite different, actually.",
    closer: "I value both experiences for different reasons.",
    funny: "One taught me enterprise patience, the other taught me agent patience.",
  },
  q37: {
    opener: "I'm proud of this one.",
    closer: "It was great to see that time saved by real developers.",
    funny: "Less investigating means less time staring at stack traces.",
  },
  q38: {
    opener: "Sure, happy to explain.",
    closer: "It was simply the right next step.",
    funny: "I left for multi-agent systems, not because of any single bad agent.",
  },
  q39: {
    opener: "Let me be accurate about that.",
    closer: "I'm happy to share any details you need.",
    funny: "I'd rather give you the right answer than a hallucinated one.",
  },
  q40: {
    opener: "It was a small team.",
    closer: "That made collaboration really easy.",
    funny: "Small enough that standups actually stayed short.",
  },
  q41: {
    opener: "One challenge stands out.",
    closer: "Better retrieval made a huge difference for the team.",
    funny: "Every codebase has its own personality, and some need therapy.",
  },
  q42: {
    opener: "It's a story I enjoy telling.",
    closer: "That internship really opened the door for me.",
    funny: "Everybody starts somewhere, and mine started with a lot of notebooks.",
  },
  q43: {
    opener: "It started as an internship.",
    closer: "So it grew step by step.",
    funny: "I must have passed the validation set.",
  },
  q44: {
    opener: "It came down to the work itself.",
    closer: "I'm still grateful for that opportunity.",
    funny: "You could call it my first successful model promotion.",
  },
  q45: {
    opener: "Sure, it evolved over time.",
    closer: "It was a great place to grow.",
    funny: "My title got promoted from intern, and so did my datasets.",
  },
  q46: {
    opener: "Sure, at a high level.",
    closer: "It was a strong hands-on foundation.",
    funny: "I learned that most of ML is cleaning data, and the rest is complaining about it.",
  },
  q47: {
    opener: "A couple come to mind.",
    closer: "Both gave me real business exposure.",
    funny: "Late invoices taught me that even payments have latency issues.",
  },
  q48: {
    opener: "Here are the main ones.",
    closer: "Those tools are still the foundation of how I work.",
    funny: "scikit-learn and I go way back, it knows all my bad habits.",
  },
  q49: {
    opener: "That's easy to answer.",
    closer: "It still shapes how I approach projects today.",
    funny: "Real data never looks like the tutorial, and nobody warns you.",
  },
  q50: {
    opener: "Sure, happy to clarify.",
    closer: "Accenture was a great experience, and I'm glad I was there.",
    funny: "It's the one relocation no load balancer could handle for me.",
  },
  q51: {
    opener: "It prepared me really well.",
    closer: "It made my next step feel like a natural one.",
    funny: "Those fundamentals keep paying rent to this day.",
  },
  q52: {
    opener: "Sure, quick summary.",
    closer: "I like keeping learning going alongside work.",
    funny: "I've got homework and production bugs, so my week has good coverage.",
  },
  q53: {
    opener: "Happy to share.",
    closer: "Balancing both has been very doable.",
    funny: "I may be the only student who complains about latency in class.",
  },
  q54: {
    opener: "It takes some planning.",
    closer: "Honestly, each side makes the other one better.",
    funny: "My calendar is my most finely tuned system.",
  },
  q55: {
    opener: "It's helped quite a bit.",
    closer: "The theory and the practice really reinforce each other.",
    funny: "Big-O finally stopped being just an exam question.",
  },
  q56: {
    opener: "Let me give you the honest timeline.",
    closer: "It's been my main language throughout.",
    funny: "Long enough to have strong opinions about virtual environments.",
  },
  q57: {
    opener: "Very comfortable.",
    closer: "It's my go-to for nearly everything.",
    funny: "If Python had a loyalty program, I'd have platinum status.",
  },
  q58: {
    opener: "Let me group them quickly.",
    closer: "The right one just depends on the problem.",
    funny: "My import statements alone could fill a slide.",
  },
  q59: {
    opener: "Quite a range, actually.",
    closer: "I like matching the method to the problem.",
    funny: "I like XGBoost, it rarely asks for much and still shows up to win.",
  },
  q60: {
    opener: "Sure, simple way to put it.",
    closer: "That's the core idea.",
    funny: "One has an answer key, the other is figuring life out on its own.",
  },
  q61: {
    opener: "Good one.",
    closer: "The goal is a model that works on data it hasn't seen.",
    funny: "It's like memorizing the practice test and panicking at the real exam.",
  },
  q62: {
    opener: "Happy to speak to that.",
    closer: "Both have been very useful in my work.",
    funny: "I don't take sides in that debate, I like keeping all my options open.",
  },
  q63: {
    opener: "Sure, that's my main area.",
    closer: "It's been the main focus of my recent work.",
    funny: "I've met enough LLMs to know they all sound confident.",
  },
  q64: {
    opener: "Sure, simply put.",
    closer: "That's why it's so widely used.",
    funny: "It's basically letting the model take an open-book exam.",
  },
  q65: {
    opener: "It's a big part of my work.",
    closer: "I enjoy improving every stage of that pipeline.",
    funny: "At this point, I chunk my to-do lists too.",
  },
  q66: {
    opener: "Good question, they get mixed up a lot.",
    closer: "In practice, you can even use both.",
    funny: "Fine-tuning sends the model to school, RAG just hands it the notes.",
  },
  q67: {
    opener: "Those two I know well.",
    closer: "They've been very useful for complex workflows.",
    funny: "LangGraph is great, my agents finally know when to stop talking.",
  },
  q68: {
    opener: "Sure, simple version.",
    closer: "They're a key building block for modern search.",
    funny: "It's how a computer learns that car and automobile are basically friends.",
  },
  q69: {
    opener: "A few of them.",
    closer: "The choice usually depends on the use case.",
    funny: "I compare them the way others compare coffee shops.",
  },
  q70: {
    opener: "Sure, simple version.",
    closer: "That ability to act is what makes it different.",
    funny: "A chatbot answers you, an agent also goes and does the errands.",
  },
  q71: {
    opener: "Glad you asked.",
    closer: "Coordination is really where the fun challenges are.",
    funny: "It's like managing a team, except nobody asks for time off.",
  },
  q72: {
    opener: "That's an important one.",
    closer: "You can reduce them a lot, so it's all about measuring.",
    funny: "I prefer my models creative only when I've asked them to be.",
  },
  q73: {
    opener: "Mainly two of them.",
    closer: "The core ideas carry across platforms pretty well.",
    funny: "I go wherever the GPUs are available.",
  },
  q74: {
    opener: "Those are part of my routine.",
    closer: "Containers make deployment much more predictable.",
    funny: "Docker finally ended the 'it works on my machine' argument, mostly.",
  },
  q75: {
    opener: "Glad you asked.",
    closer: "Good automation saves a lot of surprises later.",
    funny: "I like when pipelines fail before production does.",
  },
  q76: {
    opener: "Sure.",
    closer: "Happy to share more if it's useful.",
    funny: "Close enough to the AI scene that even the coffee shops talk about LLMs.",
  },
  q77: {
    opener: "Sure, at a general level.",
    closer: "Thanks for understanding.",
    funny: "My embeddings know where I live, but let's keep it to city level for now.",
  },
  q78: {
    opener: "That's simple.",
    closer: "So there's nothing to worry about there.",
    funny: "That's the easiest question you'll ask me all day, no retrieval needed.",
  },
  q79: {
    opener: "That's an easy one.",
    closer: "So no paperwork needed from your side.",
    funny: "One less dependency for you to manage.",
  },
  q80: {
    opener: "Happy to clarify.",
    closer: "So nothing needed on that front.",
    funny: "My status is the one thing in my life that doesn't need versioning.",
  },
  q81: {
    opener: "Glad you asked.",
    closer: "The right work matters most to me.",
    funny: "I'm portable, just like a good Docker image.",
  },
  q82: {
    opener: "I'm pretty flexible.",
    closer: "I'm happy to discuss what works best for the team.",
    funny: "Location is just one more parameter I'm happy to tune.",
  },
  q83: {
    opener: "All of them work for me.",
    closer: "I'll adapt to what the team needs.",
    funny: "Wherever there's Wi-Fi and a good problem, I'm productive.",
  },
  q84: {
    opener: "I'm open to discussing that.",
    closer: "Happy to talk through what works on your side.",
    funny: "I'm more flexible on contract types than my models are on input formats.",
  },
  q85: {
    opener: "I'll be straightforward.",
    closer: "It really comes down to the right fit.",
    funny: "I'm looking for a long-term relationship, preferably with good data.",
  },
  q86: {
    opener: "Sure, happy to share a range.",
    closer: "I'm open to discussing the full picture.",
    funny: "My salary expectations are grounded, no hallucinations there.",
  },
  q87: {
    opener: "Sure, happy to share.",
    closer: "It's open to discussion based on the role.",
    funny: "I charge by the hour, but my models still run overnight for free.",
  },
  q88: {
    opener: "Thanks for asking.",
    closer: "I appreciate your understanding.",
    funny: "Some data stays in my private vector store.",
  },
  q89: {
    opener: "Good news on that one.",
    closer: "So timing should be pretty easy.",
    funny: "My notice period has lower latency than most.",
  },
  q90: {
    opener: "Pretty soon, actually.",
    closer: "I'm excited to get started.",
    funny: "I'm almost ready to deploy, just finishing the current run.",
  },
  q91: {
    opener: "I'm pretty flexible.",
    closer: "Just let me know what works best for you.",
    funny: "My calendar has better availability than most production systems.",
  },
  q92: {
    opener: "Sure, the timing is simple.",
    closer: "I'm excited about what's next.",
    funny: "My contract is ending, but my enthusiasm has been extended.",
  },
  q93: {
    opener: "Mainly hands-on AI roles.",
    closer: "Anything where I can build real products excites me.",
    funny: "Basically, anywhere someone says RAG and nobody asks why.",
  },
  q94: {
    opener: "That's a nice question.",
    closer: "That's what keeps work fun for me.",
    funny: "Also, a green test suite can make my whole day.",
  },
  q95: {
    opener: "Honestly, it looks like a great match.",
    closer: "I'd love to learn more.",
    funny: "It matched my resume with a very high cosine similarity.",
  },
  q96: {
    opener: "I'll be open about that.",
    closer: "This role is one I'm really interested in.",
    funny: "I'm running a small parallel search, with reranking.",
  },
  q97: {
    opener: "Thanks for asking.",
    closer: "I'll keep you posted if anything changes.",
    funny: "Let's just say my search results are still loading.",
  },
  q98: {
    opener: "I enjoy doing that, actually.",
    closer: "If they can explain it back, I know it worked.",
    funny: "If my parents understand it, I know I'm ready for stakeholders.",
  },
  q99: {
    opener: "It happens, and that's healthy.",
    closer: "Keeping things respectful makes it easy.",
    funny: "When in doubt, let the A/B test take the blame.",
  },
  q100: {
    opener: "It works well for me.",
    closer: "Clear communication makes distance a non-issue.",
    funny: "My commute is now one git pull.",
  },
  q101: {
    opener: "It's mostly about clarity.",
    closer: "That's kept me from overpromising.",
    funny: "I run my own priority queue, and coffee is always on top.",
  },
  q102: {
    opener: "I'll answer that honestly.",
    closer: "I always enjoy helping teammates grow.",
    funny: "I've explained a lot of tensor shape errors, which feels like a form of mentoring.",
  },
  q103: {
    opener: "It happens a lot in AI work.",
    closer: "A little clarity early saves weeks later.",
    funny: "Unclear requirements are just unlabeled data, you have to ask questions.",
  },
  q104: {
    opener: "It's part of the job, honestly.",
    closer: "I try to stay curious without chasing every trend.",
    funny: "In AI, you can take a long weekend and return to three new frameworks.",
  },
  q105: {
    opener: "It's been a mix.",
    closer: "Building real work and connections has really helped me.",
    funny: "It turns out networking works a lot like retrieval, relevance matters.",
  },
  q106: {
    opener: "Thanks, I do.",
    closer: "Those would really help me understand the role.",
    funny: "And most importantly, who wins the tabs versus spaces debate on your team?",
  },
};

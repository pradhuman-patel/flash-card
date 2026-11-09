# AI/ML Interview Flashcards

A personal flashcard site for AI/ML Engineer interview preparation: 106 questions in 9 categories, with answers you can edit. On a computer, click a card to flip it between the question and your answer. On a phone, tap a card to open it in a popup.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Where your answers are stored

Questions and starting answers come from `src/data/flashcards.json`. The first time a browser opens the site, it copies those answers into LocalStorage under the key `aiml-flashcards:answers:v2`, stored by question ID (`q1` to `q106`). From then on the browser's copy wins, so your edits and deletions stick. When an answer changes in the JSON file, a browser picks up the new version only if it still has the old one, so answers you edited in the app are never replaced. Clearing site data removes your edits and goes back to the file's answers.

**Privacy:** the answers in `flashcards.json` are part of the source code, so anyone who can see this repository or open the site can read them.

Use **Export Answers** to download a JSON backup and **Import Answers** to restore one. Importing asks for confirmation before replacing a saved answer with different text, and answers the backup leaves blank are kept.

## Where things live

- `src/data/flashcards.json`: the questions, categories and starting answers
- `src/data/questions.ts`: loads that file for the app
- `src/data/highlights.ts`: the most important line of each answer, shown highlighted
- `src/data/answerExtras.ts`: the opening and closing fillers and optional funny line shown around each answer
- `src/lib/answers.ts`: reading and writing LocalStorage
- `src/lib/backup.ts`: export and import validation
- `src/components/`: the dashboard, flip card, question popup and editor

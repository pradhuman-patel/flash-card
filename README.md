# AI/ML Interview Flashcards

A personal flashcard site for AI/ML Engineer interview preparation: 106 questions in 9 categories, with answers you write yourself. Click a card to flip it between the question and your answer.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Where your answers are stored

Answers are saved in this browser's LocalStorage under the key `aiml-flashcards:answers:v1`, stored by question ID (`q1` to `q106`). They stay on this device and in this browser, so clearing site data removes them, and they aren't shared with other browsers.

Use **Export Answers** to download a JSON backup and **Import Answers** to restore one. Importing asks for confirmation before replacing a saved answer with different text, and answers the backup leaves blank are kept.

## Where things live

- `src/data/questions.ts`: the questions and categories
- `src/lib/answers.ts`: reading and writing LocalStorage
- `src/lib/backup.ts`: export and import validation
- `src/components/`: the dashboard, flip card, editor and full question view

# SpiritLibrary

Personal notes on AI engineering, databases, security, and SQL.

The site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). The home page shows topics as cards, and each topic opens a documentation section containing its notes.

## Project structure

```
src/
├── components/
│   ├── TopicCards.astro   # topic cards shown on the home page
│   └── TopicNotes.astro   # note cards shown on a topic page
├── content/docs/
│   ├── index.mdx          # home page
│   └── notes/
│       └── <topic>/       # one folder per topic
│           ├── index.mdx  # topic overview + note list
│           └── <note>.mdx # individual notes
└── data/topics.ts         # topic titles and descriptions
```

## Add a topic

1. Add the topic to `src/data/topics.ts` so it appears as a card on the home page.
2. Create `src/content/docs/notes/<topic-slug>/index.mdx` with the topic title, description, and a `<TopicNotes topic="<topic-slug>" />` component.
3. Add a sidebar group for the topic in `astro.config.mjs`.

## Add a note

Create an MDX file in the topic’s folder, for example `src/content/docs/notes/<topic-slug>/<note-slug>.mdx`:

```mdx
---
title: My note title
description: A short summary shown on the topic page.
---

Write the note here.
```

The note automatically appears in the topic’s note list and in the sidebar.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `bun install`     | Installs dependencies                       |
| `bun dev`         | Starts the dev server at `localhost:4321`   |
| `bun build`       | Builds the production site to `./dist/`     |
| `bun preview`     | Previews the production build locally       |
| `bun astro ...`   | Runs Astro CLI commands                     |

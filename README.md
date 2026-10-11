# commonplace

A personal notebook built with Astro. Topic and note content is written in MDX under `src/content` and imported into the static pages at build time.

## Add a topic

Create `src/content/topics/<topic-slug>.mdx` with this frontmatter:

```mdx
---
slug: databases
name: Databases
number: "05"
description: Storage, queries & data modeling
---

Write a short topic introduction here. It can include **MDX** formatting.
```

## Organize notes

Content follows this hierarchy: **Topic → Source → Notes from that source**. A topic is a file in `src/content/topics/`. Store each individual note as an MDX file in `src/content/notes/<topic-slug>/<source-slug>/`. The `source-slug` folder is based on the source title, and `sourceTitle` in each note's frontmatter must match the source's display name. Notes in the same folder and with the same `sourceTitle` appear together on the source page.

## Add an individual note

Create one note file per note under `src/content/notes/<topic-slug>/<source-slug>/`. The topic folder must match the topic document's `slug`. Keep notes from a source together in its source folder and use the same `sourceTitle` in their frontmatter.

```mdx
---
slug: indexes
title: Indexes trade space for faster lookups
topic: databases
sourceKind: Book
sourceTitle: Database Systems
sourceDetail: Author or other resource details
reference: Chapter 4 · Indexes
excerpt: A short summary shown in the note list.
sample: false
---

Write the full note here. Headings, lists, links, and other MDX are supported.
```

## Add images to a note

Place image files in `public/images/notes/<topic-slug>/<source-slug>/` to share one folder across all notes from a source. The source slug is the lowercased, hyphenated version of `sourceTitle` (for example, `SQL Course by Baraa Khatib` becomes `sql-course-by-baraa-khatib`). Reference images from a note's MDX by filename:

```mdx
![A diagram showing the idea](./diagram.png)
```

Images are displayed responsively on the individual note page. You can also use a root-relative path such as `/images/shared/diagram.png` or an external image URL.

`sourceKind` may be `Book`, `Video course`, `Course`, `Cohort`, or `Field notes`. `reference` is optional when the note has no chapter, lesson, or section reference. Use a unique `slug` for each note within its topic. The included Cyber, Data, JavaScript, and Python documents are labeled samples and can be replaced with your own content.

## Development

```sh
bun run dev
bun run build
bun run typecheck
```

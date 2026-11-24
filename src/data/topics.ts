/** The kind of source a topic's notes are gathered from. */
export type SourceKind =
  | "book"
  | "course"
  | "specialization"
  | "article"
  | "video"
  | "docs";

export interface Topic {
  /** URL segment for the topic. Must match the folder under `src/content/docs/notes/`. */
  slug: string;
  /** Display name shown on cards and in the sidebar. */
  title: string;
  /** Short summary shown on the topic card. */
  description: string;
  /** Where the material comes from. */
  kind: SourceKind;
  /** Author, institution, or platform. */
  source?: string;
  /** Canonical link to the original source. */
  url?: string;
}

// Array order is the order topics appear on the home page.
export const topics: Topic[] = [
  {
    slug: "security-fundamentals",
    title: "Security Fundamentals",
    description: "Notes on core security principles and practices.",
    kind: "course",
  },
  {
    slug: "microsoft-sql-server",
    title: "Microsoft SQL Server",
    description: "Notes on working with Microsoft SQL Server.",
    kind: "specialization",
  },
];

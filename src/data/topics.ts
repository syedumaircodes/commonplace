/** The kind of source a topic's notes are gathered from. */
export type SourceKind = 'book' | 'course' | 'specialization' | 'article' | 'video' | 'docs';

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
    slug: 'grokking-relational-database-design',
    title: 'Grokking Relational Database Design',
    description:
      'Notes on relational database design from the book by Q. Hao and M. Tsikerdekis.',
    kind: 'book',
    source: 'Q. Hao and M. Tsikerdekis',
  },
  {
    slug: 'security-engineering-v3',
    title: 'Security Engineering v3',
    description:
      'Notes on building and securing systems from Ross Anderson’s Security Engineering.',
    kind: 'book',
    source: 'Ross Anderson',
  },
  {
    slug: 'microsoft-sql',
    title: 'Microsoft SQL Server',
    description: 'Notes on relational databases and SQL.',
    kind: 'course',
    source: 'Microsoft',
  },
];

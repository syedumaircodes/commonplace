export interface Topic {
  /** URL segment for the topic. */
  slug: string;
  /** Display name shown on cards and in the sidebar. */
  title: string;
  /** Short summary shown on the topic card. */
  description: string;
}

export const topics: Topic[] = [
  {
    slug: "grokking-relational-database-design",
    title: "Grokking Relational Database Design",
    description:
      "Notes on relational database design from the book by Q. Hao and M. Tsikerdekis.",
  },
  {
    slug: "security-engineering-v3",
    title: "Security Engineering v3",
    description:
      "Notes on building and securing systems from Ross Anderson’s Security Engineering.",
  },
  {
    slug: "microsoft-sql",
    title: "Microsoft SQL Server",
    description: "Notes on relational databases and SQL.",
  },
];

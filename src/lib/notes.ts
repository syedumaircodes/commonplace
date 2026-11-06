export type NoteData = {
  slug: string
  title: string
  sourceKind: "Book" | "Video course" | "Course" | "Cohort" | "Field notes"
  sourceTitle: string
  sourceDetail: string
  reference?: string
  excerpt: string
  sample?: boolean
}

type MdxModule<Data> = {
  frontmatter: Data
  default: AstroComponentFactory
}

const noteModules = import.meta.glob("../content/notes/**/*.mdx", {
  eager: true,
}) as Record<string, MdxModule<NoteData>>

export const notes = Object.values(noteModules).map(
  ({ frontmatter, default: Content }) => ({ data: frontmatter, Content })
)

export function sourceSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}
import type { AstroComponentFactory } from "astro/runtime/server/index.js"

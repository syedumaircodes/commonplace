import type { APIRoute } from "astro"
import { notes, sourceSlug, topics } from "@/lib/topics"
import { SITE } from "@/lib/site"

export const GET: APIRoute = () => {
  const base = SITE.url.replace(/\/$/, "")

  const urls: string[] = ["/"]
  for (const topic of topics) {
    urls.push(`/notes/${topic.data.slug}/`)
  }
  for (const note of notes) {
    const topic = topics.find(({ data }) => data.slug === note.data.topic)
    if (!topic) continue
    const source = sourceSlug(note.data.sourceTitle)
    urls.push(`/notes/${topic.data.slug}/${source}/`)
    urls.push(`/notes/${topic.data.slug}/${source}/${note.data.slug}/`)
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...new Set(urls)]
  .map((path) => `  <url><loc>${base}${path}</loc></url>`)
  .join("\n")}
</urlset>
`

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}

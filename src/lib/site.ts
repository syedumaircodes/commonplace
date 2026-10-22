/**
 * Global site metadata used for SEO, social cards, and structured data.
 * The library is a personal notebook by Syed Umair Ali (@syedumaircodes),
 * modelled on Wan Shi Tong's library from Avatar: The Last Airbender.
 */
export const SITE = {
  name: "Spirit Library",
  shortName: "Spirit Library",
  url: "https://spiritlibrary.vercel.app",
  locale: "en_US",
  title: "Spirit Library — a living notebook",
  description:
    "A living spirit library: notes on tech and software engineering, databases, security, and cloud, curated the way Wan Shi Tong kept the library in Avatar.",
  keywords: [
    "spirit library",
    "Wan Shi Tong",
    "Avatar The Last Airbender",
    "personal knowledge base",
    "notes",
    "databases",
    "security engineering",
    "Syed Umair Ali",
    "syedumaircodes",
  ],
  image: "/og-image.png",
  author: {
    name: "Syed Umair Ali",
    handle: "syedumaircodes",
    url: "https://syedumaircodes.vercel.app",
    github: "https://github.com/syedumaircodes",
  },
  inspiration: {
    name: "Wan Shi Tong",
    title: "Wan Shi Tong",
    url: "https://avatar.fandom.com/wiki/Wan_Shi_Tong",
  },
} as const

export const AUTHOR = SITE.author
export const INSPIRATION = SITE.inspiration

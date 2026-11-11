// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import { createCssVariablesTheme } from "shiki"

// https://astro.build/config
export default defineConfig({
  site: "https://syedumaircodes.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      // Every token colour becomes a CSS variable, so the code palette is
      // defined in global.css alongside the rest of the design system.
      // defaultColor:false keeps the block's own surface under our control.
      theme: createCssVariablesTheme({
        name: "spirit-library",
        variablePrefix: "--code-",
        variableDefaults: {
          foreground: "#e6e3e8",
          background: "#1a1919",
          "token-comment": "#8b8792",
          "token-keyword": "#f08a95",
          "token-string": "#9fd3a0",
          "token-function": "#8fb8f0",
          "token-constant": "#d8b98a",
          "token-parameter": "#c9c4cf",
          "token-punctuation": "#a7a1a8",
          "token-link": "#85b8fc",
          "token-changed": "#d8b98a",
          "token-deleted": "#f08a95",
          "token-inserted": "#9fd3a0",
          "token-string-expression": "#9fd3a0",
        },
      }),
      defaultColor: false,
    },
  },
  integrations: [react(), mdx()],
})

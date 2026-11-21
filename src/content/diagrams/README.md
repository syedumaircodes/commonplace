# Diagrams

Mermaid diagram sources live here as `.mmd` files and are rendered to SVG at
build time with [Pele](https://pele.run) — no JavaScript ships to the browser.

Drop a `.mmd` file in this folder, then render it from an MDX note.

## Use a stored diagram

```mdx
import Diagram from '@/components/Diagram.astro';

<Diagram name="example" caption="A simple security review loop." />
```

`name` is the path inside this folder, with or without the `.mmd` extension.
Nested folders work too, for example `name="security/trust-boundary"`.

## Inline a diagram

```mdx
import Diagram from '@/components/Diagram.astro';

<Diagram source={`flowchart LR
  A[One] --> B[Two]`} />
```

## Diagram types

Pele supports every diagram type built into Mermaid 12.1, including flowcharts,
sequence, class, state, ER, Gantt, pie, mindmap, timeline, and more. See the
[examples](https://pele.run/examples) for a full list.

Colors follow the site's theme through CSS variables defined in
`src/components/Diagram.astro`, so diagrams match light and dark backgrounds
automatically.

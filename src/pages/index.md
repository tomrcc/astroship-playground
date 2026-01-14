---
layout: ../layouts/IndexLayout.astro
content_blocks:
  - type: hero
    heading: Marketing website done with Astro
    content: >-
      Astroship is a starter template for startups, marketing websites &amp;
      landing pages. Built with Astro.build and TailwindCSS. You can quickly
      create any website with this starter. We can also edit inline on the page.
    color: '#f3a4a4'
    image: /src/assets/hero.png
  - type: features
  - type: logos
  - type: cta
    background_color: "#034ad8"
    title: This is CTA
    text_color: "#ff0000"
    list_items:
      - title: Item 1 
        desc: A lil description
      - title: Item 2 
        desc: Another lil description
  - type: grid
    title: Hello card grid
    cards:
      - title: Card 1
        content: Wassssup
      - title: Card 2
        content: Wassssup2
      - title: Card 3
        content: Wassssup3
  - type: grid2
    title: Hello card grid2. This has no editable array nested.
    cards:
      - title: Card 1
        content: Wassssup
      - title: Card 2
        content: Wassssup2
      - title: Card 3
        content: Wassssup3
---

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
    title: Hello card grid. This has an editable array nested, with no nested editables inside each array item.
    cards:
      - title: Card 1
        content: Wassssup
        background_color: "#ff0000"
      - title: Card 2
        content: Wassssup2
        background_color: "#00ff00"
      - title: Card 3
        content: Wassssup3
        background_color: "#0000ff"
  - type: grid2
    title: Hello card grid2. This has no editable array nested.
    cards:
      - title: Card 1
        content: Wassssup
      - title: Card 2
        content: Wassssup2
      - title: Card 3
        content: Wassssup3
  - type: grid3
    title: Hello card grid3. This has an editable array nested. It has one nested editable inside each array item.
    cards:
      - title: Card 1
        content: Wassssup
      - title: Card 2
        content: Wassssup2
      - title: Card 3
        content: Wassssup3
  - type: grid4
    title: Hello card grid4. This has an editable array nested, with each array item being a registered component.
    cards:
      - title: Card 1
        content: Wassssup
        background_color: "#0000ff"
      - title: Card 2
        content: Wassssup2
        background_color: "#0f0ff"
      - title: Card 3
        content: Wassssup3
        background_color: "#0dd0ff"
---

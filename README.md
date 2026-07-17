# Apple Clone (Practice Project)

A small front-end practice build recreating parts of Apple's homepage — the nav bar, hero section, and a two-column feature section. Built with plain HTML, CSS, and vanilla JS. No frameworks, no build tools, just the fundamentals.
<br/>
Live Link : https://tcintern-006.github.io/Apple/

## Why I used Flexbox everywhere

I went with Flexbox as the main layout tool across this whole project instead of Grid or floats, and honestly it came down to how the actual page is structured.

Almost everything on this page is a **single row or a single column of stuff** — the nav bar is a row (logo, links, icons), the hero card is a column (heading, text, buttons, image stacked on top of each other), and the feature section is either a stack of two cards on mobile or two cards side by side on desktop. None of that needed a full two-dimensional grid system. Grid really shines when you've got a layout that needs to control rows *and* columns at the same time — like a photo gallery or a dashboard. This page didn't need that, so reaching for Grid would've been overkill.

Flexbox also made the responsive part way less painful. Since most of my breakpoints are really just "stack these on top of each other on small screens, put them side by side on bigger screens," all I had to do was flip `flex-direction` from `column` to `row` inside a media query. That's it. No rebuilding the whole layout, no re-templating grid areas — just one property changing based on screen width.

Another big reason: **centering stuff.** Anyone who's done CSS knows vertically centering something used to be a pain (the old trick was messing with `position: absolute` and negative margins, or table-display hacks). With Flexbox, `align-items: center` and `justify-content: center` on a flex container just... centers things. That's why my hero card and nav bar both lean on Flexbox for alignment — it was the fastest, least fragile way to get things centered both ways without fighting the box model.

I also used `flex: 1` in a couple of spots (like the hero image) so an element automatically grows to fill whatever space is left in its container, instead of me having to calculate a fixed height by hand. That one property adapts on its own whether the screen is short or tall.

So overall: the layouts in this project are mostly one-directional (rows or columns), need to respond to screen size by changing direction rather than rebuilding structure, and need easy centering. That's exactly the situation Flexbox was designed for, which is why I didn't reach for Grid or anything heavier.

## Structure

```
├── index.html      → page markup (nav, hero, feature sections)
├── style.css       → all styling, mobile-first with breakpoints at 750px and 1000px
├── script.js       → hamburger menu toggle logic
└── README.md
```

## Responsive behavior

- **Mobile-first**: base styles target small screens, media queries add/override styles for bigger screens (not the other way around).
- **750px+**: feature section switches from stacked to side-by-side, hero card shrinks in height.
- **1000px+**: full nav menu becomes visible inline, hamburger button disappears.
- Below 1000px, the nav collapses behind a hamburger icon that slides a full-screen menu in from the left using `transform: translateX()` (kept off `display: none`/`flex` so the animation can actually transition smoothly).

## Notes / things I learned building this

- `vh`/`vw` units are handy for hero-style full-bleed layouts but get unreliable fast once nested inside padded/bordered containers — switched most of those over to `100%` so images size relative to their real parent instead of the raw viewport.
- `min-width: 100%` on the mobile feature-item layout has to be explicitly reset (`min-width: 0`) inside the desktop media query, since `min-width` always overrides a conflicting `width` value.
- `display` can't be transitioned, so the mobile nav slide-in effect uses `transform` instead, which animates fine.

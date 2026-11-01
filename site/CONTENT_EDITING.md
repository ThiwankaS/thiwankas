# Content Editing Guide

Career history and project lists stay on LinkedIn / GitHub so you don’t maintain them twice.

## Where to edit

| What | File |
|---|---|
| **Learn-loop text (01 / 02 / 03)** | `site/js/content/learn-loop.js` |
| Social links | `site/js/content/socials.js` |
| Tools / icons grid | `site/js/content/stack.js` |
| Hero bio line | `site/index.html` → `.bio` |
| Who I am / What keeps me going | `site/index.html` → `.story-block` |
| Colors | `site/css/theme.css` |
| Photo | `site/assets/profile.jpg` |
| Resume | `site/Thiwankas.pdf` |

## JS layout

```
site/js/
  main.js                 ← boots everything (loaded by index.html)
  content/
    learn-loop.js         ← EDIT learn-loop copy
    socials.js            ← EDIT social links
    stack.js              ← EDIT tools grid
  render-learn-loop.js    ← builds the board DOM
  render-socials.js
  render-stack.js
  theme.js                ← light / dark toggle
  learn-loop-ring.js      ← SVG wedge paths (visual only)
  lib/escape-html.js
```

## Learn loop example

In `site/js/content/learn-loop.js`:

```js
export const learnLoop = {
  coreTitle: "How I learn",
  coreSub: "closed loop",
  steps: [
    {
      key: "notice",   // keep: notice | guide | build
      index: "01",
      title: "Problem · idea · tech",
      desc: "Your description…"
    },
    // …
  ]
};
```

Do **not** rename the `key` values — they place each step on the board.

## Local preview

Serve the `site` folder over HTTP (ES modules need a server, not `file://`):

```bash
cd site && python3 -m http.server 8080
```

Open `http://localhost:8080/` — check desktop and a phone-sized window.
Hard-refresh after edits if the browser caches CSS/JS.

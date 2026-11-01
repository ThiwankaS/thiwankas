# Content Editing Guide

This site is a short practice story + tools grid. Career history and project lists stay on LinkedIn / GitHub so you don’t maintain them twice.

| What you want to change | File | Where |
|---|---|---|
| Story / about copy | `site/index.html` | `The practice` section |
| Hero opening line | `site/index.html` | `.bio` in the hero |
| Socials + tool icons | `site/app.js` | `PROFILE.socials` / `PROFILE.stack` |
| Colors | `site/css/theme.css` | `:root` / `:root.light` |
| Layout CSS | `site/css/*.css` | imported by `styles.css` |
| Tech icons | `site/assets/icons/` | `{name}-light.svg` / `{name}-dark.svg` |
| Photo | `site/assets/profile.jpg` | replace the file |
| Resume PDF | `site/Thiwankas.pdf` | replace the file |

## Page flow

1. Top bar + hero (identity, opening line, Resume / socials)
2. **The practice** — who you are, how layers connect, what keeps you going
3. **Tools & environment** — compact icon grid
4. Footer

## Tools grid

In `app.js` → `PROFILE.stack`:

```js
{ icon: "python", label: "Python" }
```

Needs matching files: `assets/icons/python-light.svg` and `python-dark.svg`.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/site/`

Hard-refresh after edits if the browser caches CSS/JS.

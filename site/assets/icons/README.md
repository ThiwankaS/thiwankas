# Tech stack icons

Colored SVG icons for the “Current tech stack” grid.

## Sources

- **[tech-stack-icons.com](https://www.tech-stack-icons.com/)** — primary set (`cpp`, `bash`, `git`, `docker`, `tensorflow`, `pytorch`, `qt`, …)
- Brand SVGs for gaps (`c`, `cmake`, `linux`)
- Small custom colored tiles when no public logo exists (`gdb`, `valgrind`, `sockets`, `threads`, `stm32`, `ml`)

Each icon has two files:

- `{name}-light.svg` — for light page background
- `{name}-dark.svg` — for dark page background

`app.js` swaps them when the theme toggle changes.

## In the live stack now

Languages/tools: `cpp`, `c`, `python`, `javascript`, `react`, `nodejs`, `qt`, `sqlite`  
OS: `archlinux`, `debian`  
Systems: `cmake`, `gdb`, `valgrind`, `sockets`, `threads`, `rtos`, `embedded`, `tinyml`, `git`, `bash`  
Editors/AI: `neovim`, `vscode`, `cursor`, `gemini`

Edit the live list in `site/js/content/stack.js`.

## Ready to add later

```js
{ icon: "tensorflow", label: "TensorFlow" },
{ icon: "pytorch", label: "PyTorch" },
{ icon: "docker", label: "Docker" },
{ icon: "stm32", label: "STM32" },
{ icon: "ml", label: "ML" },
{ icon: "linux", label: "Linux" },
{ icon: "macos", label: "macOS" },
```

## Add a new icon from tech-stack-icons.com

1. Find the icon on the site and download **light** + **dark** variants (or copy from their CDN / npm package).
2. Save as `assets/icons/mytool-light.svg` and `mytool-dark.svg`.
3. Add `{ icon: "mytool", label: "My Tool" }` to `PROFILE.stack`.

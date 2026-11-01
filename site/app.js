(function () {
  const root = document.documentElement;
  const THEME_KEY = "prefers-light";

  /* ===========================================================================
     PROFILE DATA — edit socials + tool icons here
     Story copy lives in index.html (The practice section)
     Experience / projects: keep LinkedIn + GitHub updated instead
     =========================================================================== */
  const PROFILE = {
    socials: [
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com/ThiwankaS",
        external: true,
        svg: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.01 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>'
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/so-thiwanka/",
        external: true,
        svg: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 7.08a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7zM20.25 20h-3.18v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V20H9.88V8.5h3.05v1.57h.04c.43-.8 1.46-1.65 3.01-1.65 3.22 0 3.81 2.12 3.81 4.88V20z"/></svg>'
      },
      {
        id: "x",
        label: "X",
        href: "https://x.com/So_Thiwanka",
        external: true,
        svg: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18.9 2H22l-6.78 7.75L23 22h-6.55l-5.13-6.7L5.4 22H2.3l7.25-8.29L1 2h6.7l4.63 6.13L18.9 2zm-1.15 18h1.82L6.37 3.9H4.42L17.75 20z"/></svg>'
      },
      {
        id: "email",
        label: "Email",
        href: "mailto:thivankas@outlook.com",
        svg: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>'
      }
    ],

    stack: [
      { icon: "cpp", label: "C++" },
      { icon: "c", label: "C" },
      { icon: "python", label: "Python" },
      { icon: "javascript", label: "JavaScript" },
      { icon: "qt", label: "Qt" },
      { icon: "sqlite", label: "SQLite" },
      { icon: "linux", label: "Linux" },
      { icon: "archlinux", label: "Arch" },
      { icon: "debian", label: "Debian" },
      { icon: "macos", label: "macOS" },
      { icon: "cmake", label: "CMake" },
      { icon: "gdb", label: "GDB" },
      { icon: "valgrind", label: "Valgrind" },
      { icon: "sockets", label: "Sockets" },
      { icon: "threads", label: "Threads" },
      { icon: "git", label: "Git" },
      { icon: "bash", label: "Bash" },
      { icon: "neovim", label: "Neovim" },
      { icon: "vscode", label: "VS Code" },
      { icon: "cursor", label: "Cursor" },
      { icon: "gemini", label: "Gemini" }
    ]
  };

  /* ===========================================================================
     THEME TOGGLE
     =========================================================================== */
  const modeButton = document.getElementById("modeToggle");
  const ICON_MOON =
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M21 14.3A9 9 0 1 1 9.7 3a7 7 0 1 0 11.3 11.3z"/></svg>';
  const ICON_SUN =
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';

  function stackVariant() {
    return root.classList.contains("light") ? "light" : "dark";
  }

  function refreshStackIcons() {
    const variant = stackVariant();
    document.querySelectorAll("#stackGrid img.stack-icon").forEach((img) => {
      const name = img.getAttribute("data-icon");
      if (name) img.src = `assets/icons/${name}-${variant}.svg`;
    });
  }

  function applyTheme(isLight) {
    if (isLight) {
      root.classList.add("light");
      modeButton.innerHTML = ICON_SUN;
    } else {
      root.classList.remove("light");
      modeButton.innerHTML = ICON_MOON;
    }
    refreshStackIcons();
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = savedTheme
    ? savedTheme === "1"
    : window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight);

  modeButton.addEventListener("click", () => {
    const now = !root.classList.contains("light");
    applyTheme(now);
    localStorage.setItem(THEME_KEY, now ? "1" : "0");
  });

  /* ===========================================================================
     RENDERERS
     =========================================================================== */
  function renderSocials() {
    const nav = document.getElementById("socialLinks");
    nav.innerHTML = PROFILE.socials
      .map((item) => {
        const attrs = item.external ? ' target="_blank" rel="me noopener"' : "";
        return `<a href="${item.href}" aria-label="${item.label}"${attrs}>${item.svg}</a>`;
      })
      .join("");
  }

  function renderStack() {
    const grid = document.getElementById("stackGrid");
    const variant = stackVariant();
    grid.innerHTML = PROFILE.stack
      .map(
        (item) => `
        <li class="stack-item">
          <span class="stack-mark">
            <img
              class="stack-icon"
              src="assets/icons/${item.icon}-${variant}.svg"
              alt=""
              width="28"
              height="28"
              loading="lazy"
              data-icon="${item.icon}"
            />
          </span>
          <span class="stack-label">${item.label}</span>
        </li>
      `
      )
      .join("");
  }

  /* ===========================================================================
     BOOT
     =========================================================================== */
  document.getElementById("year").textContent = new Date().getFullYear();
  renderSocials();
  renderStack();
})();

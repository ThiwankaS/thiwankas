/* =============================================================================
   THEME TOGGLE — light / dark preference + stack icon refresh hook
   Button: #modeToggle in index.html
   ============================================================================= */

const THEME_KEY = "prefers-light";

const ICON_MOON =
  '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M21 14.3A9 9 0 1 1 9.7 3a7 7 0 1 0 11.3 11.3z"/></svg>';

const ICON_SUN =
  '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';

/** Current icon set variant based on the document theme class */
export function stackVariant() {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

/** Swap stack icons when the theme changes (call after icons are in the DOM) */
export function refreshStackIcons() {
  const variant = stackVariant();
  document.querySelectorAll("#stackGrid img.stack-icon").forEach((img) => {
    const name = img.getAttribute("data-icon");
    if (name) img.src = `assets/icons/${name}-${variant}.svg`;
  });
}

/**
 * Apply light or dark theme and update the toggle icon.
 * @param {boolean} isLight
 */
function applyTheme(isLight) {
  const root = document.documentElement;
  const modeButton = document.getElementById("modeToggle");

  if (isLight) {
    root.classList.add("light");
    modeButton.innerHTML = ICON_SUN;
  } else {
    root.classList.remove("light");
    modeButton.innerHTML = ICON_MOON;
  }

  refreshStackIcons();
}

/** Wire up theme from localStorage / system preference and click handler */
export function initTheme() {
  const modeButton = document.getElementById("modeToggle");
  if (!modeButton) return;

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = savedTheme
    ? savedTheme === "1"
    : window.matchMedia("(prefers-color-scheme: light)").matches;

  applyTheme(prefersLight);

  modeButton.addEventListener("click", () => {
    const now = !document.documentElement.classList.contains("light");
    applyTheme(now);
    localStorage.setItem(THEME_KEY, now ? "1" : "0");
  });
}

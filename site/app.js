(function () {
  const root = document.documentElement;
  const THEME_KEY = "prefers-light";
  const OPEN_KEY = "accordion-open-ids";

  // Theme toggle
  const btn = document.getElementById("modeToggle");
  function applyTheme(isLight) {
    if (isLight) { root.classList.add("light"); if (btn) btn.textContent = "☀️"; }
    else { root.classList.remove("light"); if (btn) btn.textContent = "🌙"; }
  }
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = savedTheme ? savedTheme === "1" : window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight);
  btn && btn.addEventListener("click", () => {
    const now = !root.classList.contains("light");
    applyTheme(now);
    localStorage.setItem(THEME_KEY, now ? "1" : "0");
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Accordion persistence + controls
  const details = () => Array.from(document.querySelectorAll("details.block"));
  function saveOpenState() {
    const open = details().filter(d => d.open).map(d => d.id);
    localStorage.setItem(OPEN_KEY, JSON.stringify(open));
  }
  function restoreOpenState() {
    try {
      const raw = localStorage.getItem(OPEN_KEY);
      if (!raw) return;
      const set = new Set(JSON.parse(raw));
      details().forEach(d => d.open = set.has(d.id));
    } catch (e) { /* ignore */ }
  }
  restoreOpenState();
  details().forEach(d => d.addEventListener("toggle", saveOpenState));

  const expandBtn = document.getElementById("expandAll");
  const collapseBtn = document.getElementById("collapseAll");
  expandBtn && (expandBtn.onclick = () => { details().forEach(d => d.open = true); saveOpenState(); });
  collapseBtn && (collapseBtn.onclick = () => { details().forEach(d => d.open = false); saveOpenState(); });
})();

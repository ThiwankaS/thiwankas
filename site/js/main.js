/* =============================================================================
   MAIN ENTRY — boots the site modules
   Loaded from index.html as: <script type="module" src="js/main.js">

   Folder map:
     js/content/     ← edit copy & lists here (learn-loop, socials, stack)
     js/render-*.js  ← builds DOM from content
     js/theme.js     ← light / dark toggle
     js/lib/         ← small shared helpers
   ============================================================================= */

import { initTheme } from "./theme.js";
import { renderSocials } from "./render-socials.js";
import { renderStack } from "./render-stack.js";
import { renderLearnLoop } from "./render-learn-loop.js";

/* Footer year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Theme first so stack icons pick the correct light/dark variant */
initTheme();
renderSocials();
renderStack();
renderLearnLoop();

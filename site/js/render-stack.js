/* =============================================================================
   RENDER STACK — tools & environment icon grid
   Data: js/content/stack.js
   Mount: #stackGrid
   ============================================================================= */

import { stack } from "./content/stack.js";
import { stackVariant } from "./theme.js";

export function renderStack() {
  const grid = document.getElementById("stackGrid");
  if (!grid) return;

  const variant = stackVariant();

  grid.innerHTML = stack
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

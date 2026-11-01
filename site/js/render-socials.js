/* =============================================================================
   RENDER SOCIALS — builds icon buttons next to Resume
   Data: js/content/socials.js
   Mount: #socialLinks
   ============================================================================= */

import { socials } from "./content/socials.js";

export function renderSocials() {
  const nav = document.getElementById("socialLinks");
  if (!nav) return;

  nav.innerHTML = socials
    .map((item) => {
      const attrs = item.external ? ' target="_blank" rel="me noopener"' : "";
      return `<a href="${item.href}" aria-label="${item.label}"${attrs}>${item.svg}</a>`;
    })
    .join("");
}

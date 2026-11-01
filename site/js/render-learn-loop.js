/* =============================================================================
   RENDER LEARN LOOP — closed-loop board (ring + captions)
   Content: js/content/learn-loop.js
   Ring paths: js/learn-loop-ring.js
   Mount: #learnLoop
   ============================================================================= */

import { learnLoop } from "./content/learn-loop.js";
import { RING_WEDGES } from "./learn-loop-ring.js";
import { escapeHtml } from "./lib/escape-html.js";

/** One caption block (number + title + description) */
function captionHtml(step, slot) {
  return `
    <article class="learn-caption learn-caption--${step.key} learn-caption--${slot}">
      <span class="learn-caption-index">${escapeHtml(step.index)}</span>
      <div class="learn-caption-body">
        <strong class="learn-caption-title">${escapeHtml(step.title)}</strong>
        <p class="learn-caption-desc">${escapeHtml(step.desc)}</p>
      </div>
    </article>
  `;
}

export function renderLearnLoop() {
  const mount = document.getElementById("learnLoop");
  if (!mount) return;

  const byKey = Object.fromEntries(learnLoop.steps.map((step) => [step.key, step]));
  const notice = byKey.notice;
  const guide = byKey.guide;
  const build = byKey.build;

  if (!notice || !guide || !build) {
    console.warn("[learn-loop] Expected steps with keys: notice, guide, build");
    return;
  }

  mount.innerHTML = `
    <div class="learn-board">
      ${captionHtml(notice, "tl")}
      <div class="learn-ring" aria-hidden="true">
        <svg class="learn-loop-svg" viewBox="0 0 400 400" role="presentation">
          <circle class="loop-track" cx="200" cy="200" r="110" />
          <path class="loop-wedge loop-wedge--notice" d="${RING_WEDGES.notice}" />
          <path class="loop-wedge loop-wedge--guide" d="${RING_WEDGES.guide}" />
          <path class="loop-wedge loop-wedge--build" d="${RING_WEDGES.build}" />
        </svg>
        <div class="learn-loop-core">
          <p class="learn-loop-core-title">${escapeHtml(learnLoop.coreTitle)}</p>
          <p class="learn-loop-core-sub">${escapeHtml(learnLoop.coreSub)}</p>
        </div>
      </div>
      ${captionHtml(guide, "tr")}
      ${captionHtml(build, "bottom")}
    </div>
  `;
}

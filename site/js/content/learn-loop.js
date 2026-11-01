/* =============================================================================
   LEARN LOOP CONTENT — edit titles / descriptions here
   Used by: js/render-learn-loop.js
   Keep step keys as: notice | guide | build (they place each step on the board).
   ============================================================================= */

export const learnLoop = {
  /** Text in the center of the ring */
  coreTitle: "My Learning",
  coreSub: "closed loop",

  /** Captions around the ring (numbers live on these components, not on the SVG) */
  steps: [
    {
      key: "notice",
      index: "01",
      title: "Trigger · Gap · Problem",
      desc: "A persistent bug, an intriguing knowledge gap, or a new domain I just have to explore."
    },
    {
      key: "guide",
      index: "02",
      title: "Deep Dive · Research",
      desc: "Documentation, theory, and rigorous AI dialogue until the abstraction finally holds."
    },
    {
      key: "build",
      index: "03",
      title: "Build · Prototype · Ship",
      desc: "A focused project to cement the concept — until the next problem surfaces and the cycle restarts."
    }
  ]
};

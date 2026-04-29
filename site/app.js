(function () {
  const root = document.documentElement;
  const THEME_KEY = "prefers-light";
  const OPEN_KEY = "accordion-open-ids";

  /*
    Central profile data.
    ------------------------------------------
    Update this object when you need to edit:
      - qualifications (education/certifications)
      - experiences (work timeline)
      - achievements (awards/results)
    The UI below is generated from this data.
  */
  const PROFILE = {
    contact: [
      { label: "thivankas@outlook.com", href: "mailto:thivankas@outlook.com" },
      { label: "GitHub", href: "https://github.com/ThiwankaS", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/so-thiwanka/", external: true }
    ],
    sections: [
      {
        id: "about",
        title: "Profile",
        open: true,
        type: "paragraph",
        content: "Systems-focused developer in training at Hive Helsinki, specializing in C/C++ and low-level software fundamentals. I build software that is predictable, performant, and production-minded, with attention to process behavior, memory usage, and engineering quality."
      },
      {
        id: "skills",
        title: "Core Technical Skills",
        type: "pills",
        content: [
          "C", "C++", "Assembly", "POSIX APIs", "UNIX Signals", "Processes & Pipes",
          "Threads & Synchronization", "Memory Management", "Socket Networking",
          "Graphics (MiniLibX)", "Bash", "Git", "Linux", "Docker",
          "Profiling & Debugging", "CI/CD", "wxWidgets"
        ]
      },
      {
        id: "projects",
        title: "Selected Engineering Projects",
        type: "cards",
        content: [
          {
            name: "small_shader",
            description: "Explores graphics fundamentals in C++, generating images from scratch and integrating CLI media tooling for rendering workflows.",
            stack: "C++ • Computer Graphics • Rendering • CLI Tooling",
            repo: "https://github.com/ThiwankaS/small_shader"
          },
          {
            name: "Minishell",
            description: "Custom Unix shell in C featuring command execution, pipelines, redirections, environment handling, and robust process/signal control.",
            stack: "C • UNIX • Signals • Parsing • Process Management",
            repo: "https://github.com/ThiwankaS/Minishell"
          },
          {
            name: "Philosophers",
            description: "Multithreaded concurrency simulation of the Dining Philosophers problem using mutexes/semaphores with deadlock and race-condition controls.",
            stack: "C • Threads • Mutexes • Semaphores • Concurrency",
            repo: "https://github.com/ThiwankaS/Philosophers"
          },
          {
            name: "miniRt",
            description: "Ray tracer in C that renders 3D scenes with geometric primitives, shadows, and lighting models such as Lambert and Phong.",
            stack: "C • Ray Tracing • Linear Algebra • Rendering",
            repo: "https://github.com/ThiwankaS/miniRt"
          },
          {
            name: "movieDbSearch",
            description: "Full-stack movie discovery platform using TypeScript, Python, MongoDB, and PostgreSQL with external API integration and social features.",
            stack: "TypeScript • Python • MongoDB • PostgreSQL • APIs",
            repo: "https://github.com/ThiwankaS/movieDbSearch"
          },
          {
            name: "webserv",
            description: "HTTP/1.1 web server in C++ with non-blocking I/O, config parsing, and CGI support, inspired by NGINX-like architecture.",
            stack: "C++ • HTTP • Non-blocking I/O • CGI • Systems",
            repo: "https://github.com/ThiwankaS/webserv"
          },
          {
            name: "vocabularyApp",
            description: "Containerized full-stack service with automated delivery workflows, focused on backend reliability and operational discipline.",
            stack: "Docker • CI/CD • API Design • Deployment Automation"
          },
          {
            name: "Dictionary",
            description: "Number-to-word conversion tool with deterministic output across large numeric ranges and edge-case handling.",
            stack: "C/C++ • Algorithms • File I/O • wxWidgets",
            repo: "https://github.com/ThiwankaS/Dictionary"
          }
        ]
      },
      {
        id: "experience",
        title: "Professional Experience",
        type: "timeline",
        content: [
          {
            title: "Team Leader (House Keeping)",
            organization: "Siskon Siivous Oy",
            period: "2022 - Present",
            summary: "Lead operational execution, quality standards, and team coordination in a high-accountability environment."
          },
          {
            title: "Operations Manager",
            organization: "Noble Vision Institute (Pvt) Ltd",
            period: "2020 - 2022",
            summary: "Managed service operations and improved process reliability through structured workflows."
          },
          {
            title: "Entrepreneur",
            organization: "Somasiri Rice Merchandisers (Pvt) Ltd",
            period: "2016 - 2020",
            summary: "Owned end-to-end business operations, logistics planning, and customer relationship management."
          },
          {
            title: "Executive Human Resources and Administration",
            organization: "MAS Active Trading (Pvt) Ltd",
            period: "2012 - 2016",
            summary: "Supported organizational process execution, policy compliance, and workforce administration."
          }
        ]
      },
      {
        id: "qualifications",
        title: "Qualifications & Education",
        type: "timeline",
        content: [
          {
            title: "Hive Helsinki",
            organization: "Peer-to-peer coding program",
            period: "2024 - Present",
            summary: "Project-based software engineering with emphasis on systems programming and collaboration.",
            link: "https://www.hive.fi/"
          },
          {
            title: "Full-Stack Open",
            organization: "University of Helsinki",
            period: "2023 - 2024",
            summary: "Modern full-stack web development, testing, APIs, and deployment practices.",
            link: "https://fullstackopen.com/en/"
          },
          {
            title: "BSc Studies (Applied Mathematics, Pure Mathematics, Physics)",
            organization: "University of Kelaniya",
            period: "2010 - 2012",
            summary: "Built strong analytical and mathematical foundations for engineering problem solving.",
            link: "https://science.kln.ac.lk/"
          },
          {
            title: "Diploma in Computer System Designing",
            organization: "NIBM",
            period: "2008 - 2010",
            summary: "Core computing fundamentals, software design principles, and practical systems knowledge.",
            link: "https://www.nibm.lk/course/diploma-in-computer-system-design-full-time"
          }
        ]
      },
      {
        id: "achievements",
        title: "Achievements",
        type: "list",
        content: [
          "QT Hackathon - Winning Team (2025)",
          "Spreadsheet Samurai (2025)",
          "Best Kaizen Award (2012)"
        ]
      }
    ]
  };

  // Theme toggle and persistence.
  const modeButton = document.getElementById("modeToggle");
  function applyTheme(isLight) {
    if (isLight) {
      root.classList.add("light");
      modeButton.textContent = "☀️";
    } else {
      root.classList.remove("light");
      modeButton.textContent = "🌙";
    }
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

  // Render contact links from profile data.
  function renderContacts() {
    const wrapper = document.getElementById("contactLinks");
    wrapper.innerHTML = PROFILE.contact
      .map((entry, index) => {
        const attrs = entry.external ? ' target="_blank" rel="noopener"' : "";
        const separator = index < PROFILE.contact.length - 1 ? "<span>│</span>" : "";
        return `<a href="${entry.href}"${attrs}>${entry.label}</a>${separator}`;
      })
      .join("");
  }

  function createTimelineHTML(items) {
    return `
      <div class="timeline">
        ${items.map((item) => {
          const heading = item.link
            ? `<a class="timeline-title-link" href="${item.link}" target="_blank" rel="noopener">${item.title}</a>`
            : `<span class="timeline-title-text">${item.title}</span>`;
          return `
            <article class="timeline-item">
              <h3 class="timeline-title">${heading}</h3>
              <p class="timeline-meta">${item.organization} • ${item.period}</p>
              <p class="timeline-desc">${item.summary}</p>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function createSectionBody(section) {
    if (section.type === "paragraph") {
      return `<p>${section.content}</p>`;
    }
    if (section.type === "pills") {
      return `<ul class="pill-list">${section.content.map((skill) => `<li>${skill}</li>`).join("")}</ul>`;
    }
    if (section.type === "list") {
      return `<ul>${section.content.map((line) => `<li>${line}</li>`).join("")}</ul>`;
    }
    if (section.type === "timeline") {
      return createTimelineHTML(section.content);
    }
    if (section.type === "cards") {
      return `
        <div class="cards">
          ${section.content.map((project) => `
            <article class="card">
              <h3 class="subhead">${project.name}</h3>
              <p>${project.description}</p>
              <p class="meta">${project.stack}</p>
              ${project.repo ? `<p class="meta"><a href="${project.repo}" target="_blank" rel="noopener">Repository</a></p>` : ""}
            </article>
          `).join("")}
        </div>
      `;
    }
    return "<p>Section type is not configured.</p>";
  }

  function renderSections() {
    const mount = document.getElementById("dynamicSections");
    mount.innerHTML = PROFILE.sections
      .map((section) => `
        <details class="block" id="${section.id}" ${section.open ? "open" : ""}>
          <summary><span class="sum-title">${section.title}</span></summary>
          <div class="content">${createSectionBody(section)}</div>
        </details>
      `)
      .join("");
  }

  // Accordion state persistence.
  const details = () => Array.from(document.querySelectorAll("details.block"));
  function saveOpen() {
    const openIds = details().filter((d) => d.open).map((d) => d.id);
    localStorage.setItem(OPEN_KEY, JSON.stringify(openIds));
  }

  function restoreOpen() {
    const raw = localStorage.getItem(OPEN_KEY);
    if (!raw) return;
    const openIdSet = new Set(JSON.parse(raw));
    details().forEach((item) => {
      item.open = openIdSet.has(item.id);
    });
  }

  function wireAccordionEvents() {
    details().forEach((item) => item.addEventListener("toggle", saveOpen));
  }

  function wireSectionControls() {
    document.getElementById("expandAll").onclick = () => {
      details().forEach((item) => {
        item.open = true;
      });
      saveOpen();
    };
    document.getElementById("collapseAll").onclick = () => {
      details().forEach((item) => {
        item.open = false;
      });
      saveOpen();
    };
  }

  // Decorative left-side tetris rain.
  function initTetrisRain() {
    const canvas = document.getElementById("tetrisRain");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Tetromino-inspired block patterns rendered as decorative rain.
    const shapes = [
      [[0, 0], [1, 0], [0, 1], [1, 1]],
      [[0, 0], [1, 0], [2, 0], [3, 0]],
      [[0, 0], [0, 1], [1, 1], [2, 1]],
      [[2, 0], [0, 1], [1, 1], [2, 1]],
      [[1, 0], [2, 0], [0, 1], [1, 1]],
      [[0, 0], [1, 0], [1, 1], [2, 1]],
      [[1, 0], [0, 1], [1, 1], [2, 1]]
    ];

    // Bright but controlled palette for both dark/light themes.
    const colors = [
      "#57f287", "#78cfff", "#f97316", "#a855f7",
      "#fb7185", "#22d3ee", "#facc15", "#34d399"
    ];

    const state = {
      width: 0,
      height: 0,
      dpr: 1,
      pieces: [],
      lastTime: 0,
      spawnClock: 0
    };

    function randomBetween(min, max) {
      return min + Math.random() * (max - min);
    }

    function pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function resize() {
      // Keep canvas crisp on high-DPI displays.
      state.dpr = window.devicePixelRatio || 1;
      state.width = Math.max(96, Math.min(Math.floor(window.innerWidth * 0.18), 190));
      state.height = window.innerHeight;
      canvas.width = Math.floor(state.width * state.dpr);
      canvas.height = Math.floor(state.height * state.dpr);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    }

    function createPiece() {
      const shape = pick(shapes);
      const cell = Math.round(randomBetween(18, 28));
      const minX = 8;
      const maxX = Math.max(minX + cell * 3, state.width - cell * 4 - 10);
      return {
        shape,
        color: pick(colors),
        cell,
        x: randomBetween(minX, maxX),
        y: -cell * randomBetween(3, 8),
        // Slightly faster drift while staying calm/ambient.
        speed: randomBetween(32, 70),
        alpha: randomBetween(0.68, 0.92)
      };
    }

    function drawPixelCell(x, y, size, color, alpha) {
      const n = 3;
      const gap = Math.max(1, Math.floor(size * 0.08));
      const totalGap = gap * (n + 1);
      const px = Math.max(2, Math.floor((size - totalGap) / n));
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      for (let row = 0; row < n; row += 1) {
        for (let col = 0; col < n; col += 1) {
          const pxX = x + gap + col * (px + gap);
          const pxY = y + gap + row * (px + gap);
          ctx.fillRect(pxX, pxY, px, px);
        }
      }
      ctx.globalAlpha = 1;
    }

    function drawPiece(piece) {
      piece.shape.forEach(([sx, sy]) => {
        drawPixelCell(
          piece.x + sx * piece.cell,
          piece.y + sy * piece.cell,
          piece.cell,
          piece.color,
          piece.alpha
        );
      });
    }

    function animate(now) {
      if (!state.lastTime) state.lastTime = now;
      const delta = Math.min(64, now - state.lastTime);
      state.lastTime = now;
      state.spawnClock += delta;

      // One active piece at a time for a cleaner left rail.
      if (state.pieces.length === 0 && state.spawnClock > randomBetween(260, 520)) {
        state.pieces.push(createPiece());
        state.spawnClock = 0;
      }

      ctx.clearRect(0, 0, state.width, state.height);

      state.pieces.forEach((piece) => {
        piece.y += (piece.speed * delta) / 1000;
        drawPiece(piece);
      });

      state.pieces = state.pieces.filter((piece) => piece.y < state.height + piece.cell * 6);
      requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(animate);
  }

  // Footer year.
  document.getElementById("year").textContent = new Date().getFullYear();

  renderContacts();
  renderSections();
  restoreOpen();
  wireAccordionEvents();
  wireSectionControls();
  initTetrisRain();
})();

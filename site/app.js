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
            name: "minishell",
            description: "Built a Bash-like shell with parsing, process control, pipes, redirections, and robust signal handling.",
            stack: "C • UNIX • Signals • Parsing • Process Management"
          },
          {
            name: "miniRT",
            description: "Implemented a ray tracer in C with core rendering math, scene parsing, and interactive viewport behavior.",
            stack: "C • Graphics • Linear Algebra • Rendering Pipeline"
          },
          {
            name: "vocabularyApp",
            description: "Built a containerized full-stack service and automated delivery pipeline, applying backend reliability and operations discipline.",
            stack: "Docker • CI/CD • API Design • Deployment Automation"
          },
          {
            name: "Dictionary",
            description: "Created a number-to-word conversion tool handling large numeric ranges with deterministic output.",
            stack: "C/C++ • File I/O • Algorithms • wxWidgets"
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
            ? `<a href="${item.link}" target="_blank" rel="noopener">${item.title}</a>`
            : item.title;
          return `
            <article class="timeline-item">
              <h3>${heading}</h3>
              <p class="muted">${item.organization} • ${item.period}</p>
              <p>${item.summary}</p>
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

  // Footer year.
  document.getElementById("year").textContent = new Date().getFullYear();

  renderContacts();
  renderSections();
  restoreOpen();
  wireAccordionEvents();
  wireSectionControls();
})();

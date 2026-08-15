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
      { label: "LinkedIn", href: "https://www.linkedin.com/in/so-thiwanka/", external: true },
      { label: "X", href: "https://x.com/So_Thiwanka", external: true }
    ],
    sections: [
      {
        id: "about",
        title: "Profile",
        open: true,
        type: "paragraph",
        content: "C++ Software Engineer in Helsinki, Uusimaa, Finland. Hive Helsinki (42) graduate — Junior Developer Level 10. I keep coming back to C/C++ systems work: networking, memory, and making a program behave in a way I can actually explain. I like existing codebases, GDB, and the kind of bug that only shows up when you stop guessing. Open to C++ software engineering roles in Finland while continuing personal systems projects."
      },
      {
        id: "skills",
        title: "Core Technical Skills",
        type: "pills",
        content: [
          "C++", "C", "Linux", "CMake", "GDB", "Valgrind",
          "Threads & Synchronization", "Socket Networking", "Memory Management",
          "POSIX APIs", "UNIX Signals", "Processes & Pipes",
          "Graphics (MiniLibX)", "Git", "Bash", "Docker",
          "Profiling & Debugging", "CI/CD"
        ]
      },
      {
        id: "projects",
        title: "Selected Engineering Projects",
        type: "cards",
        content: [
          {
            name: "webserv",
            description: "HTTP/1.1 server in C++. Non-blocking I/O, config parsing, CGI. The project that made network byte order stop being a checkbox.",
            stack: "C++ • HTTP • Non-blocking I/O • CGI • Systems",
            repo: "https://github.com/ThiwankaS/webserv"
          },
          {
            name: "CPP",
            description: "Hive C++ modules 00–09. Classes, templates, inheritance, the canonical form, and sitting with compiler errors until they make sense.",
            stack: "C++ • OOP • Templates • STL",
            repo: "https://github.com/ThiwankaS/CPP"
          },
          {
            name: "Philosophers",
            description: "Dining Philosophers in C. Mutexes, semaphores, and the deadlock I actually hit before the tests went green.",
            stack: "C • Threads • Mutexes • Semaphores • Concurrency",
            repo: "https://github.com/ThiwankaS/Philosophers"
          },
          {
            name: "small_shader",
            description: "Graphics from scratch in C++. Images out of math, then CLI tools to look at them.",
            stack: "C++ • Computer Graphics • Rendering • CLI Tooling",
            repo: "https://github.com/ThiwankaS/small_shader"
          },
          {
            name: "Minishell",
            description: "A Unix shell in C: pipelines, redirections, signals, and process control.",
            stack: "C • UNIX • Signals • Parsing • Process Management",
            repo: "https://github.com/ThiwankaS/Minishell"
          },
          {
            name: "miniRt",
            description: "Ray tracer in C. Primitives, shadows, Lambert and Phong. Linear algebra you can see.",
            stack: "C • Ray Tracing • Linear Algebra • Rendering",
            repo: "https://github.com/ThiwankaS/miniRt"
          },
          {
            name: "Embedded",
            description: "C++ on a board with PlatformIO. Same questions as on Linux, smaller machine.",
            stack: "C++ • PlatformIO • Embedded",
            repo: "https://github.com/ThiwankaS/Embedded"
          },
          {
            name: "Dictionary",
            description: "Number-to-word conversion with deterministic output across large ranges.",
            stack: "C/C++ • Algorithms • File I/O • wxWidgets",
            repo: "https://github.com/ThiwankaS/Dictionary"
          }
        ]
      },
      {
        id: "experience",
        title: "Experience",
        type: "timeline",
        content: [
          {
            title: "Personal Projects",
            organization: "Helsinki, Finland",
            period: "2024 - Present",
            summary: "C++ on Linux: HTTP/1.1 web server, Hive curriculum projects, concurrency, graphics, and embedded experiments. Daily use of GDB, Valgrind, and CMake."
          },
          {
            title: "Software Engineer (student)",
            organization: "Hive Helsinki",
            period: "2024 - 2026",
            summary: "Full-time 42 / Hive Helsinki curriculum. Peer-to-peer, project-based C/C++, Unix/Linux, networking, and graphics. Completed Junior Developer Level 10.",
            link: "https://www.hive.fi/"
          },
          {
            title: "Team Leader (House Keeping)",
            organization: "Siskon Siivous Oy",
            period: "2022 - Present",
            summary: "Part-time role in Finland while completing Hive and searching for a C++ engineering position. Team coordination and quality standards."
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
        title: "Education & Certifications",
        type: "timeline",
        content: [
          {
            title: "Hive Helsinki",
            organization: "Peer-to-peer coding program (42)",
            period: "2024 - 2026",
            summary: "Completed. Project-based C/C++, Unix/Linux, networking, graphics. Junior Developer Level 10.",
            link: "https://www.hive.fi/"
          },
          {
            title: "C++ Essentials 1 & 2",
            organization: "Cisco",
            period: "Jul 2026",
            summary: "Cisco Networking Academy certifications covering C++ fundamentals through intermediate language features."
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
            summary: "Analytical and mathematical foundations for engineering problem solving.",
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
          "Qt Hackathon — winning team (2025)",
          "42 Cursus — Junior Developer Level 10 (2026)",
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

  // Footer year.
  document.getElementById("year").textContent = new Date().getFullYear();

  renderContacts();
  renderSections();
  restoreOpen();
  wireAccordionEvents();
  wireSectionControls();
})();

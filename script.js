(function () {
  const data = window.siteData;
  if (!data) {
    return;
  }

  const iconMap = {
    gear: "⚙",
    pulse: "◉",
    shield: "◌",
    spark: "✦",
    radar: "◔",
    audit: "▣",
    backup: "⬒",
    map: "◇",
    firewall: "⛨",
    route: "⇄",
    chart: "▤",
    asset: "◫",
    dns: "⌘",
    nodes: "⋯",
    ai: "⌬",
    auth: "◎"
  };

  const select = (selector) => document.querySelector(selector);
  const create = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    if (content !== undefined) {
      element.textContent = content;
    }
    return element;
  };

  function formatValue(value) {
    if (value >= 1000) {
      return new Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(value);
    }
    if (String(value).includes(".")) {
      return Number(value).toFixed(2);
    }
    return String(value);
  }

  function renderNav() {
    const nav = select("#site-nav");
    if (!nav) {
      return;
    }

    const linksWrap = create("div", "site-nav-links");
    data.nav.forEach((item) => {
      const link = create("a", "nav-link", item.label);
      link.href = item.href;
      linksWrap.appendChild(link);
    });

    const cta = create("a", "button button-primary button-small", "Book Demo");
    cta.href = "#contact";

    nav.append(linksWrap, cta);
  }

  function renderHero() {
    select("#hero-eyebrow").textContent = data.hero.eyebrow;
    select("#hero-title").textContent = data.hero.title;
    select("#hero-subtitle").textContent = data.hero.subtitle;
    select("#hero-summary").textContent = data.hero.summary;

    const proof = select("#hero-proof");
    data.hero.proof.forEach((item) => {
      const pill = create("span", "hero-proof-pill", item);
      proof.appendChild(pill);
    });

    const actions = select("#hero-actions");
    data.hero.ctas.forEach((cta) => {
      const link = create("a", `button button-${cta.variant}`, cta.label);
      link.href = cta.href;
      actions.appendChild(link);
    });
  }

  function renderTechnologyBadges() {
    const wrap = select("#tech-badge-row");
    if (!wrap) {
      return;
    }

    data.technologyBadges.filter((item) => item.featured).forEach((item) => {
      const badge = create("span", "tech-badge tech-badge-featured");
      const image = create("img", "tech-badge-logo");
      image.src = item.src;
      image.alt = item.alt || `${item.label} logo`;
      image.loading = "lazy";
      if (item.lightOnDark) {
        image.classList.add("tech-badge-logo-light");
      }

      const label = create("span", "tech-badge-label", item.label);

      badge.append(image, label);
      wrap.appendChild(badge);
    });
  }

  function renderTechnologyEcosystem() {
    const wrap = select("#ecosystem-grid");
    if (!wrap || !Array.isArray(data.technologyGroups)) {
      return;
    }

    data.technologyGroups.forEach((group, index) => {
      const card = create("article", "ecosystem-card reveal");
      card.style.transitionDelay = `${index * 70}ms`;

      const header = create("div", "ecosystem-card-head");
      const title = create("h3", "ecosystem-card-title", group.title);
      const description = create("p", "ecosystem-card-text", group.description);
      header.append(title, description);

      const badgeRow = create("div", "tech-badge-row tech-badge-row-compact");
      data.technologyBadges
        .filter((item) => item.group === group.key)
        .forEach((item) => {
          const badge = create("span", "tech-badge tech-badge-compact");
          const image = create("img", "tech-badge-logo");
          image.src = item.src;
          image.alt = item.alt || `${item.label} logo`;
          image.loading = "lazy";
          if (item.lightOnDark) {
            image.classList.add("tech-badge-logo-light");
          }

          const label = create("span", "tech-badge-label", item.label);
          badge.append(image, label);
          badgeRow.appendChild(badge);
        });

      card.append(header, badgeRow);
      wrap.appendChild(card);
    });
  }

  function renderCards(items, selector) {
    const container = select(selector);
    items.forEach((item, index) => {
      const card = create("article", "surface-card reveal");
      card.style.transitionDelay = `${index * 60}ms`;
      const icon = create("span", "card-icon", iconMap[item.icon] || "✦");
      const title = create("h3", "card-title", item.title);
      const description = create("p", "card-text", item.description || item.text);
      card.append(icon, title, description);
      container.appendChild(card);
    });
  }

  function renderAutomation() {
    const list = select("#automation-list");
    const phases = select("#automation-phases");
    const map = select("#workflow-map");
    ["Discover", "Validate", "Execute"].forEach((phase, index) => {
      const panel = create("article", "phase-card");
      panel.innerHTML = `<span>0${index + 1}</span><strong>${phase}</strong><div class="phase-lines"><i></i><i></i><i></i></div>`;
      phases.appendChild(panel);
    });

    data.automationFlows.forEach((item, index) => {
      const entry = create("div", "check-item reveal");
      entry.innerHTML = `<span>✓</span><p>${item}</p>`;
      list.appendChild(entry);

      const node = create("article", "workflow-node");
      node.innerHTML = `<strong>${index + 1}</strong><span>${item}</span>`;
      map.appendChild(node);
    });
  }

  function renderObservability() {
    const metrics = select("#observability-metrics");
    data.observabilityMetrics.forEach((metric) => {
      const card = create("article", "signal-card");
      card.innerHTML = `<span>${metric.label}</span><strong>${metric.value}</strong>`;
      metrics.appendChild(card);
    });

    const chart = select("#observability-chart");
    [28, 20, 36, 42, 30, 54, 38, 46, 66, 34, 26, 18].forEach((value) => {
      const bar = create("span");
      bar.style.height = `${value * 2}px`;
      chart.appendChild(bar);
    });

    renderCards(data.observabilityHighlights, "#observability-highlights");
  }

  function renderDashboards() {
    const wrap = select("#dashboard-carousel");
    data.dashboards.forEach((dashboard, index) => {
      const card = create("article", "dashboard-card reveal");
      card.style.transitionDelay = `${index * 70}ms`;
      const visual = dashboard.image
        ? `
        <div class="dashboard-real-media">
          <img src="${dashboard.image}" alt="${dashboard.title}" loading="lazy">
          <div class="dashboard-real-overlay">
            <span>${dashboard.tag}</span>
            <small>${dashboard.metric}</small>
          </div>
        </div>`
        : `
        <div class="dashboard-visual">
          <div class="dashboard-visual-head">
            <span>${dashboard.tag}</span>
            <small>${dashboard.metric}</small>
          </div>
          <div class="dashboard-mini-metrics">
            <article><strong>42</strong><span>nodes</span></article>
            <article><strong>76</strong><span>alerts</span></article>
            <article><strong>68</strong><span>flows</span></article>
            <article><strong>84</strong><span>sites</span></article>
          </div>
          <div class="dashboard-graph">
            <span style="height:32px"></span>
            <span style="height:54px"></span>
            <span style="height:66px"></span>
            <span style="height:84px"></span>
            <span style="height:94px"></span>
            <span style="height:72px"></span>
            <span style="height:106px"></span>
            <span style="height:88px"></span>
          </div>
        </div>`;
      card.innerHTML = `${visual}
        <div class="dashboard-copy">
          <h3>${dashboard.title}</h3>
          <p>${dashboard.description}</p>
        </div>`;
      wrap.appendChild(card);
    });
  }

  function renderAbout() {
    select("#about-title").textContent = data.about.title;
    select("#about-body").textContent = data.about.body;
    const teamWrap = select("#about-team-grid");
    data.about.team.forEach((member, index) => {
      const card = create("article", "team-card reveal");
      card.style.transitionDelay = `${index * 80}ms`;
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name}" loading="lazy">
        <div class="team-card-copy">
          <span class="mono">${member.label}</span>
          <strong>${member.name}</strong>
          <p>${member.description}</p>
        </div>`;
      teamWrap.appendChild(card);
    });

    const wrap = select("#about-stats");
    data.about.stats.forEach((item) => {
      const card = create("article", "stat-tile");
      card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
      wrap.appendChild(card);
    });
  }

  function renderContact() {
    select("#contact-title").textContent = data.contact.title;
    select("#contact-subtitle").textContent = data.contact.subtitle;
    const email = select("#contact-email");
    email.textContent = data.contact.email;
    email.href = `mailto:${data.contact.email}`;

    const actions = select("#contact-actions");
    data.contact.actions.forEach((cta) => {
      const link = create("a", `button button-${cta.variant}`, cta.label);
      link.href = cta.href;
      actions.appendChild(link);
    });

    const socials = select("#social-stack");
    data.contact.socials.forEach((social) => {
      const link = create("a", "social-link", social.label);
      link.href = social.href;
      if (/^https?:/i.test(social.href)) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      socials.appendChild(link);
    });
  }

  function setupContactForm() {
    const form = select("#contact-form");
    const note = select("#contact-form-note");
    if (!form || !note) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const fields = new FormData(form);
      const name = String(fields.get("name") || "").trim();
      const email = String(fields.get("email") || "").trim();
      const company = String(fields.get("company") || "").trim();
      const message = String(fields.get("message") || "").trim();

      const subjectParts = [company || name || "Website inquiry", "DEVOPTY demo request"];
      const subject = subjectParts.filter(Boolean).join(" | ");
      const body = [
        "Hello DEVOPTY,",
        "",
        "I want to discuss the platform.",
        "",
        `Name: ${name || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Context:",
        message || "Please contact me about a demo.",
        ""
      ].join("\n");

      window.location.href = `mailto:${encodeURIComponent(data.contact.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      note.textContent = "Opening your email client with the message prefilled.";
    });
  }

  function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.18 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }

  function setupCounters() {
    const counters = document.querySelectorAll(".metric-value[data-target]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const element = entry.target;
        const target = Number(element.dataset.target || 0);
        const suffix = element.dataset.suffix || "";
        const start = performance.now();
        const duration = 1500;
        element.textContent = `0${suffix}`;
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          element.textContent = `${formatValue(value)}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
        observer.unobserve(element);
      });
    }, { threshold: 0.6 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function setupNavigation() {
    const toggle = select(".nav-toggle");
    const nav = select("#site-nav");
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open");
    });

    nav.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });

    const sections = data.nav.map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) {
        return;
      }
      nav.querySelectorAll(".nav-link").forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", active);
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: [0.25, 0.45, 0.65] });

    sections.forEach((section) => observer.observe(section));
  }

  function setupParallax() {
    const root = document.querySelector("[data-parallax-root]");
    if (!root) {
      return;
    }

    root.addEventListener("pointermove", (event) => {
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      root.querySelectorAll("[data-parallax-card]").forEach((card) => {
        const depth = Number(card.dataset.parallaxCard || 0);
        card.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
      });
    });

    root.addEventListener("pointerleave", () => {
      root.querySelectorAll("[data-parallax-card]").forEach((card) => {
        card.style.transform = "translate3d(0, 0, 0)";
      });
    });
  }

  renderNav();
  renderHero();
  renderTechnologyBadges();
  renderTechnologyEcosystem();
  renderCards(data.platformOverview, "#overview-grid");
  renderCards(data.capabilities, "#capabilities-grid");
  renderAutomation();
  renderObservability();
  renderDashboards();
  renderCards(data.enterpriseFeatures, "#enterprise-grid");
  renderCards(data.useCases, "#use-cases-grid");
  renderAbout();
  renderContact();
  setupContactForm();
  setupReveal();
  setupCounters();
  setupNavigation();
  setupParallax();
})();
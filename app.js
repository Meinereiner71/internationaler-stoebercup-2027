(() => {
  "use strict";

  const pages = [
    ["index.html", "home", "Start", "Home"],
    ["event.html", "event", "Wettbewerb", "Competition"],
    ["qualifikation.html", "qualification", "Qualifikation", "Qualification"],
    ["programm.html", "program", "Programm", "Programme"],
    ["unterkunft.html", "stay", "Unterkunft", "Accommodation"],
    ["downloads.html", "downloads", "Downloads", "Downloads"],
    ["kontakt.html", "contact", "Kontakt", "Contact"]
  ];

  const page = document.documentElement.dataset.page || "home";
  const savedLanguage = localStorage.getItem("stoebercup-language");
  let language = savedLanguage === "en" ? "en" : "de";

  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");

  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <div class="header-identities">
            <a class="brand" href="index.html" aria-label="Internationaler Stöbercup 2027 – Startseite"
              data-aria-label-de="Internationaler Stöbercup 2027 – Startseite"
              data-aria-label-en="International Article Search Competition 2027 – Home">
              <img class="brand-seal" src="assets/seal-320.png" width="320" height="311" alt="">
              <span class="brand-copy"><span data-de="Internationaler" data-en="International Article Search">Internationaler</span><span data-de="Stöbercup 2027" data-en="Competition 2027">Stöbercup 2027</span></span>
            </a>
            <div class="association-mark">
              <img src="assets/oekv-logo.png" width="1280" height="1130"
                alt="ÖKV – Österreichischer Kynologenverband">
            </div>
          </div>
          <nav class="site-nav" id="site-navigation" aria-label="Hauptnavigation" data-open="false"
            data-aria-label-de="Hauptnavigation" data-aria-label-en="Main navigation">
            <ul class="nav-list">
              ${pages.map(([href, id, de, en]) => `
                <li><a class="nav-link" href="${href}" ${page === id ? 'aria-current="page"' : ""}
                  data-de="${de}" data-en="${en}">${de}</a></li>`).join("")}
              <li><a class="nav-link nav-link--cta" href="anmeldung.html"
                ${page === "registration" ? 'aria-current="page"' : ""}
                data-de="Anmeldeinfos" data-en="Registration info">Anmeldeinfos</a></li>
            </ul>
          </nav>
          <div class="header-controls">
            <div class="language-switcher" aria-label="Sprache auswählen"
              data-aria-label-de="Sprache auswählen" data-aria-label-en="Choose language">
              <button class="language-button" type="button" data-language="de" lang="de"
                aria-pressed="true" aria-label="Deutsch auswählen"
                data-aria-label-de="Deutsch auswählen" data-aria-label-en="Select German"
                title="Deutsch / German">
                <span class="language-flag" aria-hidden="true">🇩🇪</span>
              </button>
              <button class="language-button" type="button" data-language="en" lang="en"
                aria-pressed="false" aria-label="Englisch auswählen"
                data-aria-label-de="Englisch auswählen" data-aria-label-en="Select English"
                title="English / Englisch">
                <span class="language-flag" aria-hidden="true">🇬🇧</span>
              </button>
            </div>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation"
              data-aria-label-de="Menü öffnen" data-aria-label-en="Open menu">
              <span class="nav-toggle-lines" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </header>`;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-top">
          <div class="footer-intro">
            <a class="brand" href="index.html">
              <img class="brand-seal" src="assets/seal-320.png" width="320" height="311" alt="">
              <span class="brand-copy"><span data-de="Internationaler" data-en="International Article Search">Internationaler</span><span data-de="Stöbercup 2027" data-en="Competition 2027">Stöbercup 2027</span></span>
            </a>
            <p data-de="22.–23. Mai 2027 · Villach, Kärnten, Österreich"
              data-en="22–23 May 2027 · Villach, Carinthia, Austria">22.–23. Mai 2027 · Villach, Kärnten, Österreich</p>
          </div>
          <div>
            <div class="footer-title" data-de="Event" data-en="Event">Event</div>
            <div class="footer-links">
              <a href="event.html" data-de="Über den Bewerb" data-en="About the competition">Über den Bewerb</a>
              <a href="qualifikation.html" data-de="Qualifikation" data-en="Qualification">Qualifikation</a>
              <a href="programm.html" data-de="Programm" data-en="Programme">Programm</a>
              <a href="unterkunft.html" data-de="Unterkunft" data-en="Accommodation">Unterkunft</a>
              <a href="downloads.html" data-de="Downloadcenter" data-en="Download centre">Downloadcenter</a>
            </div>
          </div>
          <div>
            <div class="footer-title" data-de="Information" data-en="Information">Information</div>
            <div class="footer-links">
              <a href="kontakt.html" data-de="Kontakt" data-en="Contact">Kontakt</a>
              <a href="anmeldung.html" data-de="Anmeldeinformationen" data-en="Registration information">Anmeldeinformationen</a>
              <a href="faq.html">FAQ</a>
              <a href="sponsoren.html" data-de="Sponsoren" data-en="Sponsors">Sponsoren</a>
              <a href="impressum.html" data-de="Impressum" data-en="Legal notice">Impressum</a>
              <a href="datenschutz.html" data-de="Datenschutz" data-en="Privacy">Datenschutz</a>
            </div>
          </div>
        </div>
        <div class="container footer-bottom">
          <span>© <span data-current-year></span> ÖGV St. Magdalen</span>
          <span data-de="Offizielle Vorankündigung · bestätigte Informationen werden laufend ergänzt."
            data-en="Official advance announcement · confirmed information is updated continuously.">Offizielle Vorankündigung · bestätigte Informationen werden laufend ergänzt.</span>
        </div>
      </footer>`;
  }

  const translate = (nextLanguage) => {
    language = nextLanguage;
    document.documentElement.lang = language;
    localStorage.setItem("stoebercup-language", language);

    document.querySelectorAll("[data-de][data-en]").forEach((element) => {
      element.textContent = element.dataset[language];
    });
    document.querySelectorAll("[data-placeholder-de][data-placeholder-en]").forEach((element) => {
      element.placeholder = element.dataset[`placeholder${language === "de" ? "De" : "En"}`];
    });
    document.querySelectorAll("[data-aria-label-de][data-aria-label-en]").forEach((element) => {
      element.setAttribute("aria-label", element.dataset[`ariaLabel${language === "de" ? "De" : "En"}`]);
    });
    document.querySelectorAll("[data-alt-de][data-alt-en]").forEach((element) => {
      element.alt = element.dataset[`alt${language === "de" ? "De" : "En"}`];
    });
    document.querySelectorAll("[data-title-de][data-title-en]").forEach((element) => {
      document.title = element.dataset[`title${language === "de" ? "De" : "En"}`];
    });
    document.querySelectorAll("[data-description-de][data-description-en]").forEach((element) => {
      element.setAttribute("content", element.dataset[`description${language === "de" ? "De" : "En"}`]);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    updateToggleLabel();
    setOpenGraphMeta();
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => translate(button.dataset.language));
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");
  const updateToggleLabel = () => {
    if (!navToggle) return;
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", language === "de"
      ? (open ? "Menü schließen" : "Menü öffnen")
      : (open ? "Close menu" : "Open menu"));
  };
  const setOpenGraphMeta = () => {
    const upsert = (property, content) => {
      let meta = document.head.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.append(meta);
      }
      meta.setAttribute("content", content);
    };
    upsert("og:type", "website");
    upsert("og:title", document.title);
    upsert("og:description", document.querySelector('meta[name="description"]')?.content || "");
    upsert("og:image", new URL("assets/hero-dog-clean-1376.jpg", location.href).href);
  };
  const closeNavigation = (returnFocus = false) => {
    if (!navToggle || !navigation) return;
    navToggle.setAttribute("aria-expanded", "false");
    navigation.dataset.open = "false";
    updateToggleLabel();
    if (returnFocus) navToggle.focus();
  };

  navToggle?.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(open));
    navigation.dataset.open = String(open);
    updateToggleLabel();
  });
  navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle?.getAttribute("aria-expanded") === "true") closeNavigation(true);
  });

  const countdown = document.querySelector("[data-countdown]");
  if (countdown) {
    const target = new Date("2027-05-22T00:00:00+02:00").getTime();
    const updateCountdown = () => {
      const remaining = Math.max(0, target - Date.now());
      const values = {
        days: Math.floor(remaining / 86400000),
        hours: Math.floor((remaining % 86400000) / 3600000),
        minutes: Math.floor((remaining % 3600000) / 60000),
        seconds: Math.floor((remaining % 60000) / 1000)
      };
      Object.entries(values).forEach(([unit, value]) => {
        const output = countdown.querySelector(`[data-countdown-${unit}]`);
        if (output) output.textContent = String(value).padStart(unit === "days" ? 3 : 2, "0");
      });
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  const dialog = document.querySelector("#image-dialog");
  const dialogImage = dialog?.querySelector("img");
  document.querySelectorAll("[data-gallery]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!dialog || !dialogImage) return;
      dialogImage.src = button.dataset.gallery;
      dialogImage.alt = button.querySelector("img")?.alt || "";
      dialog.showModal();
    });
  });
  dialog?.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  translate(language);
})();

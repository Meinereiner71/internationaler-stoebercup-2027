(() => {
  "use strict";

  const pages = [
    ["index.html", "home", "Start", "Home"],
    ["event.html", "event", "Event", "Event"],
    ["programm.html", "program", "Programm", "Programme"],
    ["unterkunft.html", "stay", "Unterkunft", "Accommodation"],
    ["downloads.html", "downloads", "Downloads", "Downloads"],
    ["kontakt.html", "contact", "Kontakt", "Contact"],
    ["faq.html", "faq", "FAQ", "FAQ"],
    ["sponsoren.html", "sponsors", "Sponsoren", "Sponsors"]
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
          <a class="brand" href="index.html">
            <span class="brand-mark" aria-hidden="true">FCI</span>
            <span class="brand-copy"><span>Internationaler</span><span>Stöbercup 2027</span></span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation"
            data-aria-label-de="Menü öffnen" data-aria-label-en="Open menu">
            <span class="nav-toggle-lines" aria-hidden="true"></span>
          </button>
          <nav class="site-nav" id="site-navigation" aria-label="Hauptnavigation" data-open="false"
            data-aria-label-de="Hauptnavigation" data-aria-label-en="Main navigation">
            <ul class="nav-list">
              ${pages.map(([href, id, de, en]) => `
                <li><a class="nav-link" href="${href}" ${page === id ? 'aria-current="page"' : ""}
                  data-de="${de}" data-en="${en}">${de}</a></li>`).join("")}
              <li><a class="nav-link nav-link--cta" href="anmeldung.html"
                ${page === "registration" ? 'aria-current="page"' : ""}
                data-de="Anmelden" data-en="Register">Anmelden</a></li>
            </ul>
            <div class="language-switcher" aria-label="Sprache" data-aria-label-de="Sprache" data-aria-label-en="Language">
              <button class="language-button" type="button" data-language="de" aria-pressed="true">DE</button>
              <button class="language-button" type="button" data-language="en" aria-pressed="false">EN</button>
            </div>
          </nav>
        </div>
      </header>`;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-top">
          <div class="footer-intro">
            <a class="brand" href="index.html">
              <span class="brand-mark" aria-hidden="true">FCI</span>
              <span class="brand-copy"><span>Internationaler</span><span>Stöbercup 2027</span></span>
            </a>
            <p data-de="22.–23. Mai 2027 · Villach, Kärnten, Österreich"
              data-en="22–23 May 2027 · Villach, Carinthia, Austria">22.–23. Mai 2027 · Villach, Kärnten, Österreich</p>
          </div>
          <div>
            <div class="footer-title" data-de="Event" data-en="Event">Event</div>
            <div class="footer-links">
              <a href="event.html" data-de="Über den Bewerb" data-en="About the competition">Über den Bewerb</a>
              <a href="programm.html" data-de="Programm" data-en="Programme">Programm</a>
              <a href="unterkunft.html" data-de="Unterkunft" data-en="Accommodation">Unterkunft</a>
              <a href="downloads.html" data-de="Downloadcenter" data-en="Download centre">Downloadcenter</a>
            </div>
          </div>
          <div>
            <div class="footer-title" data-de="Information" data-en="Information">Information</div>
            <div class="footer-links">
              <a href="kontakt.html" data-de="Kontakt" data-en="Contact">Kontakt</a>
              <a href="faq.html">FAQ</a>
              <a href="sponsoren.html" data-de="Sponsoren" data-en="Sponsors">Sponsoren</a>
              <a href="impressum.html" data-de="Impressum" data-en="Legal notice">Impressum</a>
              <a href="datenschutz.html" data-de="Datenschutz" data-en="Privacy">Datenschutz</a>
            </div>
          </div>
        </div>
        <div class="container footer-bottom">
          <span>© <span data-current-year></span> ÖGV St. Magdalen</span>
          <span data-de="Angaben vorbehaltlich offizieller Bestätigung."
            data-en="Information subject to official confirmation.">Angaben vorbehaltlich offizieller Bestätigung.</span>
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
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => translate(button.dataset.language));
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");
  const closeNavigation = () => {
    if (!navToggle || !navigation) return;
    navToggle.setAttribute("aria-expanded", "false");
    navigation.dataset.open = "false";
  };

  navToggle?.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(open));
    navigation.dataset.open = String(open);
  });
  navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
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

  document.querySelectorAll("form[data-placeholder-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector(".form-status");
      if (status) {
        status.dataset.visible = "true";
        status.textContent = language === "de"
          ? "Ihre Angaben wurden lokal geprüft. Die Übermittlung wird aktiviert, sobald der Formulardienst offiziell freigegeben ist."
          : "Your details have been checked locally. Submission will be enabled once the form service has been officially approved.";
        status.focus();
      }
    });
  });

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

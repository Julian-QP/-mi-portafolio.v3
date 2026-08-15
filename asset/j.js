document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const navLinks = menu.querySelectorAll("a");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateHeaderState() {
    if (window.scrollY > 18) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  function setMenuState(isOpen) {
    menu.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  }

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      toggle.focus();
    }
  });

  const exploreButton = document.getElementById("explore-content");
  const publicationsSection = document.getElementById("actualidad");

  if (exploreButton && publicationsSection) {
    exploreButton.addEventListener("click", function (event) {
      event.preventDefault();
      publicationsSection.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  document.querySelectorAll(".podcast-button").forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.closest(".podcast-item");
      const status = item.querySelector(".demo-status");
      console.log("Reproducción simulada");
      status.classList.remove("hidden");
      status.textContent = "Reproductor de demostración";
      button.textContent = "Escuchando";
      button.disabled = true;
      button.style.opacity = "0.75";
      button.style.cursor = "default";
    });
  });

  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterMessage = document.getElementById("newsletter-message");
  const newsletterEmail = document.getElementById("newsletter-email");

  if (newsletterForm && newsletterMessage && newsletterEmail) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = newsletterEmail.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!valid) {
        newsletterEmail.setAttribute("aria-invalid", "true");
        newsletterMessage.textContent = "Ingrese un correo electrónico válido.";
        newsletterMessage.classList.remove("text-emerald-700");
        newsletterMessage.classList.add("text-red-600");
        return;
      }

      newsletterEmail.setAttribute("aria-invalid", "false");
      newsletterMessage.textContent = "Gracias por suscribirte. Esta función está disponible como demostración.";
      newsletterMessage.classList.remove("text-red-600");
      newsletterMessage.classList.add("text-emerald-700");
      newsletterForm.reset();
    });
  }

  const footerNewsletter = document.getElementById("footer-newsletter");
  const footerEmail = document.getElementById("footer-email");

  if (footerNewsletter && footerEmail) {
    footerNewsletter.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = footerEmail.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!valid) {
        footerEmail.setAttribute("aria-invalid", "true");
        footerEmail.setAttribute("placeholder", "Ingrese un correo válido");
        return;
      }

      footerEmail.setAttribute("aria-invalid", "false");
      footerEmail.value = "";
      footerEmail.setAttribute("placeholder", "Gracias por seguirnos");
    });
  }

  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
const phoneLink = document.querySelector(".phone-link");

if (phoneLink) {
  const parts = [phoneLink.dataset.phoneA, phoneLink.dataset.phoneB, phoneLink.dataset.phoneC];
  const phoneNumber = parts.join("");
  const phoneDisplay = phoneLink.querySelector(".phone-display");

  if (phoneDisplay) {
    phoneDisplay.textContent = `(${parts[0]}) ${parts[1]}-${parts[2]}`;
  }

  phoneLink.addEventListener("click", () => {
    window.location.href = `tel:${phoneNumber}`;
  });
}
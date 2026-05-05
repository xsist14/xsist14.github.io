const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

document.querySelector("#year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thank you. This placeholder form can be connected to Daniel’s email or scheduling system later.";
  form.reset();
});

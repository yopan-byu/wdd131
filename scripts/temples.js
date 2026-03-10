const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");
    menuToggle.classList.remove("active");
  });
});

const year = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
year.innerHTML = `<span class="highlight">${currentYear}</span>`;

const lastModified = document.getElementById("lastModified");
const dateOfLastModification = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${dateOfLastModification.toLocaleDateString()} at ${dateOfLastModification.toLocaleTimeString()}`;

// Menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

// Navigation filtering
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const filterType = this.getAttribute("href").substring(1);
    filterTemples(filterType);
    navMenu.classList.remove("show");
    menuToggle.classList.remove("active");
  });
});

function filterTemples(filterType) {
  const cards = document.querySelectorAll(".temple-card");

  cards.forEach((card) => {
    const dedicated = parseInt(card.getAttribute("data-dedicated"));
    const area = parseInt(card.getAttribute("data-area"));
    let show = true;

    if (filterType === "old") {
      show = dedicated < 1900;
    } else if (filterType === "new") {
      show = dedicated > 2000;
    } else if (filterType === "large") {
      show = area > 90000;
    } else if (filterType === "small") {
      show = area < 10000;
    }
    // filterType === "home" shows all

    card.style.display = show ? "block" : "none";
  });
}

// Set footer year and last modified
const year = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
year.innerHTML = `<span class="highlight">${currentYear}</span>`;

const lastModified = document.getElementById("lastModified");
const dateOfLastModification = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${dateOfLastModification.toLocaleDateString()} at ${dateOfLastModification.toLocaleTimeString()}`;

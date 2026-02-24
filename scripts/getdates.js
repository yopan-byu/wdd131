const year = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
year.innerHTML = `<span class="highlight">${currentYear}</span>`;

const lastModified = document.getElementById("lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

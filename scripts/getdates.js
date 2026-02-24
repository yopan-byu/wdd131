const year = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
year.innerHTML = `<span class="highlight">${currentYear}</span>`;

const lastModified = document.getElementById("lastModified");
const dateOfLastModification = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${dateOfLastModification.toLocaleDateString()} at ${dateOfLastModification.toLocaleTimeString()}`;

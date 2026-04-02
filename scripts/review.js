const params = new URLSearchParams(window.location.search);
if (params.has("product") && params.has("rating") && params.has("installDate")) {
  let count = Number(localStorage.getItem("reviewCount") || 0);
  count += 1;
  localStorage.setItem("reviewCount", String(count));
}

const countEl = document.querySelector("#review-count");
if (countEl) {
  countEl.textContent = localStorage.getItem("reviewCount") || "0";
}

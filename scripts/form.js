const products = [
  { id: "fc-5000", name: "Flux Capacitor 5000" },
  { id: "fh-3000", name: "Fusion Home Generator" },
  { id: "tq-100", name: "Turbo Quadcopter X" },
  { id: "ss-2025", name: "Solar Sleeper Pod" },
];

const productSelect = document.querySelector("#product");

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

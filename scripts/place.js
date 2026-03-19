const temperature = 24;
const windSpeed = 12;

/**
 * Calculates wind chill factor (metric) using a single-line return per spec.
 * @param {number} temp
 * @param {number} wind
 * @returns {string} formatted wind chill
 */
const calculateWindChill = (temp, wind) =>
  (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  ).toFixed(1);

function initializePage() {
  const canCalculate = temperature <= 10 && windSpeed > 4.8;
  const windChillResult = canCalculate
    ? `${calculateWindChill(temperature, windSpeed)} °C`
    : "N/A";
  const windChillElement = document.getElementById("wind-chill-result");
  windChillElement.textContent = windChillResult;

  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;

  const lastModified = document.lastModified;
  document.getElementById("lastmod").textContent = lastModified;
}

document.addEventListener("DOMContentLoaded", initializePage);

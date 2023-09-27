// script.js
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
  enableConvertButton();
});

// Add this JavaScript code at the end of your <body> or in a separate .js file

// Function to update the time
function updateTime() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${ampm}`;
  clockElement.textContent = formattedTime;
}

// Update the time immediately and set an interval to update it every second
updateTime();
setInterval(updateTime, 1000);

degree.addEventListener("input", () => {
  enableConvertButton();
});

function enableConvertButton() {
  if (degree.value === "" || isNaN(degree.value)) {
    convertBtn.setAttribute("disabled", "");
  } else {
    convertBtn.removeAttribute("disabled");
  }
}

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertToCelsius();
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000);
});

function convertToCelsius() {
  let inputValue = parseFloat(degree.value);

  if (isNaN(inputValue)) {
    celsiusField.innerHTML = "Invalid input";
    return;
  }

  if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    displayResult(FahrenheitToCelsius);
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    displayResult(KelvinToCelsius);
  }
}

function displayResult(result) {
  celsiusField.innerHTML = `${result.toFixed(3)} &deg;C`;
}

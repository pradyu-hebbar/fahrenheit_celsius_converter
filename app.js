// Ui Vars
const farInput = document.getElementById("fahrenheitI"),
  celResult = document.getElementById("celsius"),
  celInput = document.getElementById("celsiusI"),
  farResult = document.getElementById("fahrenheit");

farInput.addEventListener("keyup", computeCelsius);
celInput.addEventListener("keyup", computeFahrenheit);

function getCelsius(fahrenheit) {
  return Math.ceil(((fahrenheit - 32) * 5) / 9);
}

function computeCelsius(event) {
  let KeyId = event.keyCode;
  switch (KeyId) {
    case 8:
      if (farInput.value === "") {
        celResult.value = "";
      } else {
        celResult.value = getCelsius(farInput.value);
      }
      break;
    default:
      celResult.value = getCelsius(farInput.value);
      break;
  }
}

function getFahrenheit(celsius) {
  return Math.ceil(celsius / 5) * 9 + 32;
}

function computeFahrenheit(event) {
  let KeyId = event.keyCode;
  switch (KeyId) {
    case 8:
      if (celInput.value === "") {
        farResult.value = "";
      } else {
        farResult.value = getFahrenheit(celInput.value);
      }
      break;
    default:
      farResult.value = getFahrenheit(celInput.value);
      break;
  }
}

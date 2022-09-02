let count = 0;

window.onload = () => {
  let button = document.querySelector("#btn");

  button.addEventListener("click", calculateBMI);
};

function refreshPage() {
  window.location.reload();
}

function calculateBMI() {
  let name = document.querySelector("#name").value;

  let height = document.querySelector("#height").value;

  let weight = document.querySelector("#weight").value;

  let result = document.querySelector("#result");

  if (height === "" || isNaN(height)) result.innerHTML = "Provide a Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a Weight!";
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6)
      result.innerHTML = `<span>${name}</span> is under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `<span>${name}</span> is normal : <span>${bmi}</span>`;
    else
      result.innerHTML = `<span>${name}</span> is Over Weight : <span>${bmi}</span>`;
  }
}

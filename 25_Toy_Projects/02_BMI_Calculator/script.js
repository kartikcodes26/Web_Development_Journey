form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#Height").value);
  const weight = parseFloat(document.querySelector("#Weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter valid data";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter valid data";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span> <b>BMI</b> = ${bmi}</span>`;

    const verdict = document.querySelector("#verdict");
    if (bmi <= 18.5) {
      verdict.innerHTML = "<span> <b>Verdict</b> : Underweight </span>";
    } else if (bmi > 18.5 && bmi <= 24.5) {
      verdict.innerHTML = "<span> <b>Verdict</b> : Healthy Weight </span>";
    } else {
      verdict.innerHTML = "<span> <b>Verdict</b> : Overweight </span>";
    }
  }

});

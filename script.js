document.getElementById("bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height > 0 && weight > 0 && gender) {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    document.getElementById("bmi-value").innerText = bmi;
    const category = getBMICategory(bmi, gender);
    document.getElementById("bmi-category").innerText = category;

    if (category === "Normal weight") {
      document.getElementById("bmi-category").innerText +=
        " - Bhai be fit like this!";
    } else if (category === "Underweight") {
      document.getElementById("bmi-category").innerText +=
        " - Bhai khana kha le!";
    } else if (category === "Overweight") {
      document.getElementById("bmi-category").innerText +=
        " - Exercise kar le!";
    } else if (category === "Obese") {
      document.getElementById("bmi-category").innerText +=
        " - Bhai, thoda dhyan dena padega!";
    }
  } else {
    alert("Please enter valid height, weight, and gender.");
  }
});

function getBMICategory(bmi, gender) {
  let category = "";

  if (gender === "male" || gender === "female") {
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  }

  return category;
}

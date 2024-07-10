function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height > 0 && weight > 0) {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    let resultText;

    if (bmi < 18.5) {
      resultText = `Your BMI is ${bmi} (Underweight)`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText = `Your BMI is ${bmi} (Normal weight)`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultText = `Your BMI is ${bmi} (Overweight)`;
    } else {
      resultText = `Your BMI is ${bmi} (Obesity)`;
    }

    document.getElementById("result").innerText = resultText;
  } else {
    document.getElementById("result").innerText =
      "Please enter valid height and weight";
  }
}

let heightInput = document.getElementById("height-input");
let weightInput = document.getElementById("weight-input");
let calculateBtn = document.getElementById("btn-success");
let resetBtn = document.getElementById("btn-reset");
let result = document.getElementById("dynamic__bmi");
let message = document.getElementById("bmi_text");

let calculateBMI = () => {
  let height, weight, bmi;
  height = Number(heightInput.value);
  weight = Number(weightInput.value);
  bmi = weight / (height * 0.0254 * height * 0.0254);
  result.textContent = bmi.toFixed(2);
  let msg = ShowMessage(bmi);
  message.textContent = msg;
};

let ShowMessage = (bmiValue) => {
  if (bmiValue < 16) {
    return "You are Severe Thin";
  } else if (bmiValue >= 16 && bmiValue <= 17) {
    return "You are Modarate Thin";
  } else if (bmiValue > 17 && bmiValue <= 18.5) {
    return "You are Mid Thin";
  } else if (bmiValue > 18.5 && bmiValue <= 25) {
    return "You are Normal";
  } else if (bmiValue > 25) {
    return "You are Overweight";
  }
};

let resetBMI = () => {
  heightInput.value = "";
  weightInput.value = "";
  result.textContent = "_________";
  message.textContent = "";
};

let checkInput = () => {
  if (Number(heightInput.value) && Number(weightInput.value)) {
    calculateBMI();
  } else {
    alert("Please enter a valid value");
  }
};

calculateBtn.addEventListener("click", checkInput);
resetBtn.addEventListener("click", resetBMI);

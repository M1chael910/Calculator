function Calculate(operation) {
  const firstBox = document.getElementById("first-box");
  const secondBox = document.getElementById("second-box");
  const resultLabel = document.getElementById("results-label");
  let x = Number(firstBox.value);
  let y = Number(secondBox.value);
  if (operation === 1) {
    resultLabel.innerHTML = String(x + y);
  } else if (operation === 2) {
    resultLabel.innerHTML = String(x - y);
  } else if (operation === 3) {
    resultLabel.innerHTML = String(x * y);
  } else if (operation === 4) {
    resultLabel.innerHTML = String(x / y);
  }
}

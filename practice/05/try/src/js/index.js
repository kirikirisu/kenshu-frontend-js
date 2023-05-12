const showTextByInputValue = (displayElement) => (inputValue) => {
  if (!/yes/.test(inputValue)) {
    displayElement.textContent = "";
    return;
  }

  displayElement.textContent = inputValue;
};

window.addEventListener("DOMContentLoaded", (event) => {
  const input = document.getElementById("input");
  const displayText = document.getElementById("text");

  const showText = showTextByInputValue(displayText);

  input.addEventListener("input", (e) => {
    showText(e.target.value);
  });

  // input.addEventListener("keyup", (e) => {
  //   showText(input.value);
  // });
});

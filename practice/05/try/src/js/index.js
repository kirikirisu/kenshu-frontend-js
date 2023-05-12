window.addEventListener("DOMContentLoaded", (event) => {
  const input = document.getElementById("input");
  const displayText = document.getElementById("text");

  input.addEventListener("input", (e) => {
    const inputValue = e.target.value;
    if (!/yes/.test(inputValue)) {
      displayText.textContent = "";
      return;
    }

    displayText.textContent = inputValue;
  });
});

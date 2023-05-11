(() => {
  window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById("input");
    const displayText = document.getElementById("text");

    input.addEventListener("change", (e) => {
      const inputValue = e.target.value;
      if (!/yes/.test(inputValue)) return;

      displayText.textContent = inputValue;
    });
  });
})();

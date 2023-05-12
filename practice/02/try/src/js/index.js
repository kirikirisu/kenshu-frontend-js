(() => {
  window.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("button");

    const [dataType] = document.getElementsByClassName("text--type");
    const [className] = document.getElementsByClassName("text--class");

    button.onclick = () => {
      dataType.textContent = button.dataset.type;
      className.textContent = button.className;
    };
  });
})();

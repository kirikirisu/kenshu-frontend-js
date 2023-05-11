(() => {
  window.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("button");

    const [dataType] = document.getElementsByClassName("text--type");
    const [className] = document.getElementsByClassName("text--class");

    button.onclick = () => {
      dataType.append(button.dataset.type);
      className.append(button.className);
    };
  });
})();

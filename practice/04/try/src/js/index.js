const toggle = (buttonElement, targetToggle) => {
  buttonElement.onclick = () => {
    if (targetToggle.classList.value.split(" ").indexOf("is-active") === -1) {
      targetToggle.classList.add("is-active");
      return;
    }
    targetToggle.classList.remove("is-active");
  };
};

window.addEventListener("DOMContentLoaded", (event) => {
  const [aboveButton, bottomButton] = document.getElementsByClassName("button");
  const [aboveList, bottomList] = document.getElementsByClassName("list");

  toggle(aboveButton, aboveList);
  toggle(bottomButton, bottomList);
});

const toggle = (buttonElement, targetToggle) => {
  buttonElement.addEventListener("click", () => {
    targetToggle.classList.toggle("is-active");
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  const toggleElementList = document.getElementsByClassName("wrapper");

  [...toggleElementList].forEach((toggleElement) => {
    const [button] = toggleElement.getElementsByClassName("button");
    const [list] = toggleElement.getElementsByClassName("list");
    toggle(button, list);
  });
});

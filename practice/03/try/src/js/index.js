const toggleActiveClass = (flag, deps) => {
  if (flag === "open") {
    deps.forEach((element) => {
      element.classList.add("is-active");
    });
    return;
  }
  if (flag === "close") {
    deps.forEach((element) => {
      element.classList.remove("is-active");
    });
  }
};

window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("button");

  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");
  const close = document.getElementById("modal-close");

  button.addEventListener("click", () => {
    toggleActiveClass("open", [overlay, content]);
  });

  overlay.addEventListener("click", () => {
    toggleActiveClass("close", [overlay, content]);
  });

  close.addEventListener("click", () => {
    toggleActiveClass("close", [overlay, content]);
  });
});

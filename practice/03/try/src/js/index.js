const toggleActiveClass = (deps) => {
  return (flag) => {
    if (flag) {
      deps.forEach((element) => {
        element.classList.add("is-active");
      });
      return;
    }
    deps.forEach((element) => {
      element.classList.remove("is-active");
    });
  };
};

window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("button");

  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");
  const close = document.getElementById("modal-close");

  const toggle = toggleActiveClass([overlay, content]);

  button.addEventListener("click", () => {
    toggle(true);
  });

  overlay.addEventListener("click", () => {
    toggle(false);
  });

  close.addEventListener("click", () => {
    toggle(false);
  });
});

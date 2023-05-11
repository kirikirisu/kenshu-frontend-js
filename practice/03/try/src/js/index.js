(() => {
  window.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("button");

    const overlay = document.getElementById("modal-overlay");
    const content = document.getElementById("modal-content");
    const close = document.getElementById("modal-close");

    button.onclick = () => {
      overlay.classList.add("is-active");
      content.classList.add("is-active");
    };

    overlay.onclick = () => {
      overlay.classList.remove("is-active");
      content.classList.remove("is-active");
    };
    close.onclick = () => {
      overlay.classList.remove("is-active");
      content.classList.remove("is-active");
    };
  });
})();

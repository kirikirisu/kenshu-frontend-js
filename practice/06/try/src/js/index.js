window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    const form = document.getElementById("form");
    const inputName = form.name.value;

    document.getElementById("text-wrapper").classList.add("is-active");

    document.getElementById("name-text").textContent = inputName;
    document.getElementById("gender-text").textContent = form.gender.value;
  });
});

const validateInput = (inputValue) => {
  if (inputValue && inputValue.length > 0) return true;
  return false;
};

window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("button");
  const validationError = document.getElementById("error");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("form"));

    if (
      !validateInput(formData.get("name")) ||
      !validateInput(formData.get("mail")) ||
      !validateInput(formData.get("gender")) ||
      !validateInput(formData.get("age")) ||
      !validateInput(formData.get("term"))
    ) {
      validationError.classList.add("is-active");
      return;
    }

    if (validationError.classList.contains("is-active")) {
      validationError.classList.remove("is-active");
    }
  });
});

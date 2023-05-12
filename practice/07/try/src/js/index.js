const validateInput = (inputValue) => {
  if (inputValue && inputValue.length > 0) return true;
  return false;
};

window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("button");

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
      document.getElementById("error").classList.add("is-active");
      return;
    }

    document.getElementById("error").classList.remove("is-active");
  });
});

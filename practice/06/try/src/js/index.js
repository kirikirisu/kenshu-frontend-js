window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    const inputGenderList = document.getElementsByName("gender");
    const inputName = document.forms.form.elements.name.value;

    document.getElementById("text-wrapper").classList.add("is-active");

    let checkedGender = "";
    inputGenderList.forEach((input) => {
      if (input.checked) checkedGender = input.value;
    });

    document.getElementById("name-text").textContent = inputName;
    document.getElementById("gender-text").textContent = checkedGender;
  });
});

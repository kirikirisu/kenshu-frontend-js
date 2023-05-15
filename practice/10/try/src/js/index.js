window.addEventListener("DOMContentLoaded", (event) => {
  const [list] = document.getElementsByClassName("list");
  const [prev] = document.getElementsByClassName("prev");
  const [next] = document.getElementsByClassName("next");

  const slides = document.querySelectorAll(".item");

  let curItem = 0;
  let maxItem = slides.length - 1;

  next.addEventListener("click", function () {
    if (curItem === maxItem + 1) {
      curItem = 0;
      list.style.transition = "left 0.3s";
      list.style.left = `-400px`;
    } else {
      curItem++;
      list.style.transition = "left 0.3s";
      list.style.left = `${-400 + -400 * curItem}px`;
    }
  });

  document.addEventListener("transitionend", () => {
    if (curItem >= 3) {
      curItem = 0;
      list.style.transition = "left 0s";
      list.style.left = `-400px`;
    }

    if (curItem <= -1) {
      curItem = 2;
      list.style.transition = "left 0s";
      list.style.left = `-1200px`;
    }
  });

  prev.addEventListener("click", function () {
    if (curItem === 0) {
      curItem--;
      list.style.transition = "left 0.3s";
      list.style.left = `0px`;
    } else {
      curItem--;
      list.style.transition = "left 0.3s";
      list.style.left = `${-400 + -400 * curItem}px`;
    }
  });
});

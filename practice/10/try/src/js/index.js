window.addEventListener("DOMContentLoaded", (event) => {
  const [list] = document.getElementsByClassName("list");
  const [prev] = document.getElementsByClassName("prev");
  const [next] = document.getElementsByClassName("next");

  const slides = document.querySelectorAll(".item");

  const elementFirstItem = document.querySelectorAll(".item")[0];
  const copyElementFirstItem = elementFirstItem.cloneNode(true);
  const setElementLastItem = document.querySelectorAll(".item")[slides.length];
  list.insertBefore(copyElementFirstItem, setElementLastItem);

  const elementLastItem = document.querySelectorAll(".item")[slides.length - 1];
  const copyElementLastItem = elementLastItem.cloneNode(true);
  const setElementFirstItem = document.querySelectorAll(".item")[0];
  list.insertBefore(copyElementLastItem, setElementFirstItem);

  let curItem = 0;
  let maxItem = slides.length - 1;

  next.addEventListener("click", function () {
    if (curItem === maxItem + 1) {
      curItem = 0;
      list.style.transition = "left 0.3s";
      list.style.left = `-400px`;
      // list.style.transition = "";
    } else {
      curItem++;
      list.style.transition = "left 0.3s";
      list.style.left = `${-400 + -400 * curItem}px`;
      // if (curItem === 3) {
      //   list.style.transition = "left 0s";
      // }
    }
  });
  document.addEventListener("transitionend", () => {
    if (curItem === 3) {
      curItem = 0;
      list.style.transition = "left 0s";
      list.style.left = `-400px`;
    }
  });

  prev.addEventListener("click", function () {
    if (curItem === 0) {
      curItem = 2;
      list.style.left = `${-400 * maxItem}px`;
      // list.style.transition = "";
    } else {
      curItem--;
      list.style.left = `${-400 * curItem}px`;
      // list.style.transition = "all 0.3s";
    }
  });
});

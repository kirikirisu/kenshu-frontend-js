window.addEventListener("DOMContentLoaded", (event) => {
  const [list] = document.getElementsByClassName("list");
  const [prev] = document.getElementsByClassName("prev");
  const [next] = document.getElementsByClassName("next");

  const items = document.querySelectorAll(".item");

  let curItem = 0;
  let maxItem = items.length - 1;

  next.addEventListener("click", function () {
    if (curItem === maxItem) {
      curItem = 0;
      list.style.left = `0px`;
    } else {
      curItem++;
      list.style.left = `${-400 * curItem}px`;
    }
  });

  prev.addEventListener("click", function () {
    if (curItem === 0) {
      curItem = 2;
      list.style.left = `${-400 * 2}px`;
    } else {
      curItem--;
      list.style.left = `${-400 * curItem}px`;
    }
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  const [list] = document.getElementsByClassName("list");
  const [prevButton] = document.getElementsByClassName("prev");
  const [nextButton] = document.getElementsByClassName("next");

  // 擬似的なitemを追加
  const items = document.querySelectorAll(".item");

  const elementFirstItem = items[0];
  const copyElementFirstItem = elementFirstItem.cloneNode(true);
  const setElementLastItem = items[items.length];
  list.insertBefore(copyElementFirstItem, setElementLastItem);

  const elementLastItem = items[items.length - 1];
  const copyElementLastItem = elementLastItem.cloneNode(true);
  const setElementFirstItem = items[0];
  list.insertBefore(copyElementLastItem, setElementFirstItem);

  let curItem = 0;

  nextButton.addEventListener("click", function () {
    curItem++;
    list.style.transition = "left 0.3s";
    list.style.left = `${-400 + -400 * curItem}px`;

    // アニメーション中の 0.3s 間はクリックできないように制御する
    nextButton.style.pointerEvents = "none";
    setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
    }, 300);
  });

  prevButton.addEventListener("click", function () {
    curItem--;
    list.style.transition = "left 0.3s";
    list.style.left = `${-400 + -400 * curItem}px`;

    // アニメーション中の 0.3s 間はクリックできないように制御する
    prevButton.style.pointerEvents = "none";
    setTimeout(() => {
      prevButton.style.pointerEvents = "auto";
    }, 300);
  });

  list.addEventListener("transitionend", () => {
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
});

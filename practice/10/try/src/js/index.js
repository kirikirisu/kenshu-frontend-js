const slideItemWithAnimation = (targetElement) => (nextItemNum) => {
  targetElement.style.transition = "left 0.3s";
  targetElement.style.left = `${-400 + -400 * nextItemNum}px`;
};

window.addEventListener("DOMContentLoaded", (event) => {
  const [list] = document.getElementsByClassName("list");
  const [prevButton] = document.getElementsByClassName("prev");
  const [nextButton] = document.getElementsByClassName("next");

  const slideItem = slideItemWithAnimation(list);

  // 擬似的なitemを追加
  const items = document.querySelectorAll(".item");
  const firstItem = items[0];
  list.insertBefore(firstItem.cloneNode(true), items[items.length]);
  const lastItem = items[items.length - 1];
  list.insertBefore(lastItem.cloneNode(true), items[0]);

  let curItem = 0;

  nextButton.addEventListener("click", function () {
    curItem++;
    slideItem(curItem);

    // アニメーション中の 0.3s 間はクリックできないように制御する
    nextButton.style.pointerEvents = "none";
    setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
    }, 300);
  });

  prevButton.addEventListener("click", function () {
    curItem--;
    slideItem(curItem);

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

window.addEventListener("DOMContentLoaded", (event) => {
  const [mainImg] = document.getElementsByClassName("main-img");
  const thumbList = document.getElementsByClassName("thumb-list");

  thumbList[0].addEventListener("mouseover", (e) => {
    if (!e.target.alt) return;

    const largeImg = e.target.src?.replace("small", "large");
    mainImg.setAttribute("src", largeImg);

    const [activeImg] = document.getElementsByClassName("is-active");
    activeImg.classList.remove("is-active");

    if (e.target.alt) {
      e.target.classList.add("is-active");
    }
  });
});

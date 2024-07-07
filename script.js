const arrow = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");
arrow.forEach((arrow, i) => {
  const widthRatio=Math.floor(window.innerWidth/300);
  let clickCounter = 0;
  const imageItem = movielist[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter)+(4-widthRatio) >= 0) {
      movielist[i].style.tranform = `translateX(${
        movielist[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielist[i].style.transfrom = "translateX(0)";
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.toggle,.toggle-ball,.sidebar i,.movie-list-filter select,.movie-list-title"
);
ball.addEventListener("click", function () {
    items.forEach((item)=>item.classList.toggle("active"));
});

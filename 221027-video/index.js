const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// 切換btn
switchBtn.addEventListener("click", function () {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    video.play();
  } else {
    switchBtn.classList.remove("slide");
    video.pause();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

// 網頁加載完成後，移除preloader
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});


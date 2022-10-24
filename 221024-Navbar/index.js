const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }
  // 可直接用toggle寫法
  links.classList.toggle("show-links");
});

// classList -> show/get all classes
// contains -> check classList for specific class
// add -> add class
// remove -> remove class
// toggle -> toggle class

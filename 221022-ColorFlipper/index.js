let colors = ["blue", "pink", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn-el");
const color = document.querySelector(".color"); //get class:color

btn.addEventListener("click", function () {
  // console.log(document.body)
  // get random number between 0-3
  const randomNum = getRandomNum();
    console.log(getRandomNum());
  document.body.style.backgroundColor = colors[randomNum]; //set up body's color
  color.textContent = colors[randomNum]; // change textContent to where class is color
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length) ; //get neat number
}

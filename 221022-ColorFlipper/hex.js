const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #f15025 -> 6 values
const btn = document.getElementById("btn-el");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // use for loop to generate random hex color
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()];
    //generate one random hex array's item * 6 times
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}

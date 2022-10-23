// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// forEach() 把陣列裡每個元素帶進去函式處理一遍
// select all buttons
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    // Event.currentTarget:
    // 當事件觸發時，addEventListener 監聽的東西
    // Event.target:
    // 當事件觸發時，使用者觸發的 Element
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // set up color
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});

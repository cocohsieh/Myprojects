const buttons = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// 1. 點選about時，取得e.target的data-id (用dataset用dataset)

// 2. 點按鈕時 -> 刪除其他active class，新增active到點選的按鈕

// 3. 點按鈕時 -> 取得相對應的content id (用getElementById)
//             -> 刪除其他active class，新增active

about.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  //如果成功取得id
  if (id) {
    // 1. 刪除按鈕的所有active class
    buttons.forEach(function (btn) {
      //   console.log(btn);
      btn.classList.remove("active");
    });
    // 2. 新增active class至點選按鈕
    e.target.classList.add("active"); // e.target -> 點選按鈕的dom
    
    // 內文
    // 1. 隱藏其他內文
    articles.forEach(function (article) {
      // 1. 刪除按鈕的所有active class
      article.classList.remove("active");
      // 2. 新增active class至點選按鈕
    });
    // 2. 顯示按鈕對應的內文
    let element = document.getElementById(id);
    console.log(element);
    element.classList.add("active");
  }
});

// e.target：指向最初觸發事件的DOM 物件。
// e.currentTarget 指向目前於冒泡或捕捉階段正在處理該事件之事件處理器所註冊的DOM 物件

// e.target -> 選到btn
// e.currentTarget -> 選到整個about區域

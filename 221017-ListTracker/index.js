let myLists = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn"); //1. 先取得Id
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

//2. 加監聽事件
inputBtn.addEventListener("click", function () {
  //按了之後要執行的事
  myLists.push(inputEl.value);
  inputEl.value = "";
  // 把myLists array存進localStorage
  // setItem("key", "value")  key可以自己取，value要把陣列轉為字串
  TODO: localStorage.setItem("myLists", JSON.stringify(myLists));
  render(myLists);
  console.log(localStorage.getItem("myLists"));
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLists = [];
  render(myLists);
});

tabBtn.addEventListener("click", function () {
  // 取得當前url網址
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLists.push(tabs[0].url);
    localStorage.setItem("myLists", JSON.stringify(myLists));
    render(myLists);
  });
});

// localStorage.getItem(keyName)
//把字串轉回
const listsFromLocalStorage = JSON.parse(localStorage.getItem("myLists"));
console.log(listsFromLocalStorage);

// 1. 把字串變成array -> 用JSON.parse
// myLists = JSON.parse(myLists)
// console.log(typeof myLists) //會得到object，因為array也是object的一種
// myLists.push("www.add.com")
// console.log(myLists)

// // 2. 把array轉回字串 -> JSON.stringify
// myLists = JSON.stringify(myLists)
// console.log(myLists)

if (listsFromLocalStorage) {
  myLists = listsFromLocalStorage;
  render(myLists);
  // 把function變得更彈性，可多次使用，原本是renderLists()，
  // 改成把陣列傳入當參數，這樣就可以傳入其他的陣列去使用此function
}

function render(lists) {
  let listItems = "";
  for (let i = 0; i < lists.length; i++) {
    //ulEl.textContent += myLists[i] + "  "
    //innerHTML可透過JS更新DOM
    //   ulEl.innerHTML += "<li>" + myLists[i] + "</li>";
    listItems +=
      //   "<li> <a target='_blank' href='" + myLists[i] + "'>" + myLists[i] + "</a> </li>";
      `<li> 
      <a target='_blank' href='${lists[i]}'> 
       ${lists[i]} 
      </a> 
      </li>`;

    //target='_blank' 點連結會開新的分頁
  }
  ulEl.innerHTML = listItems;
}

//JS更新DOM的另一種方法，可讀性較差
//1. create element
//2. set text content
//3. append to ul
//   const li = document.createElement("li")
//   li.textContent =  myLists[i]
//   ulEl.append(li)

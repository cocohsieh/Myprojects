const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuContainer = document.querySelector(".menu-container");
// filter-btn
const filterBtn = document.querySelectorAll(".filter-btn");

// 1. load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu); //傳入function displayMenuItem()
});

// 2. load filter items
// 每個btn都要監聽
filterBtn.forEach(function (btn) {
  //參數名可自取
  btn.addEventListener("click", function (e) {
    // 取得當前按鈕的data- value 用dataset
    const category = e.currentTarget.dataset.id;
    // 用filter -> 可篩選的新陣列
    const menuCategory = menu.filter(function (menuItem) {
      //item是menu陣列裡的物件
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    //
    if (category === "all") {
      displayMenuItem(menu);
    } else {
      displayMenuItem(menuCategory);
    }
  });
});

// ***優化 -> 寫成function再放入window.addEventListener裡執行***
function displayMenuItem(menuItems) {
  // 秀出陣列裡的menu選項 map
  // 將map的item存到變數裡
  let displayMenu = menuItems.map(function (item) {
    //menu改menuItems
    // console.log(item)
    // return Html + 陣列裡的變數
    return `
    <div class="menu-box">
    <img class="img" src="${item.img}" alt="" />
    <div class="menu-intro">
      <div class="menu-info">
        <div class="name">${item.title}</div>
        <div class="price">$ ${item.price}</div>
      </div>
      <div class="description">
      ${item.desc}
      </div>
    </div>
  </div>
    `;
  });
  // console.log(displayMenu);
  // 去除map item後面的逗號，改成空格
  displayMenu = displayMenu.join("");
  // 放到對的位置裡
  menuContainer.innerHTML = displayMenu;
}

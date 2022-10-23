const characterList = [
  {
    id: 1,
    cname: "KOYA",
    tag: "聰明的小睡蟲",
    introduction: "KOYA既聰明又多才多藝。是個想法很多的小睡蟲。",
    img: "https://www.bt21.com/img/character/bt21/koya.gif",
  },
  {
    id: 2,
    cname: "RJ",
    tag: "柔情王子美食家",
    introduction:
      "RJ喜歡做菜也喜歡享受美食。用蓬鬆的毛髮和一顆溫暖的心撫慰每個人。",
    img: "https://www.bt21.com/img/character/bt21/rj.gif",
  },
  {
    id: 3,
    cname: "SHOOKY",
    tag: "調皮搗蛋的小不點",
    introduction:
      "SHOOKY雖小，但身體裡充滿了調皮基因！最喜歡跟朋友們開玩笑，最討厭的是牛奶。",
    img: "https://www.bt21.com/img/character/bt21/shooky.gif",
  },
  {
    id: 4,
    cname: "MANG",
    tag: "神秘的舞蹈天王",
    introduction: "MANG在跳舞時最帥氣。總是戴著面具，充滿著神秘氣息。",
    img: "https://www.bt21.com/img/character/bt21/mang.gif",
  },
  {
    id: 5,
    cname: "CHIMMY",
    tag: "天真爛漫努力派",
    introduction: "CHIMMY最喜歡穿黃色帽T。天生就有努力到底的一股熱情。",
    img: "https://www.bt21.com/img/character/bt21/chimmy.gif",
  },
  {
    id: 6,
    cname: "TATA",
    tag: "48次元好奇心王子",
    introduction: "TATA是來自BT行星的王子。柔軟的身體可以拉長，會使用超能力。",
    img: "https://www.bt21.com/img/character/bt21/tata.gif",
  },
  {
    id: 7,
    cname: "COOKY",
    tag: "愛心背影、反轉肌肉",
    introduction: "COOKY可愛外表下卻擁有著驚人的耐心與耐力，是那種最可靠朋友",
    img: "https://www.bt21.com/img/character/bt21/cooky.gif",
  },
  {
    id: 8,
    cname: "VAN",
    tag: "守護者宇宙機器人",
    introduction: "VAN集世界上所有知識於一身自始至終守護著BT21",
    img: "https://www.bt21.com/img/character/bt21/van.gif",
  },
];

const img = document.querySelector(".img");
const cname = document.querySelector(".name");
const tag = document.querySelector(".tag");
const introduction = document.querySelector(".introduction");

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const btnSurprise = document.querySelector(".btn-surprise");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showCharacter(currentItem);
});

// function that can reuse
function showCharacter(bt21) {
  //參數名隨意
  const item = characterList[bt21]; //減少代碼量
  img.src = item.img; //取得物件內容
  cname.textContent = item.cname;
  tag.textContent = item.tag;
  introduction.textContent = item.introduction;
}

// btn
btnRight.addEventListener("click", function () {
  currentItem++;
  if (currentItem > characterList.length - 1) {
    currentItem = 0;
  }
  showCharacter(currentItem);
});

btnLeft.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = characterList.length - 1;
  }
  showCharacter(currentItem);
});

btnSurprise.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * characterList.length);
  showCharacter(currentItem);
  //   console.log(currentItem)
});

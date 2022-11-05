// //footer的年分
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // 這樣會把高度寫死，如果新增連結就爆了
  // linksContainer.classList.toggle("show-links");

  //計算高度
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(containerHeight); //設定為0 隱藏連結
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight);

  if (containerHeight === 0) {
    //一開始未打開toggle -> 打開連結區
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    //隱藏連結區
    linksContainer.style.height = 0;
  }
});

//設定fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  // console.log(window.pageYOffset)
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  //navbar固定
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  //回到最上方按鈕
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//scroll to 指定位置
const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    //防止預設
    e.preventDefault();
    //到指定位置
    const id = e.currentTarget.getAttribute("href").slice(1); //#home -> home
    console.log(id);
    const element = document.getElementById(id);

    // 取navbar/linksContainer高度
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(navHeight);
    // console.log(containerHeight);

    // navbar是否為fix狀態:是
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;
    // console.log('position' + position);

    //判斷
    //如果navbar沒有固定
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    //點了之後關掉link區域
    linksContainer.style.height = 0;
  });
});

// // Element.getBoundingClientRect()
// // -> 取得element size

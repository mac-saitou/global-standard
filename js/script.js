//スライド
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
});
//topに戻る
const toTop = document.getElementById("totop"); // "totop" 要素を取得

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // スクロール量を取得
  const bodyHeight = document.body.clientHeight; // bodyの高さを取得
  const windowHeight = window.innerHeight; // windowの高さを取得
  const bottomPoint = bodyHeight - windowHeight - 1; // ページ最下部までスクロールしたかを判定するための位置を計算
  if (scrollY >= bottomPoint) {
    // スクロール量が最下部の位置を過ぎたかどうか
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});
//ハンバーガー
const hamburger = document.getElementsByClassName("header-hamburger")[0];
const bars = document.getElementsByClassName("header-hamburger-bar");
const body = document.body;
const mask = document.getElementsByClassName("header-content")[0];

function toggleActiveClass() {
  for (const bar of bars) {
    bar.classList.toggle("header-hamburger-active");
  }
  body.classList.toggle("no-scroll");
  mask.classList.toggle("header-content-open");
}

hamburger.addEventListener("click", toggleActiveClass);

//アコーディオンメニュー
const question = document.getElementsByClassName("service-question-heading");
function Toggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const question = this;
  question.classList.toggle("is-open");
}
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", Toggle);
}

//ページネーション
const number = document.getElementsByClassName("news-pagination-list");
const active = document.getElementById("news-pagination-active");
const firstListItem = number[0];
const lastListItem = number[number.length - 1];
const prevArea = document.querySelector(".news-pagination-prev-area");
const nextArea = document.querySelector(".news-pagination-next-area");
prevArea.style.display = "none";
// 各要素にクリックイベントを追加
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    // 一旦全ての要素から id="news-pagination-active" を削除
    for (let j = 0; j < number.length; j++) {
      number[j].removeAttribute("id");
    }
    // クリックされた要素に id="news-pagination-active" を付与
    this.setAttribute("id", "news-pagination-active");

    if (firstListItem.id === "news-pagination-active") {
      prevArea.style.display = "none";
    } else {
      prevArea.style.display = "block";
    }
    if (lastListItem.id === "news-pagination-active") {
      nextArea.style.display = "none";
    } else {
      nextArea.style.display = "block";
    }
  });
}

nextArea.addEventListener("click", function () {
  const activeItem = document.querySelector(
    ".news-pagination-list#news-pagination-active"
  );
  const nextItem = activeItem.nextElementSibling;
  if (nextItem && nextItem.classList.contains("news-pagination-list")) {
    activeItem.removeAttribute("id");
    nextItem.setAttribute("id", "news-pagination-active");
  }
  if (firstListItem.id === "news-pagination-active") {
    prevArea.style.display = "none";
  } else {
    prevArea.style.display = "block";
  }
  if (lastListItem.id === "news-pagination-active") {
    nextArea.style.display = "none";
  } else {
    nextArea.style.display = "block";
  }
});

prevArea.addEventListener("click", function () {
  const activeItem = document.querySelector(
    ".news-pagination-list#news-pagination-active"
  );
  const prevItem = activeItem.previousElementSibling;
  if (prevItem && prevItem.classList.contains("news-pagination-list")) {
    activeItem.removeAttribute("id");
    prevItem.setAttribute("id", "news-pagination-active");
  }
  if (firstListItem.id === "news-pagination-active") {
    prevArea.style.display = "none";
  } else {
    prevArea.style.display = "block";
  }
  if (lastListItem.id === "news-pagination-active") {
    nextArea.style.display = "none";
  } else {
    nextArea.style.display = "block";
  }
});

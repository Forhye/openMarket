const $section = document.querySelector("section");
const $myPage = document.querySelector(".header--mypage");
const $myPageModal = document.querySelector(".header--mypage__modal");

$myPage.addEventListener("click", () => {
  $myPage.style.backgroundImage = "url(../assets/icon-user-2.svg)";
  $myPage.style.color = "#21bf48";
  $myPageModal.style.display = "flex";
});

// document.addEventListener("click", () => {
//   $myPageModal.style.display = "none";
// });

async function getData() {
  try {
    const res = await fetch("https://openmarket.weniv.co.kr/products/");
    const json = await res.json();
    data = json.results;
    console.log(data);

    data.forEach((item) => {
      const $a = document.createElement("a");
      const $ul = document.createElement("ul");

      $a.className = "product--list";
      $ul.innerHTML = `
      <li><img src="${item.image}"></li>
      <li>${item.store_name}</li>
      <li>${item.product_name}</li>
      <li>${item.price}<span>원</span></li>
      `;

      $section.appendChild($a);
      $a.appendChild($ul);
    });
  } catch (error) {
    alert(error);
  }
}

getData();

const $section = document.querySelector(".cart--list");

async function getData() {
  try {
    const res = await fetch("https://openmarket.weniv.co.kr/products/");
    const json = await res.json();
    data = json.results;

    data.forEach((item) => {
      const $ul = document.createElement("ul");
      const $ul2 = document.createElement("ul");

      $ul.className = "cart--list__product";

      $ul.innerHTML = `
        <li><input type="radio" name="check" id="cart--totalCehck"></li>
        <li><img src="${item.image}">
          <ul>
            <li>${item.store_name}</li>
            <li>${item.product_name}</li>
            <li>${item.price}원</li>
            <li>택배배송 / 무료배송</li>
          </ul>
        </li>
        <li>
            <button type="button"></button>
            <p>1</p><button type="button"></button>
        </li>
        <li>
            <p class="cart--price">${item.price}원</p>
            <button type="submit">주문하기</button>
        </li>
        <li><button type="button"></button></li>
      `;

      $section.appendChild($ul);
    });
  } catch (error) {
    alert(error);
  }
}

getData();

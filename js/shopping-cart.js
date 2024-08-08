const $section = document.querySelector(".cart--list");

function countUp(event) {
  let countElem = event.target.previousElementSibling;
  let count = parseInt(countElem.textContent);
  count = count + 1;
  countElem.textContent = count;
}

function countDown(event) {
  let countElem = event.target.nextElementSibling;
  let count = parseInt(countElem.textContent);
  if (count > 0) {
    count = count - 1;
    countElem.textContent = count;
  }
}

function sumPrice(count) {
  let getPrice = document.querySelector(".cart--price").innerText;
  numPrice = getPrice.replace(/[^0-9]/g, "");

  return numPrice * count;
}
sumPrice(2);
console.log(numPrice, sumPrice(2));

async function getData() {
  try {
    const res = await fetch("https://openmarket.weniv.co.kr/products/");
    const json = await res.json();
    data = json.results;

    data.forEach((item) => {
      const $ul = document.createElement("ul");
      $ul.className = "cart--list__product";

      let price = item.price.toLocaleString("ko-KR");

      // count
      let count = 1;
      $ul.innerHTML = `
        <li><input type="radio" name="check" id="cart--totalCehck"></li>
        <li><img src="${item.image}">
          <ul>
            <li>${item.store_name}</li>
            <li>${item.product_name}</li>
            <li>${price}원</li>
            <li>택배배송 / 무료배송</li>
          </ul>
        </li>
        <li>
            <button type="button" class="countDown"></button>
            <p class="cart__count">${count}</p>
            <button type="button" class="countUp"></button>
        </li>
        <li>
            <p class="cart--price">${price}원</p>
            <button type="submit">주문하기</button>
        </li>
        <li><button type="button"></button></li>
      `;

      $section.appendChild($ul);

      $ul.querySelector(".countUp").addEventListener("click", countUp);
      $ul.querySelector(".countDown").addEventListener("click", countDown);
      sumPrice(count);
    });
  } catch (error) {
    alert(error);
  }
}

getData();

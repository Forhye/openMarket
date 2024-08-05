const $section = document.querySelector("section");

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

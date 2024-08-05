const $customerBtn = document.querySelector(".login--customer__abled");
const $sellerBtn = document.querySelector(".login--seller__disabled");

$customerBtn.addEventListener("click", () => {
  $sellerBtn.classList.remove("login--seller__abled");
  $sellerBtn.classList.add("login--seller__disabled");
  $customerBtn.classList.add("login--customer__abled");
  $customerBtn.classList.remove("login--customer__disabled");
});

$sellerBtn.addEventListener("click", () => {
  $sellerBtn.classList.add("login--seller__abled");
  $sellerBtn.classList.remove("login--seller__disabled");
  $customerBtn.classList.remove("login--customer__abled");
  $customerBtn.classList.add("login--customer__disabled");
});

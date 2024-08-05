const $loginBtn = document.querySelector("button");
const $inputId = document.querySelector("input#user--id");
const $inputPw = document.querySelector("input#user--pw");
const $buyerSelec = document.querySelector(".abled");

const username = $inputId.value;
const password = $inputPw.value;

let typeSeach = (e) => {
  if (e === "구매회원 로그인") {
    longinType = "BUYER";
  } else {
    longinType = "SELLER";
  }
};
typeSeach($buyerSelec.innerText);

console.log(longinType);

$loginBtn.addEventListener("click", () => {
  const login = async function (username, password, longinType) {
    try {
      const req = await fetch("https://openmarket.weniv.co.kr/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: username,
          Password: password,
          Login_type: longinType,
        }),
      });
    } catch (erro) {
      alert("로그인에 실패했습니다.");
    }
  };
});

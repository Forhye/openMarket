const $loginBtn = document.querySelector("button");
const $inputId = document.querySelector("input#user--id");
const $inputPw = document.querySelector("input#user--pw");
let loginType = "BUYER";
const $p = document.querySelector(".login__failed");

document.addEventListener("DOMContentLoaded", () => {
  const $selectedType = document.querySelectorAll(".login--type");

  for (const type of $selectedType) {
    type.addEventListener("click", () => {
      if (type.classList.contains("off")) {
        // 현재 요소의 클래스 토글
        type.classList.remove("off");
        type.classList.add("on");

        typeSeach(type.innerText);

        // 형제 요소의 클래스 토글
        for (const sibling of $selectedType) {
          if (sibling !== type) {
            sibling.classList.remove("on");
            sibling.classList.add("off");
          }
        }
      }
    });
  }
});

const typeSeach = (e) => {
  if (e === "구매회원 로그인") {
    loginType = "BUYER";
  } else {
    loginType = "SELLER";
  }
};

$loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  // form의 기본 제출을 막지 못해서 주소창에 자꾸 id랑pw가 떠서 기본 제출 동작을 막아줌
  const username = $inputId.value;
  const password = $inputPw.value;

  try {
    res = await fetch("https://openmarket.weniv.co.kr/accounts/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        login_type: loginType,
      }),
    });
    if (res.ok) {
      // response 가 200 = res.status === 200
      window.location.href = "product-list.html";
    } else {
      // todo
      // 비밀번호 입력창에 focus이벤트가 발생하고 빈칸이 됩니다.
      $p.style.display = "block";

      $inputPw.focus();
      $inputPw.value = null;
    }
  } catch (error) {
    console.error(error);
    alert("로그인에 실패했습니다.");
  }
});

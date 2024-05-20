// 커피 input
// 가격 input - 숫자 [1000 이상부터 가능]
//  -1000원 이상 입력해야합니다.

// 수량 input - 숫자 [1 ~ 10000 가능]
//  - 1~10000개수 여야합니다.

// 제출하기 button
// 3개 글자가 0이 아니여야 제출이 가능함

// 커피 재고 리스트
// 아메리카노 3000원 10000개
// 라떼 3500원 3000개

//맨 밑에 총 개수 : 13000개

// ============================================

const coffe = document.querySelector(".coffe");
const price = document.querySelector(".price");
const count = document.querySelector(".count");
const button = document.querySelector(".button");

const div = document.createElement("div");
document.body.append(div);

button.addEventListener("click", () => {
  const cv = coffe.value;
  const pi = price.value;
  const c = count.value;

  const isValidEmpty = !!cv.length && !!pi.length && !!c.length;
  const isValidPrice = 1000 <= Number(pi);
  const isValidAmount = 1 <= Number(c) && 10000 >= Number(c);

  if (!isValidEmpty) {
    div.style.backgroundColor = "red";
    div.innerText = "빈칸발견";
  } else if (!isValidAmount) {
    div.style.backgroundColor = "red";
    div.innerText = "커피의 수량 1보다 크고 10000보다 작음";
  } else if (!isValidPrice) {
    div.style.backgroundColor = "red";
    div.innerText = "가격은 1000원 이상";
  } else {
    let total_price = Number(pi) * Number(c);

    let value = "";
    value = `${cv} ${pi}원 ${c}개 \n 총 금액: ${total_price}원`;

    div.innerText = value;
  }
});

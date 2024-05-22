// 함수(기능) : [input -> output]

// 일반함수
// function 함수명 (매개변수){return 리턴값}
function mackCoffe(x) {
  return x + "완료되었습니다.";
}

// 제곱해서 돌려주기
function makeSaure(x) {
  return x ** 2;
}

// 화살표 함수
// () => {};

const makebread = (x) => {
  return x + "빵이 완료되었습니다.";
};

// 1. 어떤수를 입력하면 세제곱을 돌려주는 함수
const makeCube = (x) => x ** 3;

// 2. 대문자를 입력하면, 소문자 + '완료!'를 돌려주는 함수
const uper = (x) => x.toLowerCase() + "완료!";

// 3. 어떤 x를 입력하면, truethy 인지 falsy 인지 알려주는 함수
const true1 = (x) => (!!x ? "truethy" : "falsy");

// 4. x가 들어오면 body태그에 x의 innerText를 가진 버튼을 추가해주는 함수
const makeBtn = (x) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
};

// 5. 
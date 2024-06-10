//union[=or]

const user: string | number = "1";
const isLoggin: boolean | null = false;

const box: Element | null = document.querySelector(".box");

const newDiv: Element = document.createElement("div");

//개 - 푸들, 시바, 치와와, 시츄....
// Element - dix, section, input,button
const newDiv1: HTMLDivElement = document.createElement("div");

//커피 -> {name,price,shot} or {name,price,kacl}

const coffee:
  | { name: string; price: string; shot: number }
  | { name: string; price: string; kacl: number } = {
  name: "아아",
  price: "2000", // price should be a string
  shot: 3,
};

//interseection[=and] &
//never : 있을수가 없음
//unknown : 모름
//() => type : 함수 지정 타입

// Solid 원칙 => d:저수준 모듈 => 고수준 모듈 만드셈
//ex [타이어,엔진, 벨트, 시트] => 자동차

const happy: () => void = () => {
  return 1;
};

const person: { name: string } & { age: number } & { eat: () => void } = {
  name: "문자열",
  age: 20,
  eat() {
    console.log("밥꿀맛");
  },
};

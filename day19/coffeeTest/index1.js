const box = document.querySelector(".box");

const menus = [
  {
    name: "아메리카노",
    price: 3000,
  },
  {
    name: "라떼",
    price: 4000,
  },
  {
    name: "레몬에이드",
    price: 3500,
  },
];

const makeName = (name) => {
  const h3 = document.createElement("h3"); //h3 클래스 생성
  h3.innerText = name; // 커피의 이름을 h3에 넣어줌
  return h3;
};

const makePrice = (price) => {
  const h5 = document.createElement("h5");
  h5.innerText = price + "원";
  return h5;
};

const makebutton = (price) => {
  const btn = document.createElement("button");
  btn.innerText = "추가하기";
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    total.innerText = parseInt(total.innerText) + price + "원";
  });
  return btn;
};

const makeCoffee = (coffeeObj) => {
  const coffeeBox = document.createElement("div"); //div 만들어준다.
  
  coffeeBox.appendChild.forEach(v,i)
  coffeeBox.appendChild(makeName(coffeeObj.name)); //make 함수에 커피이름넣어준다.
  coffeeBox.appendChild(makePrice(coffeeObj.price)); // makePrice 함수에 커피가격넣어준다
  coffeeBox.appendChild(makebutton(coffeeObj.price)); // makebutton 함수에 커피가격의 버튼넣어준다

  document.querySelector(".menu").appendChild(coffeeBox); // menu div를 가져온다.
};

menus.forEach((v) => makeCoffee(v)); // 배열을 돌린다. 돌린 값은 makeCoffee 함수 매개변수

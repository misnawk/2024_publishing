const am = document.querySelector(".am");
const la = document.querySelector(".la");

const pulusAm = document.querySelector(".pulusAm");
const pulsLa = document.querySelector(".pulsLa");
const totalPrice = document.querySelector(".totalPrice");

// const menu = [
//   {
//     coffee: ["아메리카노", "라떼"],
//     price: [3000, 4000],
//   },
// ];

// 추가로 boolean 사용해서 아메리카노인지 라떼인지 오브젝트구분
// ex) 아메리카노 추가: total 얼마입니다.

let price = 0;
am.addEventListener("click", () => {
  update(3000);
});

la.addEventListener("click", () => {
  update(4000);
});

pulusAm.addEventListener("click", () => {
  update(3000);
});

pulsLa.addEventListener("click", () => {
  update(4000);
});

const update = (increment) => {
  price += increment;
//   if (istype == false)
    totalPrice.innerText = "총 금액은 : " + price + "원입니다.";
};


//
// 데이터 타입 : 기본[String, number, boolean, null, undefined]
// Array

// const colors = ["#b4b4b4", "#ffa500", "#ff0000"];
// colors.push("#ee82ee");
// colors.sort();

// colors.forEach((x) => {
//   const box = document.createElement("div");

//   box.style.width = "100px";
//   box.style.height = "100px";

//   box.style.backgroundColor = x;
//   document.body.appendChild(box);
// }); //한명씩 불러주셈

// const menu = ["americano", "latte", "mint", "vanlina", "milktea"];

// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

// const price = [2000, 3000, 5000, 3000, 4000, 6000];

// price.forEach((x) => {
//   if (x > 3000) {
//     console.log(`${x}원은 비싸네요`);
//   } else {
//     console.log(`${x}원은 싸네요`);
//   }
// });

// replace(a,b) [a를 b로 바꿔주세요]
// replaceAll(a,b) [모든 a를 b로]
// slice(a,b) [a부터 b-1] 까지 문자 짜르기

const option = ["100 blue", "200 green", "500 black", "400 red"];
// wh:100 bg:biue wh:200 bg:green

option.forEach((x) => {
  const a = x.split(" ");
  const length = a[0];
  const color = a[1];
  const box = document.createElement("div");
  box.style.width = `${length}px`;
  box.style.height = `${length}px`;
  box.style.backgroundColor = `${color}`;


  box.style.width = `${length}px`;
  box.style.height = `${length}px`;
  box.style.backgroundColor = `${color}`;



  box.style.width = `${length}px`;
  box.style.height = `${length}px`;
  box.style.backgroundColor = `${color}`;


  box.style.width = `${length}px`;
  box.style.height = `${length}px`;
  box.style.backgroundColor = `${color}`;
  document.body.appendChild(box);
});

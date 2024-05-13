// console.log("자바스크립트! 시작!");

// //미니퀴즈
// //자바스크립트 공부 다짐
// //오늘 점심 메뉴:

// console.log("질문많이하고 열심히 배우기");
// console.log("뼈다귀 해장국");

// window.alert("아무거나 써보자1");
// window.confirm("아무거나 써보자2");
// window.prompt("??");

// window.open("https://www.google.co.kr/?hl=ko");

//-----------------------------------------------------------
// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//   window.alert("메가 커피 짱짱");
// });

// document.body.appendChild(a);

// 화면에 버튼 태그를 만들고
// 안의 내용은 석사탄신일
// 클릭 click 을 하면 alert으로 부처님 오심 ㄹㅇ

// const a = document.createElement("button");
// a.innerText = "석가탄신일";
// a.addEventListener("click", () => {
//   window.alert("부처님 오심 ㄹㅇㄹㅇ");
// });
// document.body.appendChild(a);

//-----------------------------------------------------------
// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면, 라떼로 변화

// const a = document.createElement("button");
// a.innerText = "아메리카노";
// a.addEventListener("click", () => {
//   a.innerText = "라떼";
// });

// document.body.appendChild(a);

//-----------------------------------------------------------

// const b = window.prompt("무엇이든 물어보세요.");
// console.log(b);

// 첫번째 prompt 버튼 전의 이름
// 두번째 prompt 버튼 클릭 후 이름
// 클릭전 이름 버튼 만들고, 클릭하면 두번째 클릭 이름으로 바뀜

// const a = window.prompt("변경전");
// const b = window.prompt("변경후");

// const button = document.createElement("button");
// button.innerText = a;

// document.body.appendChild(button);

// button.addEventListener("click", () => {
//   button.innerText = b;
// });

//-----------------------------------------------------------
// const a = document.createElement("div");
// a.innerHTML = "<button>코리아 아이디</button>";
// document.body.appendChild(a);

//-----------------------------------------------------------

// button 태그 만들고, 배경색 하늘색, 폰트사이즈 20px,
// 클릭을 하면, 빨간색으로 바뀌는 퀴즈

// const button = document.createElement("button");
// button.innerText = "버튼";
// button.style.background = "skyblue";
// button.style.fontSize = "20px";

// button.addEventListener("click", () => {
//   button.style.background = "red";
// });

// document.body.appendChild(button);

//-----------------------------------------------------------
// 버튼이 5개 있음, 빨,주,노,초,파 있음
// 모두 CSS를 배경색은 각각 해당 색으로 바꾸고, text는 빨,주,노,초,파
// div 태그가 w:100, h:100, border:1px, solid black 있는데
//여기서 위의 5개의 버튼중 하나를 누르면 div의 background가 해당색으로 바뀌는 프로그램

// const div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "120px";
// div.style.border = "1px solid black";

// const btn_red = document.createElement("button");
// btn_red.innerText = "빨강색";
// btn_red.style.background = "red";
// div.appendChild(btn_red);

// const btn_Orange = document.createElement("button");
// btn_Orange.innerText = "주황색";
// btn_Orange.style.background = "orange";
// div.appendChild(btn_Orange);

// const btn_yellow = document.createElement("button");
// btn_yellow.innerText = "노란색";
// btn_yellow.style.background = "yellow";
// div.appendChild(btn_yellow);

// const btn_green = document.createElement("button");
// btn_green.innerText = "초록색";
// btn_green.style.background = "green";
// div.appendChild(btn_green);

// const btn_blue = document.createElement("button");
// btn_blue.innerText = "파랑색";
// btn_blue.style.background = "blue";
// div.appendChild(btn_blue);

// btn_red.addEventListener("click", () => {
//   div.style.background = "red";
// });

// btn_Orange.addEventListener("click", () => {
//   div.style.background = "orange";
// });

// btn_yellow.addEventListener("click", () => {
//   div.style.background = "yellow";
// });

// btn_green.addEventListener("click", () => {
//   div.style.background = "green";
// });

// btn_blue.addEventListener("click", () => {
//   div.style.background = "blue";
// });

// document.body.appendChild(div);

//-----------------------------------------------------------

const div = document.createElement("div");
div.style.cssText = "width: 100px; height: 120px; border: 1px solid black;";

["red", "orange", "yellow", "green", "blue"].forEach((color) => {
  const btn = document.createElement("button");
  btn.innerText = color;
  btn.style.background = color;
  btn.style.display = "flex";
  // btn.style.background = color.toLowerCase();
  btn.addEventListener("click", () => {
    div.style.background = color.toLowerCase();
  });
  div.appendChild(btn);
});

document.body.appendChild(div);

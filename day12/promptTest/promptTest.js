// const name = window.prompt("당신의 이름을 입력하세요");
// const age = window.prompt("당신의 나이를 입력하세요");
// const color = window.prompt("당신이 좋아하는 색을 입력하세요");

// console.log(
//   `제 이름은 ${name} 이고 나이는 ${age} 살이고, 좋아하는색은 ${color}입니다!`
// );

//================================================================================

// const date = window.prompt("오늘 날짜를 입력하세요");
// const plan = window.prompt("오늘 계획을 입력하세요");

// console.log(`오늘은 ${date}, 계획하는 일정은 ${plan} 입니다.`);

//================================================================================

// const button = document.createElement("button");
// const buttonText = window.prompt("버튼글자");
// button.innerText = `입력한 내용: ${buttonText}`;
// document.body.appendChild(button);

//================================================================================

// 유저에게 세번의 promt로 헥사코드 색깔을 입력을 받고
// 버튼 3개를 만들고(text: 헥사코드, bg: 헥사코드)
// 박스 하나 만들고 (w:100, h:100, gb:선택된 버튼의 헥사코드, text:입력된 헥사코드[])

const color1 = window.prompt("색입력1");
const color2 = window.prompt("색입력2");
const color3 = window.prompt("색입력3");
/////////////////////////////////////////////////
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

button1.style.backgroundColor = color1;
button2.style.backgroundColor = color2;
button3.style.backgroundColor = color3;

button1.innerText = color1;
button2.innerText = color2;
button3.innerText = color3;
//////////////////////////////////////////////////
const div = document.createElement("div");
div.style.width = "200px";
div.style.height = "100px";
div.style.border = "1px solid black";


// #3498db
// #f1c40f
// #e74c3c

//////////////////////////////////////////////////
button1.addEventListener("click", () => {
  div.style.backgroundColor = color1;
  div.innerText = `선택된 색상: ${color1}`;
});

button2.addEventListener("click", () => {
  div.style.backgroundColor = color2;
  div.innerText = `선택된 색상: ${color2}`;
});

button3.addEventListener("click", () => {
  div.style.backgroundColor = color3;
  div.innerText = `선택된 색상: ${color3}`;
});
//////////////////////////////////////////////////

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);

document.body.appendChild(div);

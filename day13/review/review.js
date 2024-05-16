// input : window.prompt
// puput : html

// 1번문제. 유저에게 밑변과 높이를 입력을 받고 정삼각형의 넓이 나타내기
// 2번문제. 한국 돈 원을 입력하면 엔화로 바꿔주기

const a = Number(window.prompt("밑변"));
const b = Number(window.prompt("높이"));
const result1 = (a * b) / 2;

const div = document.createElement(`div`);
div.innerText = `삼각형의 넓이 : ${result1}`;

//==================================================================

const money = Number(window.prompt("원"));
const result2 = money * 876;

const div1 = document.createElement(`div`);
div1.innerText = `엔 : ${result2}`;

document.body.appendChild(div);
document.body.appendChild(div1);

//==================================================================


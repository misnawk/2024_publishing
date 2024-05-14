//데이터 타입 : 기본 + 참조
// 기본: String[문자], number[숫자]

// const a = window.prompt("숫자 입력");
// //문자 -> 숫자 타입 바꾸기
// // 1.number

// const b = Number(a);
// console.log(b + 10);

// //2. parseInt(), parseFloat() 문자타입만 넣었을때 유효
// const c = parseInt(a);
// console.log(c + 20);

//========================================================

const a = window.prompt("숫자 입력1");
const a1 = Number(a);

const b = window.prompt("숫자 입력2");
const b1 = Number(b);

const div1 = document.createElement(`div`);

const plus = a1 + b1;
const minus = a1 - b1;
const mul = a1 * b1;

const result1 = `첫 번째 숫자는 ${a1}, 두 번째 숫자는 ${b1}, 연산은 ${plus}, ${minus}, ${mul}`;
div1.innerText = result1;
document.body.appendChild(div1);

//========================================================

const age = Number(window.prompt("나이 입력"));

const div2 = document.createElement(`div`);

const date = 2024 - age;

const result2 = `출생년도는 ${date}년도 입니다.`;
div2.innerText = result2;
document.body.appendChild(div2);

//========================================================
const length = window.prompt("한변의 길이");
const length1 = Number(length);
const div3 = document.createElement(`div`);

const Width = length1 * 4;

const result3 = `넓이는 ${Width}입니다.`;

div3.innerText = result3;
document.body.appendChild(div3);

//========================================================

const minute = window.prompt("분 입력");
const minute1 = Number(minute);
const div4 = document.createElement(`div`);

const x = minute1 / 60;
const y = minute1 % 60;

const result4 = `프로그램은 ${x}분 ${y}초입니다.`;
div4.innerText = result4;
document.body.appendChild(div4);

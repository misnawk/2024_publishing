// if 조건문
// if(조건식)

//======================================================================================

// const age = Number(window.prompt("몇?"));

// if (age > 19) {
//   console.log("성인");
// } else {
//   console.log("미성년자");
// }
// console.log("프로그램 끝");

//======================================================================================

// prompt로 두개의 숫자를 입력 받고
// 큰 수를 콘솔로 출력하기
// const num1 = Number(window.prompt("몇1?"));
// const num2 = Number(window.prompt("몇2?"));

// if (num1 > num2) {
//   console.log(`${num1}`);
// } else {
//   console.log(`${num2}`);
// }
// console.log(`프로그램 끝`);

//======================================================================================

// const age = 15;

// if (age > 19) {
//   console.log("성인입니다.");
// } else if (19 >= age && age > 16) {
//   console.log("고딩");
// } else if (age >= 16 && age > 13) {
//   console.log("중딩");
// } else {
//   console.log("잼민이");
// }

//======================================================================================

// 하나의 정수를 입력받고, 양수인지 음수인지 0인지 확인
// const num = Number(window.prompt("몇?"));
// if (num > 0) {
//   console.log("양수입니다.");
// } else if (num < 0) {
//   console.log("음수입니다.");
// } else if (num === 0) {
//   console.log("0입니다.");
// }

//======================================================================================

// 수학 점수를 입력받고, 90이상 'A', 80이상 'B', 70이상 'C', 아니면 'D'
// const score = Number(window.prompt("몇?"));
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else {
//   console.log("D");
// }

//======================================================================================

// 숫자 입력, 양의 홀수, 양의 짝수, 음의홀수, 음의 짝수, 0인지
// const num1 = Number(window.prompt("몇?"));
// if (num1 % 2 === 1 && num1 > 0) {
//   console.log("양의 홀수");
// } else if (num1 % 2 === 0 && num1 > 0) {
//   console.log("양의 짝수");
// } else if (num1 % 2 === 1 && num1 < 0) {
//   console.log("음의 홀수");
// } else if (num1 % 2 === 0 && num1 < 0) {
//   console.log("음의 짝수");
// } else {
//   console.log("0");
// }

const num2 = Number(window.prompt("몇?"));
const isPositive = num2 > 0;
const isNegative = num2 < 0;
const isOdd = num2 % 2 === 1;
const isEven = num2 % 2 === 0;

if (isPositive && isOdd) {
  console.log("양의 홀수");
} else if (isPositive && isEven) {
  console.log("양의 짝수");
} else if (isNegative && isOdd) {
  console.log("음의 홀수");
} else if (isNegative && isEven) {
  console.log("음의 짝수");
} else {
  console.log("0");
}

// const age = 10;
// if (age > 7) {
//   if (age > 13) {
//     console.log("청소년");
//   } else {
//     console("유소년");
//   }
// }

// switch


const input = document.querySelector(".input");

// input에서 확인 버튼을 눌렀을 때,
// 8글자 이하이면 글자 수가 짧습니다. [빨간색] 나오고
// 아니면 글자 수가 충분합니다[파란색] 나오기.

// const button = document.querySelector(".button");
// const div = document.createElement("div");

// button.addEventListener("click", () => {
//   if (input.value.length <= 8) {
//     div.innerText = "글자수가 짧습니다.";
//     div.style.color = "red";
//   } else {
//     div.innerText = "글자수가 충분합니다.";
//     div.style.color = "blue";
//   }

//   document.body.appendChild(div);
// });

//=============================================================

// 8 ~ 20 글자 사이이고, 반드시 !, #, $ 하나라도 포함해야하고,
// 글자 시작을 'IT'하면, 올바르게 문자를 설정했습니다.[파랑]
// 아니면 문자를 다시 설정하세요.[빨강]

// const button = document.querySelector(".button");
// const div = document.createElement("div");
// document.body.appendChild(div);
// button.addEventListener("click", () => {
//   if (
//     (input.value.length >= 8 &&
//       input.value.length <= 20 &&
//       input.value.startsWith("IT") &&
//       input.value.includes("!")) ||
//     input.value.includes("#") ||
//     input.value.includes("$")
//   ) {
//     div.innerText = " 올바르게 문자를 설정했습니다.";
//     div.style.color = "blue";
//   } else {
//     div.innerText = " 문자를 다시 설정하세요.";
//     div.style.color = "red";
//   }
// });

//=======================================

// const button = document.querySelector(".button");
// const div = document.createElement("div");
// document.body.appendChild(div);

// button.addEventListener("click", () => {
//   if (
//     (input.value.length >= 8 &&
//       input.value.length <= 20 &&
//       input.value.startsWith("IT") &&
//       input.value.includes("!")) ||
//     input.value.includes("#") ||
//     input.value.includes("$")
//   ) {
//     div.innerText = " 올바르게 문자를 설정했습니다.";
//     div.style.color = "blue";
//   } else {
//     if (!input.value.startsWith("IT")) {
//       div.innerText = " 첫 시작이 IT가 아님";
//       div.style.color = "red";
//     } else if (input.value.length < 8) {
//       div.innerText = " 글자수가 8글자 미만.";
//       div.style.color = "red";
//     } else if (
//       !input.value.includes("!") ||
//       !input.value.includes("#") ||
//       !input.value.includes("$")
//     ) {
//       div.innerText = "글자에 기호 미포함";
//       div.style.color = "red";
//     }
//   }
// });

//=======================================

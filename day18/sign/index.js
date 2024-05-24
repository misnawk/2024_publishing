const email_input = document.querySelector(".email");
const password_input = document.querySelector(".password");
const checkPassword_input = document.querySelector(".checkPassword");
const loginBtn = document.querySelector(".loginBtn");

const icon2 = document.querySelector(".icon2");
const icon3 = document.querySelector(".icon3");

let isEmail_input;
let isPassword_input;
let ischeckPassword_input;

const info = [
  {
    email: ["@naver", "@daum", "@kakao", "@gmail"],
    password: ["!", "@", "#", "$", "%", "^", "&", "*"],
    passCheck: ["!", "@", "#", "$", "%", "^", "&", "*"],
  },
];

email_input.addEventListener("input", (e) => {
  isincluds = info.email.forEach((v) => {
    e.target.value == v.includs();
  });

  console.log(email_input.value);

  // console.log(e.target.value);
});

// email_input.addEvenLtistener("input", (e) =>{
// eamilArry = ["@naver.com", "@daum.com", "@kokao.com", "@gmail.com"];

// eamilArry.forEach((v) => {
//   isEmail_input = e.target.value == v.includes; ***************
//   });

//   //양식 다지키면 true

//   isEmail_input && isPassword_input && ischeckPassword_input && isEmail_input
//     ? (loginBtn.style.backgroundColor = "gray")
//     : (loginBtn.style.backgroundColor = "white");

//   //isEmail_input,  isPassword_input, ischeckPassword_input, isEmail_input 모두 참이면 버튼 색상변경
// });

// password_input.addEventListener("input", (e) => {
//   const passwordArrry = ["!", "@", "#", "$", "%", "^", "&", "*"];

//   isPassword_input =
//     e.target.value.length >= 8 && passwordArrry.some((v) => e.target.value);

//   isEmail_input && isPassword_input && ischeckPassword_input
//     ? (loginBtn.style.backgroundColor = "gray")
//     : (loginBtn.style.backgroundColor = "white");
// });

// checkPassword_input.addEventListener("input", (e) => {
//   ischeckPassword_input = password_input.value == e.target.value;

//   isEmail_input && isPassword_input && ischeckPassword_input
//     ? (loginBtn.style.backgroundColor = "gray")
//     : (loginBtn.style.backgroundColor = "white");
// });

// const totalcheck = () => {
//   isEmail_input && isPassword_input && ischeckPassword_input
//     ? (loginBtn.style.backgroundColor = "gray")
//     : (loginBtn.style.backgroundColor = "white");
// };

// icon2.addEventListener("click", () => {
//   password_input.type = password_input.type === "text" ? "password" : "text";
// });

// icon3.addEventListener("click", () => {
//   checkPassword_input.type =
//     checkPassword_input.type === "text" ? "password" : "text";
// });

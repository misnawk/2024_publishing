// console.log(1);
// console.log(3);
// console.log(4);

//비동기 [데이터가져오기, 지도위치가져오기, 시간초재기]
// 1초뒤에 실행
setTimeout(() => {}, 1000);

//=======================================================================

//1초마다 실행
setInterval(() => {
  //   console.log("오늘은 목요일");
}, 1000);

// let count = 0;
// let v = setInterval(() => {
const box = document.querySelector(".box");
//   count;
//   box.innerHTML = count;
//   count++;
// }, 1000);

// const box = document.querySelector(".box");

//=======================================================================

// 1.지금 몇년 몇월 몇일 무슨요일인지 html에 나타내기

// now.toDateString;

let a = setInterval(() => {
  const box = document.querySelector(".box");
  const day1 = ["일", "월", "화", "수", "목", "금", "토"];

  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  `지금은 ${year}년 ${month}월 ${date}일 ${day1[day]}요일 입니다. `;
}, 1000);

//2. 현재 시간을 기준으로 "오전/오후 시:분:초" 형식으로 HTML에 나타내기
// const new1 =
//   hours < 12
//     ? `오전 ${hours}시${minutes}분${seconds}초`
//     : `오후 ${hours}시${minutes}분${seconds}초`;
// box.innerText += new1;
// console.log(new1);

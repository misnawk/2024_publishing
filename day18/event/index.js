// 참조 타입 :
// 프로그래밍 타입 ) Array, object, Function
// HTML에서 가져온 타입 ) Element, event

const input = document.querySelector(".input");
// input.addEventListener("input", (e) => {
//   e.target.value.length > 10
//     ? (input.style.color = "red")
//     : (input.style.color = "black");
// });

input.addEventListener("input", (e) => {
  e.target.value =
    e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
  //10보다 크면 짤라서 보여준다. 데이터는 계속 받는상태
});
//maxlength="10" inoput의 최대길이 지정

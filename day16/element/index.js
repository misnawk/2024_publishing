// 기본타입 : String, number, boolean, null, undefined
// 참조타입 : array, element

const divTag = document.createElement("div");

// divTag.appendChild() 자식 태그 추가하기
// divTag.removeChild() 자식에 해당 태그 지우기

// divTag.style //직접 CSS관여
// divTag.classList // 클래스 리스트 보기

// divTag.classList.add("red"); 클래스 리스트에 red 추가
// divTag.classList.remove("red"); 클래스 리스트에 red 삭제
// divTag.classList.toggle("red"); 클래스 리스트에 red가 있으면 삭제 없으면 추가

//=============================================================================

//늘리기 나오면 200 200 줄이기 나오고 누르면 100 100

//빨강색 누르면 빨강으로 변하고 파랑나오게

const divTag1 = document.querySelector(".box");
const size = document.querySelector(".size");
const color = document.querySelector(".color");
const borderBtn = document.querySelector(".borderBtn");
size.classList.toggle("hidden");


size.addEventListener("click", (v) => {
  size.innerText = size.innerText == "늘림" ? "줄임" : "늘림";
  divTag1.classList.toggle("medium");
  divTag1.classList.toggle("large");
});

color.addEventListener("click", (v) => {
  color.innerText = color.innerText == "빨강" ? "파랑" : "빨강";
  divTag1.classList.toggle("red");
  divTag1.classList.toggle("blue");
});

borderBtn.addEventListener("click", (v) => {
  borderBtn.innerText = borderBtn.innerText == "둥글" ? "직각" : "둥글";
  divTag1.classList.toggle("borderRadius");
});

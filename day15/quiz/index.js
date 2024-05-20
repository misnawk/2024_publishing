const menu_arry = [];
// 메뉴를 넣고 제출 버튼을 누르면
// menu에 글이 누적되면서 추가됩니다.

const food = document.querySelector(".food");
const button = document.querySelector(".button");
const menu = document.querySelector(".menu");
menu.style.display = "flex";

button.addEventListener("click", () => {
  const food_Val = food.value;

  menu_arry.push(food_Val);

  menu.innerText = menu_arry.join("\n");
});

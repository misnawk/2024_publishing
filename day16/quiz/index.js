// 색 다섯개
// 사이즈 다섯새
// 테두리 사이즈 3개

const box = document.querySelector(".box");
const colorBtn1 = document.querySelector(".colorBtn1");
const colorBtn2 = document.querySelector(".colorBtn2");
const colorBtn3 = document.querySelector(".colorBtn3");
const colorBtn4 = document.querySelector(".colorBtn4");
const colorBtn5 = document.querySelector(".colorBtn5");

const sizeBtn1 = document.querySelector(".sizeBtn1");
const sizeBtn2 = document.querySelector(".sizeBtn2");
const sizeBtn3 = document.querySelector(".sizeBtn3");
const sizeBtn4 = document.querySelector(".sizeBtn4");
const sizeBtn5 = document.querySelector(".sizeBtn5");

const shapeBtn1 = document.querySelector(".shapeBtn1");
const shapeBtn2 = document.querySelector(".shapeBtn2");
const shapeBtn3 = document.querySelector(".shapeBtn3");

//======================================== 색
colors = ["red", "orange", "yellow", "green", "pink"];

colorBtn1.addEventListener("click", () => {
  b = colors[0];
  box.classList.add(b);
  box.classList.remove("orange", "yellow", "green", "pink");
});

colorBtn2.addEventListener("click", () => {
  b = colors[1];
  box.classList.add(b);
  box.classList.remove("red", "yellow", "green", "pink");
});

colorBtn3.addEventListener("click", () => {
  b = colors[2];
  box.classList.add(b);
  box.classList.remove("orange", "red", "green", "pink");
});

colorBtn4.addEventListener("click", () => {
  b = colors[3];
  box.classList.add(b);
  box.classList.remove("orange", "red", "pink", "yellow");
});

colorBtn5.addEventListener("click", () => {
  b = colors[4];
  box.classList.add(b);
  box.classList.remove("orange", "red", "yellow", "green");
});

//======================================== 사이즈
sizs = ["size_100", "size_200", "size_300", "size_400", "size_500"];

sizeBtn1.addEventListener("click", () => {
  b = sizs[0];
  box.classList.add(b);
  box.classList.remove("size_200", "size_300", "size_400", "size_500");
});

sizeBtn2.addEventListener("click", () => {
  b = sizs[1];
  box.classList.add(b);
  box.classList.remove("size_100", "size_300", "size_400", "size_500");
});

sizeBtn3.addEventListener("click", () => {
  b = sizs[2];
  box.classList.add(b);
  box.classList.remove("size_200", "size_100", "size_400", "size_500");
});

sizeBtn4.addEventListener("click", () => {
  b = sizs[3];
  box.classList.add(b);
  box.classList.remove("size_200", "size_300", "size_100", "size_500");
});

sizeBtn5.addEventListener("click", () => {
  b = sizs[4];
  box.classList.add(b);
  box.classList.remove("size_200", "size_300", "size_400", "size_100");
});

//=================================================================== 둥글
radius = ["radius_10", "radius_30", "radius_100"];

shapeBtn1.addEventListener("click", () => {
  b = radius[0];
  box.classList.add(b);
  box.classList.remove("radius_30", "radius_100");
});

shapeBtn2.addEventListener("click", () => {
  b = radius[1];
  box.classList.add(b);
  box.classList.remove("radius_100", "radius_10");
});

shapeBtn3.addEventListener("click", () => {
  b = radius[2];
  box.classList.add(b);
  box.classList.remove("radius_10", "radius_30");
});

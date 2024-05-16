// 색상 버튼 3개 임의의로 만들기
// 파레트 상자 하나 만들기
// -, + 버튼 만들기

const box = document.createElement(`div`);
box.style.margin = "100px 100px 0px 100px";
box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid black";

const content = document.createElement(`div`);
content.style.margin = "0px 100px";
content.style.display = "flex";
content.style.width = "1000px";
content.style.height = "100px";

const color1 = document.createElement(`button`);
color1.style.width = "50px";
color1.style.height = "50px";
color1.style.backgroundColor = "#3cb371";
color1.innerText = "#3cb371";

const color2 = document.createElement(`button`);
color2.style.width = "50px";
color2.style.height = "50px";
color2.style.backgroundColor = "#ee82ee";
color2.innerText = "#ee82ee";

const color3 = document.createElement(`button`);
color3.style.width = "50px";
color3.style.height = "50px";
color3.style.backgroundColor = "#ffa500";
color3.innerText = "#ffa500";

const oper1 = document.createElement(`button`);
oper1.style.width = "50px";
oper1.style.height = "50px";
oper1.innerText = "+";

const oper2 = document.createElement(`button`);
oper2.style.width = "50px";
oper2.style.height = "50px";
oper2.innerText = "-";

color1.addEventListener("click", () => {
  box.style.backgroundColor = "#3cb371";
  box.innerText = "#3cb371";
});

color2.addEventListener("click", () => {
  box.style.backgroundColor = "#ee82ee";
  box.innerText = "#ee82ee";
});

color3.addEventListener("click", () => {
  box.style.backgroundColor = "#ffa500";
  box.innerText = "#ffa500";
});

oper1.addEventListener("click", () => {
  const length = parseInt(box.style.width) + 1;
  box.style.width = `${length}px`;
  box.style.height = `${length}px`;
});

oper2.addEventListener("click", () => {
  const length = parseInt(box.style.width) - 1;
  const isLength99 = length === 99;
  box.style.width = isLength99 ? "100px" : `${length}px`;
  box.style.height = isLength99 ? "100px" : `${length}px`;
});

document.body.appendChild(box);
document.body.appendChild(content);

content.appendChild(color1);
content.appendChild(color2);
content.appendChild(color3);

content.appendChild(oper1);
content.appendChild(oper2);

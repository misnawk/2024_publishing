const div = document.createElement("div");
//====================================================

const button = document.createElement("button");
button.innerText = "-";
//====================================================

const span = document.createElement("span");
span.style.fontSize = "100px";
let count = 0;
span.innerText = `${count}`;
//====================================================

const button1 = document.createElement("button");
button1.innerText = "+";
//====================================================

div.appendChild(button);
div.appendChild(span);
div.appendChild(button1);

document.body.appendChild(div);
//====================================================

button.addEventListener("click", () => {
  const num = (count += -1);
  const is = count < 0;
  span.innerText = count ? 0 : num;
});
//====================================================

button1.addEventListener("click", () => {
  console.log("더함");
  count += 1;
  span.innerText = `${count}`;
});
//====================================================

//====================================================================

//result.innerText = Number(result.innerText) -1;
//result.innerText = Number(result.innerText) +1;

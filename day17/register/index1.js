const optionsClassList = [
  {
    className: ".option1",
    ischeckde: false,
    msg: "[필수]서비스 이용약관",
  },
  {
    className: ".option2",
    ischeckde: false,
    msg: "[필수]개인정보 수집 동의",
  },
  {
    className: ".option3",
    ischeckde: false,
    msg: "[선택]마케팅 활용 동의",
  },
  {
    className: ".option4",
    ischeckde: false,
    msg: "[선택]광고성 정보 수신 이용약관",
  },
];

optionsClassList.forEach((v, i) => {
  // i 를 받는 이유는 순서를 알아먹기위해 순서로 옵션들을 구분할 수 있다. 

  
  const newDiv = document.createElement("div");
  newDiv.innerText = v.msg;
  newDiv.classList.add(v.className); // 클래스를 붙여주었다.
  newDiv.classList.add(v.ischecked ? "checked" : "notChecked");

  newDiv.addEventListener("click", () => {
    newDiv.classList.toggle("checked");
    newDiv.classList.toggle("notChecked");
    optionsClassList[i].ischecked = newDiv.classList.contains("checked"); // checked 포함하니?

    const btn = document.querySelector(".button");
    optionsClassList.every((v) => {
      return v.ischecked
        ? btn.classList.add("passed")
        : btn.classList.remove("passed");
    });
  });
  const optionList = document.querySelector(".optionList");
  optionList.appendChild(newDiv);
});

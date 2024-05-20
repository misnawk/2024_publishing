const fruits = ["strawberry", "orange", "apple", "banana", "melon", "durian"];

// 1. a가 포함되어있으면 대문자화 시키고, 아니면 `` 출력하기
console.log("1번쨰");
fruits.forEach((v) => {
  if (v.includes(`a`)) {
    console.log(v.toUpperCase());
  } else {
    console.log(`🤢`);
  }
});

// 2. b가 포함되어 있으면 b기준으로 단어를 쪼개서 배열화하고, 아니면 `🤢` 출력하기
console.log("2번쨰");
fruits.forEach((v) => {
  if (v.includes(`b`) == true) {
    console.log(v.split(`b`));
  } else {
    console.log(`🤢`);
  }
});
// 3. m이 포함돠어있으면 기존에 있던 단어들을 결합해서 최종 단어 보여주기

console.log("3번쨰");
let a = "";
fruits.forEach((v) => {
  a += v;
  if (v.includes(`m`)) {
    console.log(a);
  }
});

// 4. 문자의 길이가 6글자 이상이면 알파벳 a를 k로 바꿔서 출력하고 ,아니면 대문자화해서 출력하기
console.log("4번쨰");
fruits.forEach((v) => {
  if (v.length >= 6) {
    console.log(v.replace(`a`, `k`));
  } else {
    console.log(v.toUpperCase());
  }
});

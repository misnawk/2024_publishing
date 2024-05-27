// type casting : Number(),String, Boolean

//String -> Array

const coffee = "americano";

//1.split(""),Array.from() ...[전개 구문]
const a1 = coffee.split("");
const a2 = Array.from(coffee);
const a3 = [...coffee];

// aieou제거해서 출력하기

//filter(v) 하면 americano 나옴
//v에서 v1이 하나라도 있다면 거짓
const a4 = [...coffee].filter((v) => ![..."aieou"].some((v1) => v1 == v));
console.log(a4);

// const a5_1 = Array(10)
//   .fill(0)
//   .map((v, i) => i + 1);
// 결과는?

// v가 e면 대문자로 바꿔주고 아니면 그냥 v출력
const a5 = [...coffee].map((v) => (v == "e" ? v.toUpperCase() : v));
console.log(a5);

//Array -> String
const fruits = ["apple", "banana", "orange"];

//join(""),toString
const b1 = fruits.join(""); //applebananorange
const b2 = fruits.toString(); //apple,banana,orange

// a를 빠진 과일들
const a6 = fruits.map((v) => [...v].filter((v1) => v1 != "a").join(""));
console.log(a6);

// 모든 철자 풀어주기
const a7 = fruits.map((v) => [...v]).flat();
const a7_1 = [...fruits.join("")];
console.log(a7);
console.log(a7_1);

//reduce[누적시키다.] acc[누적된값],curr[현재]
[1, 3, 5, 7, 9].reduce((a, c) => {
  console.log(`a: ${a} c: ${c}`);
  return a + c;
});

const a = Array(10)
  .fill(0)
  .map((v, i) => i + 1)
  .reduce((a, c) => a + c);
console.log(a);
//[1~10] 홀수는 더하고 짝수는 빼기의 합

const b = Array(10)
  .fill(0)
  // 2의 배수면 1더해주고 -붙여줌 2의 배수가 아니면 그냥 1더해줌
  .map((v, i) => (i % 2 ? -(i + 1) : i + 1))

  .reduce((a, c) => a + c, 0);

//  [(1, -2, 3, -4, 5, -6, 7, -8, 9, -10)]
console.log(b);

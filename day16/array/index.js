// 데이터 타입 : 기본 + 참조
// 기본 : bumber, string, null, undefined, boolean
// 참조 : array

// str = String() or "" or '' or +
// number = number() or 123123 or +
// boolean = boolean() or true or !
//Array = Array() or []

const fruits = ["apple", "banana", "orange", "kiwi"];

// 인덱스
// fruits[0];
// fruits[1];

// 추가 및 갱신
// fruits.push("grape");
// fruits[0] = "mango";

// 삭제
// fruits.pop();  맨뒤에 삭제
// delete fruits[1];  banana 삭제

// 가공하는 기능
// 1. 변형 - push, pop, reverse, shift[맨앞에 짜르기], sort
// 2. 접근자 - index[몇번째인지], slice[짜르고 새로운 배열로 주기]
// 3. 반복[(v)=>{v}] - forEach, map

const num = [-1, 5, -2, 56, 7, 3, 4, 345];

// 요소 바꾸기
// const newArr = num.map((v) => v + 10); // 한줄 일때만 가능
// console.log(newArr);

// const newArr1 = num.map((v) => v - 100);
// console.log(newArr1);

// const newArr2 = num.map((v) => v ** 2);
// console.log(newArr2);

// const newArr3 = num.map((v) => (v % 2 == 0 ? v + 100 : v ** 2));
// console.log(newArr3);

// const fr = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : "iceCream"));

// console.log(fr);

//======================================================================
const num1 = [-1, 5, -2, 56, 7, 3, 4, 345];
const fruits1 = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "mango",
  "durian",
  "strawberry",
  "melon",
  "waterm",
];

// const num1Arry = num1.filter((v) => v % 2 == 0);
// console.log(num1Arry);

// const fr = fruits.filter((v) => v.length == 6);

// console.log(fr);

// 알파벳 i 가 들어가 있으면 제거하고, 제거 후 단어의 문자의 길이로 치환
//메서드 체이닝
const ap = fruits1.filter((v) => !v.includes("i")).map((v) => this.length);

const ap1 = fruits1.map((v) => this.length);
console.log(ap);
// map 바꾸기
// filter는 거르기

// every && some
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//every
const every1 = arr3.every((v) => {
  return v > 0;
});
console.log(`every1 : ${every1}`);

//some
const some1 = arr3.some((v) => {
  return v >= 10;
});
console.log(`some1 : ${some1}`);

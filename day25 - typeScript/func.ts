function add(x: number, y: number): number {
  return x + y;
}

const r = add(4, 3);
console.log(r); //따로 이것의 결과만 출력가능? / 안됨

// truty or falsy 해주는 함수 (String) =>boolean
function makeBoolean(x: string): boolean {
  return !!x;
}

// 마이너스를 해주는 함수
const minus = (x: number, y: number): number => x - y;
console.log(minus(10, 5));

//1. 태어난 년도로 띠 알아보기
// 사용자에게 태어난 년도를 입력받아 그 해에 해당하는 띠를 알려주는 기능을 구현하려고 합니다.
// 12간지(띠)를 사용하여 태어난 년도를 입력하면 그 해의 띠를 반환하는 함수를 작성하세요

const makeZodiac = (year: number): String => {
  const zodiac = [
    "원숭이",
    "닭",
    "개",
    "돼지",
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
  ];

  const animal = zodiac[year % 12];
  return animal + "띠";
};
const zodiac = 12;
console.log(makeZodiac(zodiac));

//2. 숫자 뒤집기
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태 돌려주는 soultion 함수를 만들자
// 예를 들어 n이 12345면 [5,4,3,2,1]을 리턴합니다.

function soultion(num: number): number[] {
  const numStr = num.toString();
  const numArray = numStr.split("");
  const reversed = numArray.reverse();
  const Numreversed = reversed.map((v) => parseInt(v, 10));

  return Numreversed;
}

const inputNum = 12345;
console.log(soultion(inputNum));

//3. 짝수는 싫어요
// 정수 n이 매개변수로 주어질 떄, n이하의 홀수가 오름차순으로 담긴 배열을 return하도록 soultion함수를 완성하자
let resultArray: number[] = [];

const hateEven = (
  n: number
): Number[] => //n매개변수를 받고 타입은 number 결과물은 number 타입의 배열
  Array(n + 1) //15를 입력받으면 0~14가됨 그래서 +1 해서 1~15해줌
    .fill(0) //배열안의 공간을 0으로 가득채움
    .map((_, i) => i) // 인덱스 를 값으로 대입시켜줌
    .filter((v) => v % 2);

console.log("3번문제" + hateEven(15));

// 1.
// 정수 n과 k가 주어졌을 때 , 1이상 n 이하의 중에서 k의 배수를
// 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성

// n    k   result
// 10   3   [3, 6, 9]
// 15   5   [5, 10, 15]

const solution = (n, k) => {
  return Array(n)
    .fill(1) // [1,1,1,1,1,1,1,1,1,1]
    .map((v, i) => i + 1) //[1,2,3,4,5,6,7,8,9,10]
    .filter((v) => v % k == 0); // 3의배수 [3,6,9]
};
console.log(solution(10, 3));

//2.
//문자열 배열 배열 strArry가 주어집니다.
//배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는
//모든 문자열을 제거하고 남은 문자열을 순서를 유지하여
//배열로 return 하는 solution 함수를 완성하시오

const makeStr = (strArr) => strArr.filter((v) => !v.includes("ad"));

console.log(makeStr(["and", "notad", "abcd"]));

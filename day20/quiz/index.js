// 함수 만들기
// 1.
//my_string n result
//"hello" 3 "hhheeellllllooo"
const solutions1 = (x, y) => {
  return [...x].map((v) => v.repeat(y)).join("");
};

console.log(solutions1("hello", 3)); // 출력: "hhheeellllllooo"

// 2.
//my_string result
//"abstract algebra" "AbstrAct AlgebrA"
//"PrOgraMmErs" "profrAmmers"

const solutions2 = (mystring) =>
  [...mystring].map((v) => (v == "a" ? "A" : v.toLowerCase())).join("");

console.log(solutions2);

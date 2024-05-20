// short_circuit(단축평가)

// true || "Dog"; //true
// false || "Dog"; //Dog
// true && "Dog"; //Dog
// false && "Dog"; //false

const userName = prompt("유저 입력");
const name = userName || "Gust";
console.log(`${name}님 환영합니다!`);
const isLoggedIn = true; //로그인 로직 아직안배움
isLoggedIn && console.log("로그인 성공");

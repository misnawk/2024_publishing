// [destucturing] : 분해

const days = ["월", "화", "수", "목", "금", "토", "일"];

const [a, b, c, ...rest] = days;
const [a1, b1, c1, ...result1] = days;

//a - 월
//b - 화
//c - 수
//rest - 마지막

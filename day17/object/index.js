// 참조: array, element, object

const coffee = {
  coffeeName: "아메리카노",
  coffeePrice: 2000,
  hasShot: true,
};

const coffee1 = {
  coffeeName: "라떼",
  coffeePrice: 2500,
  hasShot: true,
};

//북은 object타입
const book = {
  title: "해리포터",
  author: "미국인",
  publishedYear: "모름",
  pages: 10000,
};

const a = book["title"]; //해리포터
book.title; //해리포터

// 추가하기
book.color = "green";

// 지우기 - pages 삭제
delete book.pages;

//존재 여부 확인
"author" in book; // true or flase

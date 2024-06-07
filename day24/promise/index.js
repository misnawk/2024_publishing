//비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타내는 객체
// 진행중, 성공, 실패
// pending, fulldfilled, rejected

const a = new Promise((succeed, failed) => {
  setTimeout(() => {
    succeed("happy js");
  }, 3000);
});

a.then((x) => {
  console.log(x);
});

const b = fetch("https://fakerapi.it/api/v1/books?_quantity=20");
b.then((x) => x.json()).then((y) => console.log(y));

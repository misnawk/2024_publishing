//type[타입] Alias[별칭]
//const test : 1| 2| 3| 4| =2;
//함수 movie[] 매개변수를 받고, 장르를 하나의 문자열로 출력하는 함수 정의
var makeGenreStr = function (movies) {
  movies.forEach(function (v) {
    var str = "";
    v.genre.forEach(function (v1) {
      return str + v1;
    });
    console.log(str);
  });
};
var insideout2 = {
  name: "인사이드 아웃2",
  genre: ["키덜트"],
  grade: "전체 이용가",
};
var cgv = [
  { name: "원더랜드", genre: ["드라마"], grade: "12세" },
  {
    name: "설계자",
    genre: ["범죄", "드라마"],
    grade: "15세",
  },
  {
    name: "나쁜 녀석들-라이드 오어 다이 ",
    genre: ["액션", "코미디"],
    grade: "15세",
  },
];
console.log(cgv);
cgv.map(function (v) {
  v.genre.forEach(function (v) {
    return console.log(v);
  });
});
var makeIcreamJumboTron = function (data) {
  "<div> ".concat(data.url, "</div>");
};

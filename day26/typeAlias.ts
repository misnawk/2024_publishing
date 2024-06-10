//type[타입] Alias[별칭]
//const test : 1| 2| 3| 4| =2;

//장르와 이용가 타입을 지정
//리터럴 타입
type Grade = "전체 이용가" | "12세" | "15세" | "18세";
type Genre =
  | "키덜트"
  | "공포"
  | "드라마"
  | "멜로"
  | "코믹"
  | "사랑"
  | "액션"
  | "코미디"
  | "범죄";

//영화 타입을 지정
type Movie = {
  name: string;
  genre: Genre[];
  grade: Grade;
};

//함수 movie[] 매개변수를 받고, 장르를 하나의 문자열로 출력하는 함수 정의
// const makeGenreStr = (movies: Movie[]) => {
//   movies.forEach((v) => {
//     const str = "";
//     const result = v.genre.reduce((a, c) => a + c);
//     console.log(result);
//   });
// };

const insideout2: Movie = {
  name: "인사이드 아웃2",
  genre: ["키덜트"],
  grade: "전체 이용가",
};

const cgv: Movie[] = [
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

cgv.map((v) => {
  v.genre.forEach((v) => console.log(v));
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Unit hp, skill,name, 공격함수

// type unit = {
//   hp: number; // 'number' 타입 사용
//   skill: string;
//   attack: (target: unit) => number;
// };

// const roll: unit = {
//   hp: 100,
//   skill: "올려치기",
//   attack(target: unit) {
//     console.log("돌진공격");
//     // 공격 로직을 추가하세요. 예를 들어 고정된 값을 반환하도록:
//     return 10; // 예시로 10을 반환
//   },
// };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type category = "icecream" | "cake" | "cookie"; //종류의 타입을 지정해준다.
type icon = { name: string } & photoUrl;
type allergies = "우유" | "대두" | "계란" | "땅콩" | "밀" | "우유" | "복숭아";
type photoUrl = { url: string };

type NutritionInfo = {
  servings: number;
  kcal: number;
  sugars: number;
  proteins: number;
  transfats: number;
  salts: number;
  allergies: allergies;
};

type IcecreamInfo = {
  category: "category";
  engName: string;
  KorName: string;
  description: string;
  mainingredient: icon;
};

type icecream = IcecreamInfo & NutritionInfo & photoUrl;

const makeIcreamJumboTron = (data: icecream) => {
  `<div> ${data.url}</div>`;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//결합
type icecream1 = IcecreamInfo & NutritionInfo & photoUrl; //3개의 요소가 다 포함되어있어 icecream1가 완성

//포함
type icecreamCompositon = {
  //전체 요소중에 한가지만 포함되어도 완성 (프젝마다 다름 )
  IcecreamProductInfo: IcecreamInfo;
  NutritionInfo: NutritionInfo;
  photoUrl: photoUrl;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//값을 입력받아서 입력받은 값들로 span 적용해서 만들기
const makeMsgAlign = (msg: string, align: "center" | "start" | "end") => {
  const span = document.createElement("span");
  span.innerText = msg;
  span.style.textAlign = align;
  return span;
};

makeMsgAlign("점메추", "center");

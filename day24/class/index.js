class Student {
  constructor(a, b) {
    this.name = a;
    this.university = "연대"; //디폴트값으로 들어간다.
    this.major = b;
  }
  intro() {
    console.log(
      `저는 ${this.name} 이고요, ${this.university}이구요 ${this.major}이구요`
    );
  }

  // 변수 : 속성/명사/상태 : 대학교, 전공, 학년, 학점, 과제들, 학번, 입학년도, 입학년도, 수강과목리스트
  // 함수 : 동작/동사/     : 술마시기, 졸업작품만들기, 논문쓰기
  drinking(x) {
    console.log(`${x}를 마십니다.`);
  }

  makeMasterPiece() {
    console.log("졸작만들기");
  }
}

const kim = new Student("김민재", "컴공");
const lee = new Student("이지민", "정치");

kim.intro();
kim.drinking("테라");
lee.intro();
kim.drinking("카스");

class HardButton {
  constructor(a, b) {
    this.backgroundColor = a;
    this.content = b;
  }
  render() {
    const newDiv = document.createElement("button");
    newDiv.style.height = "60px";
    newDiv.style.width = "190px";
    newDiv.style.padding = "10px 16px";
    newDiv.style.backgroundColor = this.backgroundColor;
    newDiv.innerText = this.content;

    const test = document.querySelector(".test");
    test.appendChild(newDiv);
  }
}

const a = new HardButton("#3498db", "레스토랑");
const b = new HardButton("#34495e", "메가커피");
const c = new HardButton("#e67e22", "ㅁㄹ");

a.render();
b.render();
c.render();

// class Dog {
//   // 품종, 성별, 이름, 나이
//   // 밥먹기, 꼬리 흔들기
// }

// //펫보험
// class Dog {
//   //수술이력, 나이, 성별, 품조으 밥먹는 상태
//   //수술날짜, 보험이력등록하기, 가입하기
// }

// //펫게임
// class Dog {
//   //hp, stress수치, 스피드, 스킬들
//   // 놀아주기, 옷입히기, 하트주기
// }

// 클라이언트[프론트 엔드] <--> 서버[백엔드]
// http 방식으로 데이터를 주고 받음
// 1. stateLess[request // response]

// 2. 쿠기, 세션, JWT
//  -1. 무신사 들어옴
//  -2. 로그인을 함 [쿠키, 세션, JWT 받음]

// 3./webtoon/list/monday/id=1234
//  ./netfilx/best/id=293829
//  위와 같은 형식을 restful api라고 한다.

// const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// data.then((v) => v.json()).then((v) => console.log(v));

// const data1 = fetch("https://fakerapi.it/api/v1/companies?_quantity=20");
// data1.then((v) => v.json()).then((v) => console.log(v));

const data2 = fetch("https://fakerapi.it/api/v1/books?_quantity=20");
const resultData = data2
  .then((v) => v.json())
  .then((v) => {
    const a = v.data.forEach((v) => {
      console.log(v);

      let title = v.title;
      let author = v.author;
      let description = v.description;

      const result = `
      <div class="card">
          <div class="img">
           <img src="https://picsum.photos/200" alt="">
          </div>
        
          <div class="title">
          <span>제목:${title} </span>
          </div>
        
          <div class="authoer">
          <span>작가:${author} </span>
          </div>

          <div class="description">
         <span>${description} </span>
          </div>
      </div> 
    </div>
  
  `;

      const cardList = document.querySelector(".cardList");
      cardList.insertAdjacentHTML("beforeend", result);
    });
  });

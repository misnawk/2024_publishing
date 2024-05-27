const box = document.querySelector(".box");

// const names = ["kim", "lee", "park"];
// box.innerHTML = `<h1>MY Friend</h1>
// <ul>${names.map((v) => `<li>${v}</li>`).join("")}</ul>`;

const books = [
  {
    title: "자바스크립트 꿀잼",
    author: "손흥민",
    price: 30000,
    isSale: true,
  },
  {
    title: "타입스크립트 안쓰는법",
    author: "황희찬",
    price: 24000,
    isSale: false,
  },
  {
    title: "구글링 하다가 막혔을때 코딩하는법",
    author: "김민재",
    price: 14000,
    isSale: true,
  },
];

//isSale : true --> 10% 할인된 가격으로 나타내기

const isBookSalse = (book) => (book.isSale ? book.price * 0.9 : book.price);
// box.innerHTML = `
// <h1>${book.title}</h1>;
// <h4>${book.author}</h4>;
// <span>${isBookSalse(book)}</span>`;

// box.innerHTML = `
//     ${book.map(
//       (v) => `
//       <h1 class="book-title">${v.title}</h1>
//       <h4 class="book-author">${v.author}</h4>
//       <span class="book-price">${isBookSalse(v)}</span>
//   `
//     )}
//    `;

// box.classList.add("border");

// box.insertAdjacentHTML(어디에,무엇을)

//afterbegin : 맨처음 자식으로
//beforeend : 맨 뒤 자식으로

books.forEach((v, i) => {
  box.insertAdjacentHTML(
    "beforeend",
    `
    <h1>${books[i].title}</h1>
    <h3>${books[i].author}</h3>
    <span>${isBookSalse(books[i])}</span>
  `
  );
});

// const makeBook = (book) => `
//   <h1>${book.title}</h1>
//   <h4>${book.title}</h4>
//   <span>${book.title}</span>`;

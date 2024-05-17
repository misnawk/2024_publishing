// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");

// const count = document.querySelector(".count");
// const total_price = document.querySelector(".total_price");

// let num_total_price = 0;

// plus.addEventListener("click", () => {
//   num_plus = Number(count.innerText) + 1;
//   count.innerText = num_plus;

//   num_total_price = 10000 * num_plus;
//   total_price.innerText = "총 가격 " + num_total_price + "원";

//   if (num_plus >= 5) {
//     num_total_price = num_total_price * 0.9;
//     total_price.innerText = "총 가격 " + num_total_price + "원";
//   } else if (num_plus >= 10) {
//     num_total_price = num_total_price * 0.8;
//     total_price.innerText = "총 가격 " + num_total_price + "원";
//   }
// });

// minus.addEventListener("click", () => {
//   num_minus = Number(count.innerText) - 1;
//   if (num_minus < 0) {
//     count.innerText = 0;
//   } else {
//     count.innerText = num_minus;

//     num_total_price += -10000;
//     total_price.innerText = "총 가격 " + num_total_price + "원";
//   }
// });

//==================================================================

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const ticketSpan = document.querySelector(".count");
const totalPriceSpan = document.querySelector(".total_price");

plusBtn.addEventListener("click", () => {
  let ticketCount = Number(ticketSpan.innerText) + 1;
  let ticketPrice = ticketCount * 10000;

  if (ticketCount >= 10) {
    totalPriceSpan.innerText = ticketPrice * 0.8;
    ticketSpan.innerText = ticketCount;
  } else if (ticketCount >= 5) {
    totalPriceSpan.innerText = ticketPrice * 0.9;
    ticketSpan.innerText = ticketCount;
  } else {
    totalPriceSpan.innerText = ticketPrice;
    ticketSpan.innerText = ticketCount;
  }
});

minusBtn.addEventListener("click", () => {
  ticketCount = Number(ticketSpan.innerText) - 1;
  let ticketPrice = ticketCount * 10000;

  if (ticketCount >= 10) {
    totalPriceSpan.innerText = ticketPrice * 0.8;
    ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
  } else if (ticketCount >= 5) {
    totalPriceSpan.innerText = ticketPrice * 0.9;
    ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
  } else if (ticketCount < 0) {
    ticketSpan.innerText = 0;
  } else {
    ticketSpan.innerText = ticketCount;
    totalPriceSpan.innerText = ticketPrice;
  }
});

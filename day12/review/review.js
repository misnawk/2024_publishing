const a = document.querySelector(".bar");
const b = document.querySelector(".xIcon");

b.style.display = "none";

a.addEventListener("click", () => {
  a.style.display = "none";
  b.style.display = "block";
});

b.addEventListener("click", () => {
  b.style.display = "none";
  a.style.display = "block";
});
q
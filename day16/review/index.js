const input = document.querySelector(".input");
const eye = document.querySelector(".eye");
const hidden_eyeeye = document.querySelector(".hidden_eye");

hidden_eyeeye.style.display = "none";

eye.addEventListener("click", () => {
  input.type = "text";
  hidden_eyeeye.style.display = "block";
  eye.style.display = "none";
});

hidden_eyeeye.addEventListener("click", () => {
  input.type = "password";
  hidden_eyeeye.style.display = "none";
  eye.style.display = "block";
});

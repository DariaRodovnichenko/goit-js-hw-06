function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", changeColor);

function changeColor() {
  bgEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = getRandomHexColor();
}

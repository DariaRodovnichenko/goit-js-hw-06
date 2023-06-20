const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");
let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});

function updateCounter() {
  spanEl.textContent = counterValue;
}

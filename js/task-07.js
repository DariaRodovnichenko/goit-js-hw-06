const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});

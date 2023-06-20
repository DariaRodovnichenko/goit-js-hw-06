function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxContainer: document.querySelector("#boxes"),
};

selectors.createBtn.addEventListener("click", createBoxes);
selectors.destroyBtn.addEventListener("click", destroyBoxes);

let size = 30;

function createBoxes(amount) {
  amount = selectors.input.value;
  const boxes = Array.from({ length: amount }).map(() => {
    const newSize = size + 10;
    size = newSize;
    const box = createBox(newSize);
    return box;
  });

  selectors.boxContainer.append(...boxes);
}

function destroyBoxes() {
  selectors.boxContainer.innerHTML = "";
  size = 30;
}

function createBox(newSize) {
  const box = document.createElement("div");
  box.style.width = `${newSize}px`;
  box.style.height = `${newSize}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

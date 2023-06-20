const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Створити окремий елемент <li>. Обов'язково використати метод document.createElement().
// Додати назву інгредієнта як його текстовий вміст.
// Додати елементу клас item.
// Після чого, вставити усі <li> за одну операцію у список ul#ingredients.
const list = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

list.append(...ingredientsList);

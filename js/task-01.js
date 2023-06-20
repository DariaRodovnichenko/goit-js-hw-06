// порахувати і вивести в консоль кількість категорій в ul#categories, тобто елементів li.item.
const arrayCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${arrayCategories.length}`);

// для кожного элемента li.item у списку ul#categories, знайти і вивести в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
arrayCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const categoryList = document.querySelector('#categories');
const allCategoriesQuantity = categoryList.querySelectorAll('li.item');
console.log(`Number of categories: ${allCategoriesQuantity.length}`);
//АБО:
//const allCategoriesQuantity = categoryList.children.length;

allCategoriesQuantity.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});
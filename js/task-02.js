const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const container = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = `${ingredient}`;
  liEl.classList.add('item');
  return liEl;
})
ingredientsList.append(...container);
console.log(ingredientsList);
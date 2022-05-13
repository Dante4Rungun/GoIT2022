const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients")

ingredients.map(ingredient => {
  const elem = document.createElement("li")
  elem.textContent = ingredient
  elem.classList.add("item")
  list.append(elem)
})

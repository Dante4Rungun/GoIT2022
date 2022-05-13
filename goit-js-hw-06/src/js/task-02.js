const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients")
const elems = []

for (const ingredient in ingredients){
  const elem = document.createElement("li")
  elem.textContent = ingredients[ingredient]
  elem.classList = "item"
  elems.push(elem)
}

list.append(...elems)
//console.log(elems)

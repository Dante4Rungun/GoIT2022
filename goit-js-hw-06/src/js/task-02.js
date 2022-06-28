const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients")

function createList() {
  let ingList = []
  for (const ingredient of ingredients) {
    const elem = document.createElement('li')
    elem.textContent = ingredient
    elem.classList.add("item")
    ingList.push(elem)
  }
  list.append(...ingList)
}

createList()

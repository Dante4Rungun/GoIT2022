const controlls = document.getElementById("controls")
const boxes = document.getElementById("boxes")
let collect = []
let count = 0

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const fillCollection = (num) => {
  for (let i = 0; i < num; i+=1){
    collect.push(Math.random(0,10))
  }
}

const clearCollection = () => {
  collect = []
}

controlls.addEventListener("click", (event) => {
  event.preventDefault()
  
  if(event.target.getAttribute("type") === "number"){
    count = event.target.value
  }

  if(event.target.hasAttribute("data-create")) {
    collect = []
    fillCollection(count)
    console.log(collect)
  }

  if(event.target.hasAttribute("data-destroy")){
    clearCollection()
    console.log(collect)
  }
})

function createBoxes(amount){
  const boxList = []
  let size = 30
  for (let i = 0; i < amount; i+=1){
    const box = document.createElement('div')
    box.style.height = `${size}px`
    box.style.width = `${size}px`
    box.style.background = getRandomHexColor()
    boxList.push(box)
    size += 10
  }

  boxes.append(...boxList)
}

createBoxes(10)

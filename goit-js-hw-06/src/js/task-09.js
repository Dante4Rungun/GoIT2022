const body = document.body
const btn = document.querySelector(".change-color")
const spn = document.querySelector(".color")


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", (event) => {
  event.preventDefault()
  const color = getRandomHexColor()
  body.style.background = color
  spn.textContent = color
})
const range = document.getElementById("font-size-control")
const text = document.getElementById("text")

range.addEventListener("input", (event) => {
    text.style.fontSize = `${event.target.value}px`
})
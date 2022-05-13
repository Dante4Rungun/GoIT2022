let counterValue = 0
const value = document.getElementById("value")
const block = document.getElementById("counter")

const increment = () => { counterValue += 1; value.textContent = counterValue }
const decrement = () => { counterValue -= 1; value.textContent = counterValue }

block.addEventListener("click", (event) =>{
    if(event.target.getAttribute('data-action') === "increment"){
        increment()
    }
    if(event.target.getAttribute('data-action') === "decrement"){
        decrement()
    }
})



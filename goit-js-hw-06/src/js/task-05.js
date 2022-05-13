const inp = document.getElementById("name-input")
const out= document.getElementById("name-output")

inp.addEventListener("input", (event)=>{
    out.textContent = event.target.value
    if(event.target.value === ''){
        out.textContent = "Anonymus"
    }
})
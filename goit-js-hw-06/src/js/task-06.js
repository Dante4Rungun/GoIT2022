const inp = document.getElementById("validation-input")


inp.addEventListener("blur", (event) => {
    inp.classList = []
    if(event.target.value.length === 6){
        inp.classList.add("valid")
    }
    else {
        inp.classList.add("invalid")
    }
})
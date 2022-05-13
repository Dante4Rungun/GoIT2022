const inp = document.getElementById("validation-input")


inp.addEventListener("blur", (event) => {
    inp.classList = []

    if(event.target.value.length === parseInt(event.target.getAttribute('data-length'))){
        inp.classList.add("valid")
    }
    else {
        inp.classList.add("invalid")
    }
    
})
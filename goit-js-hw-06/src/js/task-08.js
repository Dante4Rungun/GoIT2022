const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    

    const {elements:{email,password}} = event.currentTarget

    if (email.value === "" || password.value === ""){
        event.preventDefault()
        alert('Please input all data')
    }
    else{
        //console.log(`Login: ${email.value} \nPassword: ${password.value}`)
        console.log({email: email.value, password: password.value})
        event.preventDefault()
        event.currentTarget.reset()
    }

    return false
})

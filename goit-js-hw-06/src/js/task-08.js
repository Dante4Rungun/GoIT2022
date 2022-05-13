const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const {elements:{email,password}} = event.currentTarget

    if (email.value === "" || password.value === ""){
        alert('Please input all data')
    }
    else{
        console.log(`Login: ${email.value} \nPassword: ${password.value}`)
        console.log()
    }

    return false
})

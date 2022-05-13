function Counts(){

    const elems = document.querySelectorAll(".item")
    console.log(`Number of categories: ${elems.length}`)
    elems.forEach((elem) => {
        console.log(`\nCategory: ${elem.querySelector("h2").textContent}`)
        console.log(`Elements: ${elem.querySelector("ul").children.length}`)
    })
}

Counts()
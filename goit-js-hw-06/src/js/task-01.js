function Counts(){
    const elems = document.querySelectorAll(".item")

    elems.forEach((elem) => {
        console.log(`Category: ${elem.querySelector("h2").textContent}`)
        console.log(`Elements: ${elem.querySelector("ul").children.length}`)
    })
}

Counts()
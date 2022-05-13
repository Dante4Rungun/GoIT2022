import { galleryItems } from './gallery-items.js';
//console.log(galleryItems);
// Change code below this line
const gallery = document.querySelector(".gallery")
const link = document.querySelector(".gallery__link")


gallery.addEventListener("click", (event)=>{
    event.preventDefault();
    if (event.target.hasAttribute('src')){
        const instance = basicLightbox.create(`
        <img src = ${event.target.getAttribute("data-source")}>
        `)
        instance.show()
    }
})

function createGallery() {
    const items = []

    for(const element of galleryItems){
        const item = document.createElement("div")
        item.classList.add("gallery__item")

        const link = document.createElement("a")
        link.classList.add("gallery__link")
        link.href = element.original

        const img = document.createElement("img")
        img.src = element.preview
        img.alt = element.description
        img.classList.add("gallery__image")
        img.setAttribute("data-source",element.original)

        link.append(img)
        item.append(link)
        items.push(item)
    }
    gallery.append(...items)
}

createGallery()

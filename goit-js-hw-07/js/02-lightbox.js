import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")

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

        link.append(img)
        item.append(link)
        items.push(item)
    }
    gallery.append(...items)
}



createGallery()

gallery.addEventListener("click", (event) => {
    event.preventDefault()
    let gallery = new SimpleLightbox('.gallery a',{});
    gallery.options.captionsData = 'alt'
    gallery.options.captionDelay = '250ms'
})

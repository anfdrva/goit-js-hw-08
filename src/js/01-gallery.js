// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML('beforeend', createMarkUp(galleryItems));

list.onclick = (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
}

list.addEventListener('click', heandlerClick);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});

function createMarkUp(arr) {
    return arr.map(({ preview, original, description }) => `
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')
}

function heandlerClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__image')) {
        console.log(evt.target)
    }
   
}

//console.log(SimpleLightbox);
console.log(galleryItems);

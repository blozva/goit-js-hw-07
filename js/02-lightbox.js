import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery  = document.querySelector('ul.gallery');

console.log(gallery);


const pictureElements = galleryItems.map(
    img => `<li><a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}">
    </a></li>`
).join('');
gallery.insertAdjacentHTML("beforeend", pictureElements);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

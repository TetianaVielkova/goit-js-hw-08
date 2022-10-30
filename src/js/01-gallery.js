// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line


const galleryRef = document.querySelector('.gallery');
const addGalleryItem = createGalleryItem(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', addGalleryItem);


function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => 

    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`).join("");
}

new SimpleLightbox('.gallery__item', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});


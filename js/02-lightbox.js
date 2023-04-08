import { galleryItems } from './gallery-items.js';
// Change code below this line

const getGallery = document.querySelector('.gallery');

function createGallery(items) {
  items.map(item => {
    const markup = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
  </a>`;
    getGallery.insertAdjacentHTML('beforeend', markup);
  });
}

createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
});

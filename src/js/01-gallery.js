// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this linenpm install simplelightbox
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryHTML = galleryItems
  .map(el => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
        />
      </a>
    </li>`;
  })
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryHTML);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

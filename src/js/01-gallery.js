'use strict';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");
const galleryArr = galleryItems
  .map(({ preview, original, description } = {}) => {
    return `<div class="gallery__item">
    <a href=${original}>
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    </div>`;
  })
  .join("");

galleryListEl.insertAdjacentHTML("afterbegin", galleryArr);

// simplelightbox
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
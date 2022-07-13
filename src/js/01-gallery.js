// Описаний в документації бібліотеки
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Named export
import { galleryItems } from './gallery-items';
// шаблон
import createGalleryCard from '../templates/gallery.hbs';

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

galleryListEl.innerHTML = createGalleryCard(galleryItems);

// simplelightbox
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
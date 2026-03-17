import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
const gallery = document.querySelector('#gallery');

export function renderImages(images) {
  const markup = images.map(img => `
    <a href="${img.largeImageURL}" class="gallery-item">
      <img src="${img.webformatURL}" alt="${img.tags}" />
    </a>
  `).join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}
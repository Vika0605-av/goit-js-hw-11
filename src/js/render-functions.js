const gallery = document.querySelector('#gallery');

export function renderImages(images) {
  const markup = images.map(img => `
    <img src="${img.webformatURL}" alt="${img.tags}"
  `).join('');

  gallery.innerHTML = markup;
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
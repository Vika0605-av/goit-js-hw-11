import axios from "axios";


    async function getImagesByQuery(query) {
        const API_KEY = '55065193-391623a3c41ad24a1105f24d8';
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: API_KEY,
                q: query,
                image_type: photo,
                orientation: horizontal,
                safesearch: true,
            }
        });
        return response.data.hits;
    }
    const images = response.data.hits;
    renderImages(images);

function renderImages(images) {
const markup = images
.map(img => {
    return `
  <img src="${img.webformatURL}" alt="${img.tags}" />`;
})
  .join(" ");
  gallery.innerHTML = markup;
}
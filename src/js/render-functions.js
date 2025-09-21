import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      item => `
    <li class="gallery-item">
    <a class="gallery-link" href="${item.largeImageURL}">
      <img class="gallery-image"
           src="${item.webformatURL}"
           alt="${item.tags}"/>
      </a>
      <ul class="gallery-text">
         <li>
         <h3>Likes</h3>
         <p>${item.likes}</p>
         </li>
         <li>
         <h3>Views</h3>
         <p>${item.views}</p>
         </li>
         <li>
         <h3>Comments</h3>
         <p>${item.comments}</p>
         </li>
         <li>
         <h3>Downloads</h3>
         <p>${item.downloads}</p>
         </li>
      </ul>
    </li>
    `
    )
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

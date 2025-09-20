import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesByQuery } from './pixabay-api';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const container = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = formInput.value.trim();
  loader.classList.remove('hidden');

  getImagesByQuery(query)
    .then(res => {
      console.log(res.data.hits);

      if (res.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
        });
        return;
      }
      container.innerHTML = createMarkup(res.data.hits);
      lightbox.refresh();
      form.reset();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});

function createMarkup(arr) {
  return arr
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
}

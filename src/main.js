import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  const query = formInput.value.trim();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const images = data.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          iconUrl: '/public/bi_x-octagon.svg',
        });
        formInput.value = '';
        return;
      }
      createGallery(images);
      formInput.value = '';
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});

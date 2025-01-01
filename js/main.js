import { renderGallery } from './big_picture.js';
import { initEditPopup } from './form.js';
import { getData } from './api.js';
import { showAlert } from './message.js';

getData()
  .then((thumbnails) => {
    renderGallery(thumbnails);
  })
  .catch(
    () => {
      showAlert('Проблемы с сервером: не удалось загрузить данные. Попробуйте обновить страницу!');
    }
  );

initEditPopup();

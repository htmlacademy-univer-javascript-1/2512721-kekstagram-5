import { initEditPopup } from './popup.js';
import { getData } from './api.js';
import { showAlert } from './message.js';
import { showFilteredPhotos } from './filter.js';
import { closeEditPopup, setFormSubmit } from './popup.js';

getData()
  .then((thumbnails) => {
    showFilteredPhotos(thumbnails);
  })
  .catch(
    () => {
      showAlert('Проблемы с сервером: не удалось загрузить данные. Попробуйте обновить страницу!');
    }
  );
setFormSubmit(closeEditPopup);
initEditPopup();

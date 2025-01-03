import { initEditPopup } from './form.js';
import { getData } from './api.js';
import { showAlert } from './message.js';
import { showFilteredPhotos } from './filter.js';
import { closeEditPopup, setFormSubmit } from './form.js';

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

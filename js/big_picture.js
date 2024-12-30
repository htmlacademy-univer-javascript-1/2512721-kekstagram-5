import { renderThumbnails } from './pictures.js';
import { showFullsizePicture } from './draw_pictures.js';

const pictureContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  pictureContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (!thumbnail) {
      return;
    }
    evt.preventDefault();

    const picture = pictures.find((item) =>
      item.id === parseInt(thumbnail.dataset.thumbnailId, 10)
    );
    showFullsizePicture(picture);
  });

  renderThumbnails(pictures);
};

export { renderGallery };

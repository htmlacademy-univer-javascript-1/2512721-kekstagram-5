import { renderThumbnails } from './pictures.js';
import { showFullSizePicture } from './draw_pictures.js';

const pictureContainerElement = document.querySelector('.pictures');
let pictures = [];

const onPictureContainerElementClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');

  if (!thumbnail) {
    return;
  }
  evt.preventDefault();

  const picture = pictures.find((item) =>
    item.id === parseInt(thumbnail.dataset.thumbnailId, 10)
  );
  showFullSizePicture(picture);
};

export const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnails(pictures);
  pictureContainerElement.addEventListener('click', onPictureContainerElementClick);
};

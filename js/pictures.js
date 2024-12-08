import { createPhotos } from './data.js';
import { openBigPicture } from './draw_pictures.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const createPictures = createPhotos();

const renderPicturesList = (post) => {
  const fragment = document.createDocumentFragment();

  createPictures.forEach(({url, description, likes, comments}) => {
    const pictureElementClone = pictureTemplate.cloneNode(true);
    const pictureImg = document.querySelector('.picture__img');

    pictureImg.src = url;
    pictureImg.alt = description;
    pictureImg.querySelector('.picture__likes').textContent = likes;
    pictureImg.querySelector('.picture__comments').textContent = comments;
    pictureImg.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture(post);
    });
    fragment.appendChild(pictureElementClone);
  });

  picturesList.appendChild(fragment);
};

export { renderPicturesList };

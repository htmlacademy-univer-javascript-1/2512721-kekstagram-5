import { createPhotos } from './data.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const createPictures = createPhotos();

createPictures.forEach(({url, description, likes, comments}) => {
  const pictureElementClone = pictureTemplate.cloneNode(true);
  const pictureImg = document.querySelector('.picture__img');

  pictureImg.src = url;
  pictureImg.alt = description;
  pictureImg.querySelector('.picture__likes').textContent = likes;
  pictureImg.querySelector('.picture__comments').textContent = comments;
  fragment.appendChild(pictureElementClone);
});

picturesList.appendChild(fragment);

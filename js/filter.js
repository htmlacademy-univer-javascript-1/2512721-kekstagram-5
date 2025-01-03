import { renderGallery } from './big_picture.js';

const MAX_COUNT_PHOTO_BOARD = 10;
const ACTIVE_FILTER_CLASS = 'img-filters__button--active';
const HIDDEN_FILTER_CLASS = 'img-filters--inactive';

const filterContainer = document.querySelector('.img-filters');
const defaultfFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const getRandomInteger = (first, second) => {
  const lower = Math.ceil(Math.min(first, second));
  const upper = Math.floor(Math.max(first, second));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomElementArray = (array, count) => {
  const randomIndexList = [];
  const max = Math.min(count, array.length);

  while (randomIndexList.length < max) {
    const index = getRandomInteger(0, array.length - 1);
    if (!randomIndexList.includes(index)) {
      randomIndexList.push(index);
    }
  }

  return randomIndexList.map((index) => array[index]);
};

const sortRandomPhotos = (photos, count) => getRandomElementArray(photos, count);
const sortDiscussedPhotos = (firstPhoto, secondPhoto) => secondPhoto.comments.length - firstPhoto.comments.length;

const filterMethod = {
  DEFAULT: (miniatures) => miniatures.slice(),
  RANDOM: (miniatures) => sortRandomPhotos(miniatures, MAX_COUNT_PHOTO_BOARD).slice(),
  DISCUSSED: (miniatures) => miniatures.slice().sort(sortDiscussedPhotos),
};

const removePhotos = () => document.querySelectorAll('.picture').forEach((photo) => photo.remove());

const changePhotos = (photos, filter) => {
  removePhotos();
  const currentFilter = document.querySelector(`.${ACTIVE_FILTER_CLASS}`);
  currentFilter.classList.remove(ACTIVE_FILTER_CLASS);
  renderGallery(photos);
  filter.classList.add(ACTIVE_FILTER_CLASS);
};

export const showFilteredPhotos = (miniatures) => {
  renderGallery(miniatures);
  filterContainer.classList.remove(HIDDEN_FILTER_CLASS);

  defaultfFilter.addEventListener('click', debounce(() => {
    changePhotos(filterMethod.DEFAULT(miniatures), defaultfFilter);
  }));
  randomFilter.addEventListener('click', debounce(() => {
    changePhotos(filterMethod.RANDOM(miniatures), randomFilter);
  }));
  discussedFilter.addEventListener('click', debounce(() => {
    changePhotos(filterMethod.DISCUSSED(miniatures), discussedFilter);
  }));
};

import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const bigPictureClose = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  bigPictureClose.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openBigPicture (post) {
  renderBigPicture(post);
  bigPicture.classList.remove('hidden');
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');

  bigPictureClose.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onDocumentKeydown);
}

function renderBigPicture (post) {
  bigPicture.querySelector('.big-picture__img').src = post.url;
  bigPicture.querySelector('.comments-count').textContent = post.comments.length;
  bigPicture.querySelector('.likes-count').textContent = post.likes;
  bigPicture.querySelector('.social__caption').textContent = post.description;
  socialComments.innerHTML = '';
  socialComments.appendChild(createFragmentComments(post.comments));
}

function createComment (comment) {
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const commentSection = commentTemplate.cloneNode(true);
  commentSection.querySelector('.social__picture').src = comment.avatar;
  commentSection.querySelector('.social__picture').alt = comment.name;
  commentSection.querySelector('.social__picture').textContent = comment.message;
  return commentSection;
}

function createFragmentComments (comments) {
  const fragmentComments = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragmentComments.appendChild(createComment(comment));
  });
  return fragmentComments;
}

export { openBigPicture };

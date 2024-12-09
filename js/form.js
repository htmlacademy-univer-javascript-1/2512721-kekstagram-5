const form = document.querySelector('.img-upload__form');
const imgUpload = document.querySelector('.img-upload__input');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgOverlay = document.querySelector('.img-upload__overlay');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const VALID_SYMBOLS = /^#[a-zа-яё0-9](1,19)$/i;

const pristine = new Pristine (form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

function showForm() {
  imgOverlay.classList.remove('.hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
}

function hideForm() {
  imgOverlay.classList.add('.hidden');
  document.body.classList.remove('modal-open');
  form.reset();
  document.removeEventListener('keydown', onDocumentKeyDown);
}

function onDocumentKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    const isTextFieldFocused = [textHashtags, textDescription].some((el) => el === document.activeElement);
    if (isTextFieldFocused) {
      hideForm();
    }
  }
}

const onFileInputChange = () => showForm();
const onCancelButtonClick = () => hideForm();

const MAX_HASHTAGS_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;

function validHashtags(value) {
  const hashtags = value.split(' ').map((hasgtag) => hashtag.toLowerCase());
  const isValid = hashtags.every((hashtag) => VALID_SYMBOLS.test(hashtag)) || hashtags[0] === '';

  if (hashtags.length > MAX_HASHTAGS_COUNT) {
    return {valid: false, message: 'Максимальное количество хештегов: 5'};
  } else if (new Set(hashtags).size !== hashtags.length) {
    return {valid: false, message: 'Хештеги не могут повторяться'};
  } else if (!isValid) {
    return {valid: false, message: 'Некорректный формат хештегов'};
  }
  return {valid: true};
}

pristine.addValidator(textHashtags,
  (value) => validHashtags(value).valid,
  (value) => validHashtags(value).message);

pristine.addValidator(textDescription,
  (value) => value.length <= MAX_COMMENT_LENGTH,
  'Максимальная длина комментария 140 символов.');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValidate = pristine.validate();
  if (isValidate) {
    form.submit();
  }
});

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const valueInput = document.querySelector('.scale__control--value');
const img = document.querySelector('.img_upload__preview img');

const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP_VALUE = 25;
const SIZE = 100;

function scaleImg (value) {
  img.scale.transform = `scale(${value / 100})`;
  valueInput.value = `${value}%`;
}

function onSmallerButtonClick () {
  const currentValue = parseInt(valueInput.value, 10);
  let newValue = currentValue - STEP_VALUE;
  if (newValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }
  scaleImg(newValue);
}

smallerButton.addEventListener('click', onSmallerButtonClick);

function onBiggerButtonClick () {
  const currentValue = parseInt(valueInput.value, 10);
  let newValue = currentValue + STEP_VALUE;
  if (newValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  }
  scaleImg(newValue);
}

biggerButton.addEventListener('click', onBiggerButtonClick);

const reset = () => scaleImg(SIZE);

export { reset };

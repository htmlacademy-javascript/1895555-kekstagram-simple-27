// photo_scale.js — модуль редактирования изображений.
import {SCALES_MIN,
  SCALE_MAX,
  SCALE_STEP,
  SCALE_DEFAULT} from './constants.js';

const previewPhoto = document.querySelector('.img-upload__preview').querySelector('img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

//Функция уменьшения масштаба
const onDownScale = () => {
  let scaleControlValue = parseInt(scaleValue.value, 10);
  if(scaleControlValue > SCALES_MIN){
    scaleControlValue -= SCALE_STEP;
    scaleValue.value = `${scaleControlValue}%`;
    previewPhoto.style.transform = `scale(${scaleControlValue / SCALE_DEFAULT})`;
  }
};

//Функция увеличения масштаба
const onUpScale = () => {
  let scaleControlValue = parseInt(scaleValue.value, 10);
  if(scaleControlValue < SCALE_MAX){
    scaleControlValue += SCALE_STEP;
    scaleValue.value = `${scaleControlValue}%`;
    previewPhoto.style.transform = `scale(${scaleControlValue / SCALE_DEFAULT})`;
  }
};

//Функция добавления обработчиков при изменении масштаба
const onAddScale = () => {
  scaleValue.value = `${SCALE_DEFAULT}%`;
  scaleSmaller.addEventListener('click', onDownScale);
  scaleBigger.addEventListener('click', onUpScale);
};

//Функция удаления обработчиков с изменения масштаба
const onRemoveScale = () => {
  scaleSmaller.removeEventListener('click', onDownScale);
  scaleBigger.removeEventListener('click', onUpScale);
};

export{scaleValue, previewPhoto, onRemoveScale, onAddScale, SCALE_DEFAULT};

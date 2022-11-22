// photo_scale.js — модуль редактирования изображений.
import {SCALESMIN,
  SCALEMAX,
  SCALESTEP,
  SCALEDEFAULT} from './constants.js';

const previewPhoto = document.querySelector('.img-upload__preview').querySelector('img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

//Функция уменьшения масштаба
const onDownScale = () => {
  let scaleControlValue = parseInt(scaleValue.value, 10);
  if(scaleControlValue > SCALESMIN){
    scaleControlValue -= SCALESTEP;
    scaleValue.value = `${scaleControlValue}%`;
    previewPhoto.style.transform = `scale(${scaleControlValue / SCALEDEFAULT})`;
  }
};

//Функция увеличения масштаба
const onUpScale = () => {
  let scaleControlValue = parseInt(scaleValue.value, 10);
  if(scaleControlValue < SCALEMAX){
    scaleControlValue += SCALESTEP;
    scaleValue.value = `${scaleControlValue}%`;
    previewPhoto.style.transform = `scale(${scaleControlValue / SCALEDEFAULT})`;
  }
};

//Функция добавления обработчиков при изменении масштаба
const onAddScale = () => {
  scaleValue.value = `${SCALEDEFAULT}%`;
  scaleSmaller.addEventListener('click', onDownScale);
  scaleBigger.addEventListener('click', onUpScale);
};

//Функция удаления обработчиков с изменения масштаба
const onRemoveScale = () => {
  scaleSmaller.removeEventListener('click', onDownScale);
  scaleBigger.removeEventListener('click', onUpScale);
};

export{scaleValue, previewPhoto, onRemoveScale, onAddScale, SCALEDEFAULT};

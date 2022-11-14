// photo_scale.js — модуль редактирования изображений.
import {SCALESMIN,
  SCALEMAX,
  SCALESTEP,
  SCALEDEFAULT} from './constants.js';

const previewPhoto = document.querySelector('.img-upload__preview').querySelector('img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

//увеличение - уменьшение отображения изображения
let defaultScale = 100;

//Начальное состояние масштаба
const getDefultScale = () => {
  previewPhoto.style.transform = `scale(${SCALEDEFAULT / 100})`;
  scaleValue.value = `${SCALEDEFAULT}%`;
  defaultScale = 100;
};
const scaleReset = () => {
  getDefultScale();
};

const onDownScale = () => {
  if(defaultScale > SCALESMIN){
    defaultScale -= SCALESTEP;
    scaleValue.value = `${defaultScale}%`;
    previewPhoto.style.transform = `scale(${defaultScale / 100})`;
  }
};

const onUpScale = () => {
  if(defaultScale < SCALEMAX){
    defaultScale += SCALESTEP;
    scaleValue.value = `${defaultScale}%`;
    previewPhoto.style.transform = `scale(${defaultScale / 100})`;
  }
};

scaleSmaller.addEventListener('click', onDownScale);
scaleBigger.addEventListener('click', onUpScale);

export{scaleReset};

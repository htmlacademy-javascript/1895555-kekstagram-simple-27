// photo_effects.js — модуль работы с эффектами изображения.

import{EFFECTS} from './constants.js';

const imgPreview = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectButton = document.querySelectorAll('.effects__radio');

const DEFAULTEFFECTS = EFFECTS[5];
let changeEffects = DEFAULTEFFECTS;
const theDefault = () => changeEffects === DEFAULTEFFECTS;

//функция изменения видимости и обновления слайдера с новыми параметрами
const getSlider = () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: changeEffects.min,
      max: changeEffects.max,
    },
    step: changeEffects.step,
    start: changeEffects.max,
  });

  if(theDefault()) {
    slider.classList.add('hidden');
  }
};

//функция для передачи в обработчик выбор нужного импута с эффектом, с условием от которого зависит, какие параметры передать
const onListChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  //находим в массиве необходимое значение эффекта кликнутого элемента и присваем значение к переменной
  changeEffects = EFFECTS.find((effect) => effect.name === evt.target.value);
  getSlider();
};

// функция добавления слайдеру необходимых нам стилей фильтров, класса и данных текста
const onSliderUpdate = () => {
  imgPreview.style.filter = 'none';
  imgPreview.className = '';
  imgPreview.value = '';
  if (theDefault()) {
    return;
  }
  const newValueSlider = slider.noUiSlider.get();
  imgPreview.style.filter = `${changeEffects.style}(${newValueSlider}${changeEffects.unit})`;
  imgPreview.classList.add(`effects__preview--${changeEffects.name}`);
  effectValue.value = slider;
};

//сброс эффектов
const resetSliderImg = () => {
  effectButton[5].checked = true;
  changeEffects = DEFAULTEFFECTS;
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  getSlider();
};

noUiSlider.create(slider, {
  range: {
    min: DEFAULTEFFECTS.min,
    max: DEFAULTEFFECTS.max,
  },
  start: DEFAULTEFFECTS.max,
  step: DEFAULTEFFECTS.step,
  connect: 'lower',
});

getSlider();

//слушатель изменения положения слайдера
slider.noUiSlider.on('update', onSliderUpdate);


export{onListChange, resetSliderImg};

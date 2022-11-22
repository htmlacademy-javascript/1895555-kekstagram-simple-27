// constants.js — модуль, c константами.

//Минимальная длинна строки
const MINLENGTHCOMMENT = 20;
//Максимальная длинна строки
const MAXLENGTHCOMMENT = 140;

//Минимальный масштаб фото
const SCALESMIN = 25;
//Максимальный масштаб фото
const SCALEMAX = 100;
//Шаг изменения масштаба фото
const SCALESTEP = 25;
//Стандартный масштаб фото
const SCALEDEFAULT = 100;

//массив с данными фильтров
const EFFECTS = [
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
];


export {
  MINLENGTHCOMMENT,
  MAXLENGTHCOMMENT,
  EFFECTS,
  SCALESMIN,
  SCALEMAX,
  SCALESTEP,
  SCALEDEFAULT
};


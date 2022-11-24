// constants.js — модуль, c константами.

//Минимальная длинна строки
const MIN_LENGTH_COMMENT = 20;
//Максимальная длинна строки
const MAX_LENGTH_COMMENT = 140;

//Минимальный масштаб фото
const SCALES_MIN = 25;
//Максимальный масштаб фото
const SCALE_MAX = 100;
//Шаг изменения масштаба фото
const SCALE_STEP = 25;
//Стандартный масштаб фото
const SCALE_DEFAULT = 100;

//массив с данными фильтров
const EFFECT = [
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
  MIN_LENGTH_COMMENT,
  MAX_LENGTH_COMMENT,
  EFFECT,
  SCALES_MIN,
  SCALE_MAX,
  SCALE_STEP,
  SCALE_DEFAULT
};


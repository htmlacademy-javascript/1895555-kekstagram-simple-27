// constants.js — модуль, c константами.

// Описание фото
const DESCRIPTIONS = [
  'Закат',
  'Прекрасное далеко',
  'Удивительное что-то',
  'Объективизация протоипирования объекта',
  'Сложный атриум',
  'Карандаш',
  'Солнце за гаризонтом',
  'Уличные склоки',
  'Метроном',
  'Ошибка на ошибке',
  'Авантюрный Рома',
  'Сила в правде',
  'Канифоль или свинец?',
  'Король 777'
];

//Число нужных нам экземпляров
const SIMILAR_DESCRIPTION_PHOTO_COUNT = 25;

//Минимальная длинна строки
const MINLENGTHCOMMENT = 20;
//Максимальная длинна строки
const MAXLENGTHCOMMENT = 140;

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
  DESCRIPTIONS,
  SIMILAR_DESCRIPTION_PHOTO_COUNT,
  MINLENGTHCOMMENT,
  MAXLENGTHCOMMENT,
  EFFECTS
};


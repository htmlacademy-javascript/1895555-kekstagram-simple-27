// constants.js — модуль, c константами.
import {getRandomPositiveInteger} from './util.js';


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

// Комментаторы
const COMMENTS = [
  {
    id: getRandomPositiveInteger(1, 125),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 600)}.svg`,
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Енакентий',
  },
  {
    id: getRandomPositiveInteger(1, 125),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 600)}.svg`,
    message: 'Лица у людей на фотке перекошены, как будто их избивают.',
    name: 'Лолита',
  },
  {
    id: getRandomPositiveInteger(1, 125),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 600)}.svg`,
    message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
    name: 'Гектар',
  },
  {
    id: getRandomPositiveInteger(1, 125),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 600)}.svg`,
    message: 'Всё отлично!',
    name: 'Рудольф',
  }
];

//Число нужных нам экземпляров
const SIMILAR_DESCRIPTION_PHOTO_COUNT = 25;


export{
  DESCRIPTIONS,
  COMMENTS,
  SIMILAR_DESCRIPTION_PHOTO_COUNT
};

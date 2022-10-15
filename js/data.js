// data.js — модуль, который создаёт данные.
import {getRandomPositiveInteger} from './util.js';
import {DESCRIPTIONS, COMMENTS, SIMILAR_DESCRIPTION_PHOTO_COUNT} from './constants.js';


//Колбэк рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//Сборка объекта
const getPhotos = (comID) => ({
  id: comID,
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomArrayElement(COMMENTS)
});

// Указываем нужное колличество экземпляров
const getDescriptionPhoto = () => Array.from({
  length: SIMILAR_DESCRIPTION_PHOTO_COUNT
}, (v,k) => getPhotos(k));


export{getDescriptionPhoto};

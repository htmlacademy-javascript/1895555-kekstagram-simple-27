//Функция рандомных чисел
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//Функция проверки длинны строки

function checkLength(string, maxLength) {
  const stringLenght = string.length;
  if (stringLenght <= maxLength) {
    return true;
  }
  return false;
}

// Генерация данных. Задача для Кексаграм (НЕ простой)

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

//Колбэк рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getPhotos = (comID) => ({
  id: comID,
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomArrayElement(COMMENTS)
});

// Указываем нужное колличество экземпляров

const DescriptionPhoto = Array.from({
  length: SIMILAR_DESCRIPTION_PHOTO_COUNT
}, (v,k) => getPhotos(k));

// eslint ругается на console.log,  и gitHub ругается на console.log при отправки pull requests
// но без console.log {object object} в консоли то нормально не вывести..
// ТАК ЖЕ, при запуске проекта через npm start НЕ ОТОБРАЖАЕТСЯ в консоли выполненный код.
console.log(DescriptionPhoto);

export {
  DescriptionPhoto,
  checkLength,
};
// util.js — модуль с вспомогательными функциями

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

// Функция проверки соответствия клавиши ESC
const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

// Функция проверки соответствия клавиши ENTER
const isEnterKey = function (evt) {
  return evt.key === 'Enter';
};


export {
  getRandomPositiveInteger,
  checkLength,
  isEscapeKey,
  isEnterKey
};

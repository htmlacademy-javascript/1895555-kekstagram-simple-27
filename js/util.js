// util.js — модуль с вспомогательными функциями

// Функция проверки соответствия клавиши ESC
const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

// Функция проверки соответствия клавиши ENTER
const isEnterKey = function (evt) {
  return evt.key === 'Enter';
};

export {
  isEscapeKey,
  isEnterKey
};

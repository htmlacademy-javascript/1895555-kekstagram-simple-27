// user_validator.js — модуль с проверкой правильности заполненных данных и использованием сторонней библиотеки PristineJS.

import {
  MINLENGTHCOMMENT,
  MAXLENGTHCOMMENT
} from './constants.js';
import {
  sendData
} from './server.js';
import {
  isEscapeKey
} from './util.js';

const bodyElement = document.querySelector('body');
const userModuleForm = document.querySelector('.img-upload__form');
const submitButton = userModuleForm.querySelector('.img-upload__submit');
const elementDescription = userModuleForm.querySelector('.text__description');
const reportSuccessElement = document.querySelector('#success').content.querySelector('.success');
const reportErrorElement = document.querySelector('#error').content.querySelector('.error');
const successButton = document.querySelector('#success').content.querySelector('.success__button');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');

const pristine = new Pristine(userModuleForm, {
  classTo: 'text', // Элемент, на который будут добавляться классы
  errorTextClass: 'text__description--error', // Класс для элемента с текстом ошибки
  errorTextParent: 'text', // Элемент, куда будет выводиться текст с ошибкой
  errorClass: 'text__description--invalid', // Класс, обозначающий невалидное поле
  successClass: 'text__description--valid', // Класс, обозначающий валидное поле
  errorTextTag: 'div', // Тег, который будет обрамлять текст ошибки
});

//Функция проверки минимальной длине строки
const validateCommentMin = (value) => value.length >= MINLENGTHCOMMENT;

//Функция проверки максимальной длине строки
const validateCommentMax = (value) => value.length <= MAXLENGTHCOMMENT;

pristine.addValidator(
  elementDescription,
  validateCommentMin,
  'Менее 20 символов'
);

pristine.addValidator(
  elementDescription,
  validateCommentMax,
  'Более 140 символов'
);

//Функция закрытия окна через ESC и вывод сообщения об отправке или ошибки отправки формы
const onMessageEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hiddenReport();
  }
};

//Функция скрытия сообщения
const onHidenMessage = () => {
  hiddenReport();
};

//Функия блокировки кнопки отправки формы
const blockSubmitButton = () => {
  submitButton.disabled = true;
  elementDescription.readOnly = true;
  submitButton.textContent = 'Загружаю, ждите';
};

//функция разблокировки кнопки отправки формы
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  elementDescription.readOnly = false;
  submitButton.textContent = 'Загрузить';
};

//Функция создания сообщения об успешной отправки на сервер формы
const getSuccessReport = () => {
  const successReport = reportSuccessElement.cloneNode(true);
  document.addEventListener('keydown', onMessageEsc);
  document.addEventListener('click', onHidenMessage);
  successButton.addEventListener('click', onHidenMessage);
  bodyElement.append(successReport);
  bodyElement.style.overflow = 'hidden';
};

//Функция создания сообщения об ошибке отправки на сервер формы
const getErrorReport = () => {
  const errorReport = reportErrorElement.cloneNode(true);
  document.addEventListener('keydown', onMessageEsc);
  document.addEventListener('click', onHidenMessage);
  errorButton.addEventListener('click', onHidenMessage);
  bodyElement.append(errorReport);
  bodyElement.style.overflow = 'hidden';
};

//Функция закрытия сообщения об успехе отправки формы на сервер или ошибке
function hiddenReport() {
  const reportElement = document.querySelector('.success') || document.querySelector('.error');
  reportElement.remove();
  document.removeEventListener('keydown', onMessageEsc);
  document.removeEventListener('click', onHidenMessage);
  successButton.removeEventListener('click', onHidenMessage);
  errorButton.removeEventListener('click', onHidenMessage);
  bodyElement.style.overflow = 'auto';
}

//Функция отправки формы на сервер
const setUserModule = (onSuccess) => {
  userModuleForm.addEventListener('submit', onSubmitButton);

  function onSubmitButton(evt) {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          getSuccessReport();
        },
        () => {
          getErrorReport();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  }
};


export {
  elementDescription,
  setUserModule,
};

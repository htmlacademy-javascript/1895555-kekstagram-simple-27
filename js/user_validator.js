import {
  MINLENGTHCOMMENT,
  MAXLENGTHCOMMENT
} from './constants.js';

const userModuleForm = document.querySelector('.img-upload__form');
const pristine = new Pristine(userModuleForm, {
  classTo: 'text', // Элемент, на который будут добавляться классы
  errorTextClass: 'text__description--error', // Класс для элемента с текстом ошибки
  errorTextParent: 'text', // Элемент, куда будет выводиться текст с ошибкой
  errorClass: 'text__description--invalid', // Класс, обозначающий невалидное поле
  successClass: 'text__description--valid', // Класс, обозначающий валидное поле
  errorTextTag: 'div', // Тег, который будет обрамлять текст ошибки
});

function validateComment(value) {
  return value.length >= MINLENGTHCOMMENT && value.length <= MAXLENGTHCOMMENT;
}

pristine.addValidator(
  userModuleForm.querySelector('#description'),
  validateComment,
  'От 20 до 140 символов'
);

const onUserModule = () => {
  userModuleForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
    }
  });
};

export {onUserModule};

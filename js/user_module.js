// user_module.js — модуль модального окна.
import {scaleReset} from './photo_scale.js';
import {onUserModule, removeUserModule} from './user_validator.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {getEffectSlider, resetSliderImg} from './photo_effects.js';

const bodyNewStyle = document.querySelector('body');
const userModuleForm = document.querySelector('.img-upload__form');
const userModuleSetting = document.querySelector('.img-upload__overlay');
const imgUpload = document.querySelector('#upload-file');
const imgUploadCancel = userModuleForm.querySelector('#upload-cancel');

const onPopupEscKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModule();
    imgUpload.innerHTML = '';
  }
};

//Функция открытия модального окна
function openUserModule (){
  userModuleSetting.classList.remove('hidden');
  bodyNewStyle.classList.toggle('modal-open');
  getEffectSlider();
  onUserModule();
  scaleReset();

  document.addEventListener('keydown', onPopupEscKeydown);
  removeUserModule();
}

//Функция закрытия модального окна
function closeUserModule (){
  resetSliderImg();
  userModuleSetting.classList.add('hidden');
  bodyNewStyle.classList.toggle('modal-open');
  imgUpload.innerHTML = '';

  document.removeEventListener('keydown', onPopupEscKeydown);
  removeUserModule();
}

//Открываем окно
imgUpload.addEventListener('change', openUserModule);
//Открываем окно ч/з Enter
imgUpload.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModule ();
  }
});

//Закрываем окно
imgUploadCancel.addEventListener('click', closeUserModule);
//Закрываем окно ч/з Enter
imgUploadCancel.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModule();
  }
});

export{};

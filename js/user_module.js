// user_module.js — модуль модального окна.
import {SCALEDEFAULT} from './constants.js';
import {scaleValue, previewPhoto, onRemoveScale, onAddScale} from './photo_scale.js';
import {elementDescription} from './user_validator.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {onListChange, resetSliderImg} from './photo_effects.js';

const bodyNewStyle = document.querySelector('body');
const userModuleForm = document.querySelector('.img-upload__form');
const userModuleSetting = document.querySelector('.img-upload__overlay');
const imgUpload = document.querySelector('.img-upload__input');
const imgUploadCancel = userModuleSetting.querySelector('.img-upload__cancel');

//Функция очистки данных модального окна
const onUserModuleReset = () => {
  userModuleSetting.classList.add('hidden');
  bodyNewStyle.classList.toggle('modal-open');
  elementDescription.value = '';
  scaleValue.value = `${SCALEDEFAULT}%`;
  previewPhoto.style = 'transform: scale(1)';
  resetSliderImg();
  onRemoveScale();
  imgUpload.value = '';
  imgUpload.innerHTML = '';
};

//Функция закрытия окна клавишей ESC
const onPopupEscKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUserModuleReset();
  }
};

//Функция открытия модального окна
const openUserModule = () => {
  userModuleSetting.classList.remove('hidden');
  bodyNewStyle.classList.toggle('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  onAddScale();
  userModuleForm.addEventListener('change', onListChange);
  document.removeEventListener('change', onEnterKeydown);
};

//Функция для обработчика октрытия модального окна клавишей ENTER
function onEnterKeydown (evt){
  if (isEnterKey(evt)) {
    openUserModule();
  }
}

//Открываем окно
imgUpload.addEventListener('change', () => {
  openUserModule();
});

document.addEventListener('change', onEnterKeydown);

//Функция закрытия модального окна
const closeUserModule = () =>{
  userModuleForm.removeEventListener('change', onListChange);
  document.removeEventListener('keydown', onPopupEscKeydown);
  onUserModuleReset();
};

//Закрываем окно
imgUploadCancel.addEventListener('click', () => {
  closeUserModule();
});
//Закрываем окно ч/з Enter
imgUploadCancel.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModule();
  }
});

export{closeUserModule};

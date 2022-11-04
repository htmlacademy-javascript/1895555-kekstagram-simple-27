import {
  isEscapeKey,
  isEnterKey
} from './util.js';

const bodyNewStyle = document.querySelector('body');
const userModuleForm = document.querySelector('.img-upload__form');
const userModuleSetting = document.querySelector('.img-upload__overlay');
const imgUpload = document.querySelector('#upload-file');
const imgUploadCancel = userModuleForm.querySelector('#upload-cancel');

const onPopupEscKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModule();
  }
};

//Функция открытия модального окна
function openUserModule (){
  userModuleSetting.classList.remove('hidden');
  bodyNewStyle.classList.toggle('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

imgUpload.addEventListener('change', () => {
  openUserModule ();
});

imgUpload.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModule ();
  }
});

//Функция закрытия модального окна
function closeUserModule (){
  userModuleSetting.classList.add('hidden');
  bodyNewStyle.classList.toggle('modal-open');

  imgUpload.innerHTML = '';

  document.removeEventListener('keydown', onPopupEscKeydown);
}

imgUploadCancel.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModule();
  }
});

imgUploadCancel.addEventListener('click', () => {
  closeUserModule();
});

export{userModuleForm};

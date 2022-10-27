//miniature.js - отрисовка миниатюр фото других пользователей

import {
  getDescriptionPhoto
} from './data.js';

const picture = document.querySelector('.pictures');

// Находи в шаблоне нужный элемент
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Создаем новый фрагмент(черный ящик)
const fragment = document.createDocumentFragment();

function miniaturePhotos() {
  getDescriptionPhoto().forEach(({likes, comments, url}) => {
    const clonePictureTemplate = pictureTemplate.cloneNode(true);
    clonePictureTemplate.querySelector('.picture__likes').textContent = likes;
    clonePictureTemplate.querySelector('.picture__comments').textContent = comments;
    clonePictureTemplate.querySelector('.picture__img').src = url;
    fragment.appendChild(clonePictureTemplate);
    picture.appendChild(fragment);
  });
}

export {
  miniaturePhotos
};

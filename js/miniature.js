//miniature.js - отрисовка миниатюр фото других пользователей

const picture = document.querySelector('.pictures');

// Находи в шаблоне нужный элемент
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const miniaturePhotos = (simularMiniature) => {
  // Создаем новый фрагмент(черный ящик)
  const fragment = document.createDocumentFragment();
  simularMiniature.forEach(({likes, comments, url, description}) => {
    const clonePictureTemplate = pictureTemplate.cloneNode(true);
    clonePictureTemplate.querySelector('.picture__likes').textContent = likes;
    clonePictureTemplate.querySelector('.picture__comments').textContent = comments;
    clonePictureTemplate.querySelector('.picture__img').src = url;
    clonePictureTemplate.querySelector('.picture__img').alt = description;
    fragment.appendChild(clonePictureTemplate);
  });
  picture.appendChild(fragment);
};

export {miniaturePhotos};

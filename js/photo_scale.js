// photo_scale.js — модуль редактирования изображений.

const previewPhoto = document.querySelector('.img-upload__preview');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

//увеличение - уменьшение отображения изображения
let defaultScale = 100;
scaleValue.value = `${defaultScale}%`;

scaleSmaller.addEventListener('click',()=>{
  if(defaultScale > 25){
    defaultScale -= 25;
    scaleValue.value = `${defaultScale}%`;
    previewPhoto.style.transform = `scale(${defaultScale / 100})`;
  }
});

scaleBigger.addEventListener('click', () =>{
  if(defaultScale < 100){
    defaultScale += 25;
    scaleValue.value = `${defaultScale}%`;
    previewPhoto.style.transform = `scale(${defaultScale / 100})`;
  }
});


export{};

//Функция рандомных чисел
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger();

//Функция проверки длинны строки

function checkLength(string, maxLength) {
  const stringLenght = string.length;
  if (stringLenght <= maxLength) {
    return true;
  }
  return false;
}

checkLength();

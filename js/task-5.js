'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackgroundColor = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', handleButtonClick);

function handleButtonClick() {
  const randomColor = getRandomHexColor();
  bodyBackgroundColor.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

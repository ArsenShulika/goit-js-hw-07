'use strict';

const divContainer = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

btnCreate.addEventListener('click', handleCreate);
btnDestroy.addEventListener('click', handleDestroy);

function handleCreate() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
  }

  createBoxes(amount);
  input.value = '';
}

function createBoxes(amount) {
  handleDestroy();

  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    divContainer.appendChild(box);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleDestroy() {
  divContainer.innerHTML = '';
}

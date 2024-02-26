'use strict';

const nameInputField = document.getElementById('name-input');
const newNameOutputText = document.getElementById('name-output');

nameInputField.addEventListener('input', handleInput);

function handleInput(event) {
  const trimmedValue = event.currentTarget.value.trim();

  if (trimmedValue !== '') {
    newNameOutputText.textContent = trimmedValue;
  } else {
    newNameOutputText.textContent = 'Anonymous';
  }
}

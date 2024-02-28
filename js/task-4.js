'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formInfo = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formInfo);
  form.reset();
}

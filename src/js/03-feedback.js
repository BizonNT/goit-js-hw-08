import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const { email: localEmail, message: localMessage } =
  JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
form.email.value = localEmail ?? '';
form.message.value = localMessage ?? '';
const dataForm = {
  email: form.email.value,
  message: form.message.value,
};

function onInput(event) {
  fillForm(event);
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function fillForm(event) {
  const inputForm = event.target;
  if (inputForm.name === 'email') {
    dataForm.email = inputForm.value.trim();
  } else if (inputForm.name === 'message') {
    dataForm.message = inputForm.value.trim();
  }
}

function onSubmit(event) {
  event.preventDefault();
  formBtn = event.currentTarget;
  if (formBtn.email.value === '' || formBtn.message.value === '') {
    alert('Fill the empty Input field');
    return;
  } else {
    console.log(dataForm);
    localStorage.removeItem('feedback-form-state');
    formBtn.email.value = '';
    formBtn.message.value = '';
  }
}

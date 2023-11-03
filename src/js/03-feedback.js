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
  const forms = event.target;
  if (forms.name === 'email') {
    dataForm.email = forms.value.trim();
  } else if (forms.name === 'message') {
    dataForm.message = forms.value.trim();
  }
}

function onSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.email.value = '';
  event.currentTarget.message.value = '';
  console.log(dataForm);
}

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let dataForm = {};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
onLoad();

function onInput(event) {
  dataForm[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onSubmit(event) {
  event.preventDefault();
  console.log(dataForm);
  dataForm = {};
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
}

function onLoad() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    dataForm = JSON.parse(data);
    Object.entries(dataForm).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
}

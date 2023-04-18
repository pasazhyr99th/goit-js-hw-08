import throttle from 'lodash.throttle';

const FEEDBACK_FORM = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(formInputs, 500));
refs.form.addEventListener('submit', onFormSubmit);

function formInputs(evt) {
  const objData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(objData));
}

const savedObjData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
if (savedObjData) {
  refs.input.value = savedObjData.email;
  refs.textarea.value = savedObjData.message;
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const objData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  console.log(objData);
  localStorage.removeItem(FEEDBACK_FORM);
  evt.currentTarget.reset();
}

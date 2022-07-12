'use strict';
import throttle from 'lodash.throttle';
import localStorageApi from './localstorage';

const FORM_LOCAL_STORAGE_KEY = "feedback-form-state";
const FormEl = document.querySelector('.feedback-form');
const userData = {};

const fillFormFields = () => {
  const userDataFromLS = localStorageApi.load(FORM_LOCAL_STORAGE_KEY);
//   перевірка чи записались дані
  if (userDataFromLS === undefined) {
    return;
  }

  const formElements = FormEl.elements;

  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      formElements[key].value = userDataFromLS[key];
    }
  }
};

const onFormElInput = event => {
  const target = event.target;

  const formElValue = target.value;
  const formElName = target.name;

  userData[formElName] = formElValue;

  localStorageApi.save(FORM_LOCAL_STORAGE_KEY, userData);
};

const onFormElSubmit = event => {
  event.preventDefault();

  console.log(userData);

  localStorageApi.remove(FORM_LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
};

FormEl.addEventListener('input', throttle(onFormElInput, 500));
FormEl.addEventListener('submit', onFormElSubmit);

fillFormFields();

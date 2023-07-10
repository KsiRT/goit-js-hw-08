const _ = require('lodash');

const feedbackFormEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name = email]');
const messageInput = document.querySelector('[name = message]');
const userData = {
  email: '',
  message: '',
};

const fillInputs = () => {
  let parsedUserData;
  try {
    parsedUserData = JSON.parse(localStorage.getItem('feedback-form-state'));
  } catch (error) {
    console.log(error);
  }

  if (parsedUserData === null) {
    return;
  }
  for (const property in parsedUserData) {
    feedbackFormEl.elements[property].value = parsedUserData[property];
  }
  console.log('ne pusto');
};

fillInputs();

const onInputChange = evt => {
  userData.email = emailInput.value;
  userData.message = messageInput.value;
  const jsonUserData = JSON.stringify(userData);
  localStorage.setItem('feedback-form-state', jsonUserData);
};

const onFormSubmit = evt => {
  evt.preventDefault();
  console.log(userData);
  localStorage.removeItem('feedback-form-state');
  feedbackFormEl.reset();
};

feedbackFormEl.addEventListener('input', _.throttle(onInputChange, 500));
feedbackFormEl.addEventListener('submit', onFormSubmit);

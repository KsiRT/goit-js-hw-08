const _ = require('lodash');

const feedbackFormEl = document.querySelector('.feedback-form');

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

const onInputChange = ({ target }) => {
  const inputName = target.name;
  const inputValue = target.value;
  let parsedUserData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || userData;
  parsedUserData[inputName] = inputValue;

  const jsonUserData = JSON.stringify(parsedUserData);

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

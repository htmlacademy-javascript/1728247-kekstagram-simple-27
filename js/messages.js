import {isEscapeKey} from './util.js';
import {body} from './form.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = successMessageTemplate.querySelector('.success__button');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessageTemplate.querySelector('.error__button');

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();}
};

const onOverlayClick = () => {
  hideMessage();
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  successButton.addEventListener('click', hideMessage);
  body.append(successMessage);
  body.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  errorButton.addEventListener('click', hideMessage);
  body.append(errorMessage);
  body.style.overflow = 'hidden';
};

function hideMessage () {
  const message =
    document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  body.style.overflow = 'auto';
}

export {showSuccessMessage, showErrorMessage};

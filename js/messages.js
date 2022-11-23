import {isEscapeKey} from './util.js';

const bodyElement = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successButtonElement = document.querySelector('.success__button');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButtonElement = document.querySelector('.error__button');

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();}
};

const onOverlayClick = () => {
  hideMessage();
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  successButtonElement.addEventListener('click', hideMessage);
  bodyElement.append(successMessageElement);
  bodyElement.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  errorButtonElement.addEventListener('click', hideMessage);
  bodyElement.append(errorMessageElement);
  bodyElement.style.overflow = 'hidden';
};

function hideMessage () {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  bodyElement.style.overflow = 'auto';
}

export {showSuccessMessage, showErrorMessage};

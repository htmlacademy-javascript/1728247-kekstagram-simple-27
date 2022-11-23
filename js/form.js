import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {showErrorMessage, showSuccessMessage} from './messages.js';
import { sendData } from './api.js';

const modalElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const uploadFileElement = document.querySelector('#upload-file');
const cancelButtonElement = document.querySelector('#upload-cancel');
/*const submitButtonElement = document.querySelector('#upload-submit');*/

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();}
};

function openUserModal () {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  uploadFileElement.value = '';
  document.querySelector('.text__description').reset();
  resetScale();
  resetEffects();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFileElement.addEventListener('change', () => {
  openUserModal();
});

cancelButtonElement.addEventListener('click', () => {
  closeUserModal();
});

const setUserFormSubmit = (onSuccess) => {
  document.querySelector('#upload-select-image').addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    sendData(showSuccessMessage, showErrorMessage, formData)
      .then(()=>closeUserModal());
  }
  );
};

export {setUserFormSubmit};

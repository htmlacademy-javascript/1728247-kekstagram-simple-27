import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {showErrorMessage, showSuccessMessage} from './messages.js';
import {sendData} from './api.js';

const modal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('#upload-submit');
const form = document.querySelector('#upload-select-image');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();}
};

const openUserModal = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
};

function closeUserModal () {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadFile.value = '';
  form.reset();
  resetScale();
  resetEffects();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFile.addEventListener('change', () => {
  openUserModal();
});

cancelButton.addEventListener('click', () => {
  closeUserModal();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const onSuccessSubmit = () => {
  showSuccessMessage();
  closeUserModal();
};

const onErrorSubmit = () => {
  showErrorMessage();
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData(onSuccessSubmit, onErrorSubmit, formData)
      .then(()=>unblockSubmitButton());
  }
  );
};

export {setUserFormSubmit, body};

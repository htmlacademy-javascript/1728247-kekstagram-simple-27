import {isEscapeKey} from './util.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const BODY = document.querySelector('body');
const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();}
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  BODY.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  BODY.classList.remove('modal-open');

  document.querySelector('input[type=file]').value = '';

  document.removeEventListener('keydown', onPopupEscKeydown);
}

userModalOpenElement.addEventListener('change', () => {
  openUserModal();
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});


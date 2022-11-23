import './form.js';
import {renderPhotos} from './card.js';
import {setUserFormSubmit} from './form.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPhotos(photos);
  });

setUserFormSubmit(showSuccessMessage || showErrorMessage);

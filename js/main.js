import './form.js';
import {renderPhotos} from './card.js';
import {setUserFormSubmit} from './form.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';

getData(renderPhotos, showAlert);

setUserFormSubmit();

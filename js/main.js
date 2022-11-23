import './form.js';
import {renderPhotos} from './card.js';
import {setUserFormSubmit} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData(renderPhotos, showAlert);

setUserFormSubmit();

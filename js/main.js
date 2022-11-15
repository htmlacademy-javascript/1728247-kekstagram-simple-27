import {getPhoto, PHOTO_AMOUNT} from './data.js';
import './form.js';
import './slider.js';

const photos = getPhoto(PHOTO_AMOUNT);
// eslint-disable-next-line no-console
console.log(photos);

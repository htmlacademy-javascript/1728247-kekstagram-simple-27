import './form.js';
import './slider.js';
import {renderPhotos} from './card.js';
import {getPhoto, PHOTO_AMOUNT} from './data.js';

const photos = getPhoto(PHOTO_AMOUNT);

renderPhotos(photos);

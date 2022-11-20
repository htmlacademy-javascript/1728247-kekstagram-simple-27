import {getPhoto, PHOTO_AMOUNT} from './data.js';

document.querySelector('.pictures__title').classList.remove('visually-hidden');
const miniaturesList = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const usersPhotos = getPhoto(PHOTO_AMOUNT);
const miniaturesListFragment = document.createDocumentFragment();

usersPhotos.forEach(({url, likes, comments}) => {
  const miniatureElement = miniatureTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__comments').textContent = comments;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniaturesListFragment.appendChild(miniatureElement);
});
miniaturesList.appendChild(miniaturesListFragment);

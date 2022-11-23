const photoList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach(({url, description, likes, comments}) => {
    const photo = photoTemplate.cloneNode(true);
    const photoImg = photo.querySelector('.picture__img');
    photoImg.src = url;
    photoImg.alt = description;
    photo.querySelector('.picture__comments').textContent = comments;
    photo.querySelector('.picture__likes').textContent = likes;
    fragment.appendChild(photo);
  });
  photoList.appendChild(fragment);
};

export {renderPhotos};

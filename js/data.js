import {getRandomElement} from './util.js';
import {getRandomNumber} from './util.js';
import {checkStringLength} from './util.js';

const PHOTO_AMOUNT = 25;

const Like = {
  MIN: 15,
  MAX: 200,
};

const Comment = {
  MIN: 0,
  MAX: 200,
};

const DESCRIPTIONS = [
  'Смотрите, какой очаровательный котик!',
  'Найдите на фото моего пушистика))',
  'Кто это тут такой сладкий мальчик??!!',
  'Как уютно обниматься с няшным пузиком!^-^',
  'А это у нас новая обновка: смотрите, как ему идёт этот комбинезон!',
  'Кажется, новая игрушка коту не понравилась, и он решил её утопить...',
  'Садиться на диван нужно осторожнее: маскировка уровень ниндзя!',
  'Любитель охотиться на птиц через окно)',
  'Шапочка Санта-Клауса ему очень к ли...к мордахе, да!))',
  'Сейчас будет ПРЫГ!!',
  'Кручу-верчу, запутать хочу! Взялась она вязать, как же, ха!',
  'Какая шерстка! Какой хвостик! Какие ушки!..',
  'Кто у нас тут молодец? Вот этот молодец!',
];

checkStringLength('', 140);

const generatePhoto = (photoId) => ({
  id: photoId,
  url: `photos/${photoId}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomNumber(Like.MIN, Like.MAX),
  comments: getRandomNumber(Comment.MIN, Comment.MAX),
});

const getPhoto = (amount) => {
  const items = [];
  for (let i = 0; i < amount; i++) {
    const photo = generatePhoto(i + 1);
    items.push(photo);}
  return items;
};

const photos = getPhoto(PHOTO_AMOUNT);

export {photos};

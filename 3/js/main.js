/* eslint-disable prefer-const */
function getRandomNumber (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    return NaN;
  }
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}
checkStringLength('', 140);

const VARIANTS = 25;
const ID_QUANTITY = 25;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 0,
  MAX: 200,
};

const photoDescriptionVariants = [
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

const getRandomElement = (array) =>
  array[getRandomNumber(0, array.length - 1)];

const generateIndexesArray = (quantity) => {
  let indexesArray = [];
  for (let i = 1; i <= quantity; i++) {
    indexesArray.push(i);
  }
  return indexesArray;
};

let indexes = generateIndexesArray(ID_QUANTITY);

function allPhotosDescriptions () {
  let publishedPhotoDescription = [];
  for (let i = 0; i <= VARIANTS - 1; i++) {
    publishedPhotoDescription.push({id: indexes[i],
      url: `photos/${indexes[i]}.jpg`,
      description: getRandomElement(photoDescriptionVariants),
      likes: getRandomNumber(LikesCount.MIN, LikesCount.MAX),
      comments: getRandomNumber(CommentsCount.MIN, CommentsCount.MAX),});}
  return publishedPhotoDescription;
}
// eslint-disable-next-line no-console
console.log(allPhotosDescriptions());

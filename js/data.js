import { getRandomInt, getRandomArrayElement, createIdGenerator } from './util.js';

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Иван',
  'Джессика',
  'Мария',
  'Кирилл',
  'Виктор',
  'Юлия',
  'Анжелика',
  'Василиса'
];

const DESCRIPTIONS = ['Продолжай улыбаться, потому что жизнь — прекрасная вещь и есть еще так много поводов для улыбки.',
  'Хочу увидеть, что произойдет, если я не сдамся.',
  'Лучше начать действовать, совершая ошибки, чем медлить, стремясь к безошибочности.',
  'Не бойся быть не таким, как все, и все захотят быть таким, как ты.',
  'Одна хорошая мысль утром меняет смысл целого дня.',
  'Что бы ни случилось завтра, у нас есть еще сегодня.',
  'Настойчивость окупается сполна.',
  'Будь голосом, а не эхом.',
  'Человек на вершине горы не упал туда с неба.',
  'Отсутствие сна — это не проблема. Проблема, когда ты не знаешь, ради чего просыпаешься по утрам.',
  'Мы растем, помогая расти другим.',
  'Каждое мгновенье жизни — еще одна возможность.',
  'Есть лишь один человек, на которого я могу надеяться ― это я сам. И знаете что? Этот человек ни разу меня не подводил.'
];

const PICTURE_COUNT = 25;
const AvatarId = {
  MIN: 1,
  MAX: 6,
};
const LikeCount = {
  MIN: 15,
  MAX: 200,
};
const CommentCount = {
  MIN: 0,
  MAX: 30,
};
const StringCount = {
  MIN: 1,
  MAX: 2,
};

const createIdComment = createIdGenerator();

const createMessage = () => Array.from(
  { length: getRandomInt(StringCount.MIN, StringCount.MAX) },
  () => getRandomArrayElement(MESSAGES),
).join(' ');

const createComment = () => ({
  id: createIdComment(),
  avatar: `img/avatar-${getRandomInt(AvatarId.MIN, AvatarId.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});


const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from(
    { length: getRandomInt(CommentCount.MIN, CommentCount.MAX) },
    createComment,
  ),
});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export { getPictures };

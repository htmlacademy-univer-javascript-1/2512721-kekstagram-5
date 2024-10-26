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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let usedIdsOfComment = [];

const createComment = () => {
  let id = getRandomInteger(1, 10000);
  while (usedIdsOfComment.indexOf(id) !== -1) {
    id = getRandomInteger(1, 10000);
  }
  usedIdsOfComment.push(id);
  return {
    id: id,
    avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

let usedIdsOfDescription = [];

let usedUrlNum = [];

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

const createPhotoDescription = () => {
  let id = getRandomInteger(1, 25);
  while (usedIdsOfDescription.indexOf(id) !== -1) {
    id = getRandomInteger(1, 25);
  }
  usedIdsOfDescription.push(id);
  let urlNum = getRandomInteger(1, 25);
  while (usedUrlNum.indexOf(urlNum) !== -1) {
    urlNum = getRandomInteger(1, 25);
  }
  usedUrlNum.push(urlNum);
  return {
    id: id,
    url: 'photos/' + urlNum + '.jpg',
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
  };
};

const photoDescriptions = Array.from({length: 25}, createPhotoDescription);

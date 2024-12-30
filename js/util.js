export const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export const getRandomArrayElement = (items) =>
  items[getRandomInt(0, items.length - 1)];

export const createIdGenerator = () => {
  let lastId = 0;

  return () => {
    lastId += 1;
    return lastId;
  };
};

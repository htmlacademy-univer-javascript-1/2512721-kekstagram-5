const checkLength = function (string, len) {
  return (string.length <= len);
};

const checkPalindrom = function (string) {
  const checkString = string.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
  return string.replaceAll(' ', '').toLowerCase() === checkString;
};

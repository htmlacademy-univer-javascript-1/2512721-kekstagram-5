const checkLength = function (string, len) {
  return (string.length <= len);
};

checkLength('abc', 5);

const checkPalindrom = function (string) {
  const checkString = string.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
  return string.replaceAll(' ', '').toLowerCase() === checkString;
};

checkPalindrom('abcba');

const checkTimeOfMeeting = function (openTime, closeTime, startTime, time) {
  let timeList = openTime.split(':');
  openTime = Number(timeList[0]) * 60 + Number(timeList[1]);
  timeList = closeTime.split(':');
  closeTime = Number(timeList[0]) * 60 + Number(timeList[1]);
  timeList = startTime.split(':');
  startTime = Number(timeList[0]) * 60 + Number(timeList[1]);
  if (startTime < openTime || startTime + time > closeTime) {
    return false;
  } else {
    return true;
  }
};

checkTimeOfMeeting('11:00', '18:00', '13:00', 90);

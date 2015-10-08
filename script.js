'use strict';

function isInt(v) {
  return !isNaN(v) && (function(x) {return (x | 0) === x;})(parseFloat(v));
}

function validateDate(arr) {
  var year = arr[0];
  var month = arr[1];
  var day = arr[2];
  if (isInt(year) && isInt(month) && isInt(day)) {
    if (month in [3, 5, 8, 10] && day > 30) return false;
    if (month === 1 && day > 28) {
      var febDate = new Date(year, month, day);
      if (febDate.toString().slice(4,7) !== 'Feb') return false;
    }
    return true;
  } else return false;
}

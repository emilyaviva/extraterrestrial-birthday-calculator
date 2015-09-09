'use strict';

//var planets = require('../../models/planets.json');

/* var $datepicker = $('#datepicker').pikaday({
  firstDay: 0,
  minDate: new Date(1900, 0, 1),
  maxDate: new Date(2020, 12, 31),
  yearRange: [1900, 2020]
});

*/

var nextAnniv = function(date, planet) {
  if (date._isAMomentObject && planet in planets) {
    console.log(success);
  }
};

var validateDate = function(arr) {
  var year = arr[0];
  var month = arr[1];
  var day = arr[2];
  if (month in [3, 5, 8, 10] && day > 30) return false;
  if (month === 1 && day > 28) {
    var febDate = new Date(year, month, day);
    if (febDate.toString().slice(4,7) !== 'Feb') return false;
  }
  return true;
};

moment().format();
// $datepicker.pikaday('show').pikaday('thisMonth');

$('#input-date').on('submit', function(event) {
  event.preventDefault();
  var inputArray = [parseInt($('#year').val()), parseInt($('#month').val()), parseInt($('#day').val())];
  if (validateDate(inputArray)) {
    var earthDate = inputMoment.format('dddd, MMMM D, YYYY');
    $('#earth-date').html(earthDate);
    var earthAge = moment.duration(moment().diff(inputMoment, 'years', true), 'years');
    var earthYears = earthAge._data.years;
    var earthMonths = Math.floor(earthAge._data.months) || null;
    $('#earth-age').html(earthMonths ? earthYears + ' years ' + earthMonths + ' months' : earthYears + ' years');
  } else {
    alert('Not a valid date');
  }
});

// nextAnniv(moment(), 'venus');

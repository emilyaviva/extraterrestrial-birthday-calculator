'use strict';

var planets = {
  "mercury": {
    "name": "Mercury",
    "adjective": "Hermian",
    "year": 87.9691
  },
  "venus": {
    "name": "Venus",
    "adjective": "Venusian",
    "year": 224.701
  },
  "mars": {
    "name": "Mars",
    "adjective": "Martian",
    "year": 686.971
  },
  "jupiter": {
    "name": "Jupiter",
    "adjective": "Jovian",
    "year": 4332.59
  },
  "saturn": {
    "name": "Saturn",
    "adjective": "Saturnian",
    "year": 10759.22
  }
}

function chop(n, delim) {
  if (!delim) delim = '.';
  return Number('0.' + n.toString().split(delim)[1]);
}

function validateDate(arr) {
  var year = arr[0];
  var month = arr[1];
  var day = arr[2];
  if (month in [3, 5, 8, 10] && day > 30) return false;
  if (month === 1 && day > 28) {
    var febDate = new Date(year, month, day);
    if (febDate.toString().slice(4,7) !== 'Feb') return false;
  }
  return true;
}

function birthday(date, planet) {
  var currentAge = moment.duration(moment().diff(date, 'days', true), 'days');
  var i = moment(date);
  var count = 0;
  while (i.isBefore(moment())) {
    i.add(planet.year, 'days');
    count += 1;
  }
  return 'You will turn ' + count + ' ' + planet.adjective + ' years old on ' + i.format('dddd, MMMM D, YYYY') + '.';
}

$('#input-date').on('submit', function(event) {
  event.preventDefault();
  var inputArray = [parseInt($('#year').val()), parseInt($('#month').val()), parseInt($('#day').val())];
  if (validateDate(inputArray)) {
    var earthDate = moment(inputArray).format('dddd, MMMM D, YYYY');
    var selectedPlanet = 'planets.' + $('#planet').val();
    $('#earth-date').html(earthDate);
    $('#planet-age').html(birthday(earthDate, selectedPlanet));
    //var earthAge = moment.duration(moment().diff(inputMoment, 'years', true), 'years');
    //var earthYears = earthAge._data.years;
    //var earthMonths = Math.floor(earthAge._data.months) || null;
    //$('#earth-age').html(earthMonths ? earthYears + ' years ' + earthMonths + ' months' : earthYears + ' years');
  } else {
    alert('Not a valid date');
  }
});

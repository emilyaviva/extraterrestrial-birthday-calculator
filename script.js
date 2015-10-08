'use strict';

var planets = {
  mercury: {
    name: 'Mercury',
    adjective: 'Hermian',
    year: 87.9691
  },
  'venus': {
  name: 'Venus',
    adjective: 'Venusian',
    year: 224.701
  },
  'earth': {
    name: 'Earth',
    adjective: 'Terran',
    year: 365.25
  },
  'mars': {
    name: 'Mars',
    adjective: 'Martian',
    year: 686.971
  },
  'jupiter': {
    name: 'Jupiter',
    adjective: 'Jovian',
    year: 4332.59
  },
  'saturn': {
    name: 'Saturn',
    adjective: 'Saturnian',
    year: 10759.22
  },
  'uranus': {
    name: 'Uranus',
    adjective: 'Uranian',
    year: 30687.15
  },
  'neptune': {
    name: 'Neptune',
    adjective: 'Neptunian',
    year: 60190.03
  },
  'pluto': {
    name: 'Pluto',
    adjective: 'Plutonian',
    year: 90570
  },
  'ceres': {
    name: 'Ceres',
    adjective: 'Cerean',
    year: 1681.63
  },
  'vesta': {
    name: 'Vesta',
    adjective: 'Vestan',
    year: 1325.75
  },
  'eris': {
    name: 'Eris',
    adjective: 'Eridian',
    year: 203830
  },
  'sedna': {
    name: 'Sedna',
    adjective: 'Sednan',
    year: 4143736
  },
  'quaoar': {
    name: 'Quaoar',
    adjective: 'Quaoaran',
    year: 104451.3
  },
  'kepler22b': {
    name: 'Kepler-22b',
    adjective: 'Kepler-22b-ian',
    year: 289.862
  },
  'halley': {
    name: 'Halley\'s Comet',
    adjective: 'Hallean',
    year: 26503.325
  },
  'halebopp': {
    name: 'Comet Hale-Bopp',
    adjective: 'Hale-Bopp-ian',
    year: 873312.75
  },
  'luna1': {
    name: 'Luna 1',
    adjective: 'Luna 1-ian',
    year: 450
  },
  'pioneer4': {
    name: 'Pioneer 4',
    adjective: 'Pioneer 4-ian',
    year: 398
  },
  'spitzer': {
    name: 'Spitzer Space Telescope',
    adjective: 'Spitzerian',
    year: 363
  }
};

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

'use strict';

var planets = {
  mercury: {
    name: 'Mercury',
    adjective: 'Hermian',
    year: 87.9691
  },
  venus: {
    name: 'Venus',
    adjective: 'Venusian',
    year: 224.701
  },
  earth: {
    name: 'Earth',
    adjective: 'Terran',
    year: 365.25
  },
  mars: {
    name: 'Mars',
    adjective: 'Martian',
    year: 686.971
  },
  jupiter: {
    name: 'Jupiter',
    adjective: 'Jovian',
    year: 4332.59
  },
  saturn: {
    name: 'Saturn',
    adjective: 'Saturnian',
    year: 10759.22
  },
  uranus: {
    name: 'Uranus',
    adjective: 'Uranian',
    year: 30687.15
  },
  neptune: {
    name: 'Neptune',
    adjective: 'Neptunian',
    year: 60190.03
  },
  pluto: {
    name: 'Pluto',
    adjective: 'Plutonian',
    year: 90570
  },
  'ceres': {
    name: 'Ceres',
    adjective: 'Cerean',
    year: 1681.63
  },
  vesta: {
    name: 'Vesta',
    adjective: 'Vestan',
    year: 1325.75
  },
  eris: {
    name: 'Eris',
    adjective: 'Eridian',
    year: 203830
  },
  sedna: {
    name: 'Sedna',
    adjective: 'Sednan',
    year: 4143736
  },
  quaoar: {
    name: 'Quaoar',
    adjective: 'Quaoaran',
    year: 104451.3
  },
  kepler22b: {
    name: 'Kepler-22b',
    adjective: 'Kepler-22b-ian',
    year: 289.862
  },
  halley: {
    name: 'Halley\'s Comet',
    adjective: 'Hallean',
    year: 26503.325
  },
  halebopp: {
    name: 'Comet Hale-Bopp',
    adjective: 'Hale-Bopp-ian',
    year: 873312.75
  },
  luna1: {
    name: 'Luna 1',
    adjective: 'Luna 1-ian',
    year: 450
  },
  pioneer4: {
    name: 'Pioneer 4',
    adjective: 'Pioneer 4-ian',
    year: 398
  },
  spitzer: {
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

function getNextBirthdate(date, planet) {
  var ageInDays = Math.floor((new Date() - new Date(date.year, date.month, date.day)) / 86400000);
  var count = 0;
  var time = 0;
  while (ageInDays > time) {
    time += planet.year;
    count += 1;
  }
  // console.log({years: count, date: time, ageInDays: ageInDays,  daysUntilNextBirthday: Math.ceil(time - ageInDays)});
  return {years: count, until: Math.ceil(time - ageInDays)};
}

// 'time' is how many days old you'll be on your next birthday ('count'-th)

$('#entry').on('submit', function(event) {
  event.preventDefault();
  var inputArray = {year: parseInt($('#year').val()), month: parseInt($('#month').val()), day: parseInt($('#day').val())};
  if (moment(inputArray).isValid()) {
    var planet = planets[$('#planet').val()];
    var birthdate = getNextBirthdate(inputArray, planet);
    if (birthdate.years === 0) {
      if (birthdate.until === 0) $('#next-birthday').css('color', 'blue').html('Happy birthday today!!');
      else $('#next-birthday').css('color', 'blue').html('You haven\'t been born yet!');
    } else {
      $('#next-birthday').css('color', '').html('You will turn ' + birthdate.years + ' ' + planet.adjective + ' year' + (birthdate.years === 1 ? '' : 's') + ' old on ' + moment().add(birthdate.until, 'days').format('dddd, MMMM D, YYYY') + '.');
    }
  } else {
    $('#next-birthday').css('color', 'red').html('Not a valid date');
  }
});

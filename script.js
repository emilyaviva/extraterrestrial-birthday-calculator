'use strict';

var planets = {
  mercury: {
    name: 'Mercury',
    adjective: 'Hermian',
    year: 87.9691,
    fact: 'It spins on its axis exactly three times for every two times it revolves around the Sun.'
  },
  venus: {
    name: 'Venus',
    adjective: 'Venusian',
    year: 224.701,
    fact: 'It is the brightest object in the night sky besides the moon.'
  },
  earth: {
    name: 'Earth',
    adjective: 'Terran',
    year: 365.25,
    fact: 'Biological life has changed its atmosphere over billions of years, which now contains over twenty percent oxygen.'
  },
  mars: {
    name: 'Mars',
    adjective: 'Martian',
    year: 686.971,
    fact: 'Like Earth, it has seasons because of the way it is tilted on its axis.'
  },
  jupiter: {
    name: 'Jupiter',
    adjective: 'Jovian',
    year: 4332.59,
    fact: 'Its famous Great Red Spot is the solar system’s largest thunderstorm, about the size of two or three Earths.'
  },
  saturn: {
    name: 'Saturn',
    adjective: 'Saturnian',
    year: 10759.22,
    fact: 'If you could fit it into a large enough bathtub, Saturn would float in water.'
  },
  uranus: {
    name: 'Uranus',
    adjective: 'Uranian',
    year: 30687.15,
    fact: 'The word “Uranus” has no correct pronunciation in English.'
  },
  neptune: {
    name: 'Neptune',
    adjective: 'Neptunian',
    year: 60190.03,
    fact: 'It is the windiest place in the solar system, with sustained wind speeds as high as 2,100 kilometers per hour.'
  },
  pluto: {
    name: 'Pluto',
    adjective: 'Plutonian',
    year: 90570,
    fact: 'It was named after the Roman god of the underworld by an eleven-year-old English schoolgirl.'
  },
  'ceres': {
    name: 'Ceres',
    adjective: 'Cerean',
    year: 1681.63,
    fact: 'It is the largest object in the asteroid belt between the orbits of Mars and Jupiter, but small enough that an Earth airplane could circle it in an hour.'
  },
  vesta: {
    name: 'Vesta',
    adjective: 'Vestan',
    year: 1325.75,
    fact: 'It is an asteroid that has three side-by-side craters that look like a snowman when viewed from above.'
  },
  eris: {
    name: 'Eris',
    adjective: 'Eridian',
    year: 203830,
    fact: 'It is more than twice as far from the sun as Pluto. It it about Pluto’s size, and it has one moon called Dysnomia.'
  },
  sedna: {
    name: 'Sedna',
    adjective: 'Sednan',
    year: 4143736,
    fact: 'It will be at its closest point to the Sun in 2075-76, and won’t come that close again for another 12,000 years.'
  },
  quaoar: {
    name: 'Quaoar',
    adjective: 'Quaoaran',
    year: 104451.3,
    fact: 'It is pronounced “kwa-war” and is named for the creator god of the Tongva people, who are indigenous to the Los Angeles area.'
  },
  kepler22b: {
    name: 'Kepler-22b',
    adjective: 'Kepler-22b-ian',
    year: 289.862,
    fact: 'It is about two and a half times the size of the Earth, lies in its solar system’s “habitable zone”, and might have a surface covered with liquid water.'
  },
  halley: {
    name: 'Halley’s Comet',
    adjective: 'Hallean',
    year: 26503.325,
    fact: 'It was observed at least as far back as 240 BCE, and has been recorded by Babylonian, Chinese, and European astronomers. It will next be visible from Earth in 2061.'
  },
  halebopp: {
    name: 'Comet Hale-Bopp',
    adjective: 'Hale-Bopp-ian',
    year: 873312.75,
    fact: 'It was visible to the naked eye, even in cities with light pollution, in early 1997. A solar eclipse on March 9th allowed people to see it during daytime.'
  },
  luna1: {
    name: 'Luna 1',
    adjective: 'Luna 1-ian',
    year: 450,
    fact: 'In 1959, it was the first spacecraft to go to the Moon, sent by the Soviet Union, but it missed its orbital target and went into solar orbit.'
  },
  pioneer4: {
    name: 'Pioneer 4',
    adjective: 'Pioneer 4-ian',
    year: 398,
    fact: 'It was sent by the United States to fly by the Moon in 1959, and is still in orbit of the Sun.'
  },
  spitzer: {
    name: 'Spitzer Space Telescope',
    adjective: 'Spitzerian',
    year: 363,
    fact: 'It is in orbit of the Sun, following behind the Earth, and is used for observing deep space, particularly planets in other solar systems.'
  }
};

function getNextBirthdate(date, planet) {
  var ageInDays = Math.floor((new Date() - new Date(date.year, date.month, date.day)) / 86400000);
  var count = 0;
  var time = 0; // 'time' is how many days old you'll be on your next birthday ('count'-th)
  while (ageInDays > time) {
    time += planet.year;
    count += 1;
  }
  return {years: count, until: Math.ceil(time - ageInDays)};
}

function insertCommas(num) {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

$('#entry').on('submit', function(event) {
  event.preventDefault();
  $('#facts').html('');
  var inputArray = {year: parseInt($('#year').val()), month: parseInt($('#month').val()), day: parseInt($('#day').val())};
  if (moment(inputArray).isValid()) {
    var planet = planets[$('#planet').val()];
    var birthdate = getNextBirthdate(inputArray, planet);
    if (birthdate.years === 0) {
      if (birthdate.until === 0) $('#next-birthday').html('<span class="error">Happy birthday today!!</span>');
      else $('#next-birthday').html('<span class="error">You haven\'t been born yet!</span>');
    } else {
      $('#next-birthday').html('You will turn <strong>' + birthdate.years + '</strong> ' + planet.adjective + ' year' + (birthdate.years === 1 ? '' : 's') + ' old on <strong>' + moment().add(birthdate.until, 'days').format('dddd, MMMM D, YYYY') + '</strong>.');
      $('#facts').html('<p>' + planet.name + ' makes one orbit every ' + insertCommas(planet.year) + ' Earth days.</p><p>' + planet.fact + '</p>');
    }
  } else {
    $('#next-birthday').html('<span class="error">Not a valid date</span>');
  }
});

$('#toggle-license').click(function(event) {
  event.preventDefault();
  $('#license').slideToggle('fast');
});

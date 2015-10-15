'use strict';

var planets = {
  mercury: {
    name: 'Mercury',
    adjective: 'Hermian',
    year: 87.9691,
    facts: [
      'It spins on its axis exactly three times for every two times it revolves around the Sun.',
      'Despite being closest to the Sun, Mercury is only the second-hottest planet, because unlike Venus, it has no atmosphere to regulate its temperature.',
      'Only two Earth spacecraft have ever visited Mercury: Mariner 10 in 1974-75, and Messenger in 2011-15.'
    ]
  },
  venus: {
    name: 'Venus',
    adjective: 'Venusian',
    year: 224.701,
    facts: [
      'It is the brightest object in the night sky besides the moon.',
      'The day on Venus lasts longer than its year: it takes 243 Earth days for Venus to rotate around its axis.',
      'It does not tilt on its axis of rotation, so it does not have seasonal variations in its climate and temperature.'
    ]
  },
  earth: {
    name: 'Earth',
    adjective: 'Terran',
    year: 365.25,
    facts: [
      'Biological life has changed its atmosphere over billions of years, which now contains over twenty percent oxygen.',
      'It has a powerful magnetic field because of its nickel-iron core, which helps protect it from solar radiation.',
      'It is the only planet in our solar system not named after a Greco-Roman god.'
    ]
  },
  mars: {
    name: 'Mars',
    adjective: 'Martian',
    year: 686.971,
    facts: [
      'Like Earth, it has seasons because of the way it is tilted on its axis.',
      'It is home to Olympus Mons, the tallest volcano in the Solar System, 21 kilometers high and 600 kilometers around.',
      'It is the only other body in the Solar System besides Earth where we have discovered evidence of liquid water.'
    ]
  },
  jupiter: {
    name: 'Jupiter',
    adjective: 'Jovian',
    year: 4332.59,
    facts: [
      'Its famous Great Red Spot is the solar system’s largest thunderstorm, about the size of two or three Earths.',
      'There is a theory that its core may be made of solid diamond.',
      'It has four large moons, and dozens of smaller moons, some of which may be captured asteroids.'
    ]
  },
  saturn: {
    name: 'Saturn',
    adjective: 'Saturnian',
    year: 10759.22,
    facts: [
      'If you could fit it into a large enough bathtub, Saturn would float in water.',
      'Its famous ring system was discovered by Galileo in 1610. There are multiple large, concentric rings, and we still do not know exactly how they were formed.',
      'Its moon Titan is composed of rock, water ice, and liquid methane, and it may support some form of life.'
    ]
  },
  uranus: {
    name: 'Uranus',
    adjective: 'Uranian',
    year: 30687.15,
    facts: [
      'The word “Uranus” has <a href="https://www.youtube.com/watch?v=h3ppbbYXMxE">no correct pronunciation</a> in English.',
      'It spins backwards and is tilted on its side. It may have suffered a catastrophic collision with another body at some point, causing these unusual phenomena.',
      'Its moons are named for characters from William Shakespeare and Alexander Pope.'
    ]
  },
  neptune: {
    name: 'Neptune',
    adjective: 'Neptunian',
    year: 60190.03,
    facts: [
      'It is the windiest place in the solar system, with sustained wind speeds as high as 2,100 kilometers per hour.',
      'It was the first planet to be discovered by mathematical prediction rather than by observation.',
      'It has fourteen known moons, and a ring system with two main rings.'
    ]
  },
  pluto: {
    name: 'Pluto',
    adjective: 'Plutonian',
    year: 90570,
    facts: [
      'It was named after the Roman god of the underworld by an eleven-year-old English schoolgirl.',
      'It was first visited by humans in 2015 by the New Horizons spacecraft.',
      'It should properly be thought of as a binary planet together with its moon Charon, since the barycenter of the Pluto-Charon orbit actually lies between the two bodies.'
    ]
  },
  'ceres': {
    name: 'Ceres',
    adjective: 'Cerean',
    year: 1681.63,
    facts: [
      'It is the largest object in the asteroid belt between the orbits of Mars and Jupiter, but small enough that an Earth airplane could circle it in an hour.',
      'It was discovered in 1801 and was referred to as a planet for about fifty years, before more large similar asteroids were discovered.',
      'The Dawn spacecraft was the first human mission to Ceres, which it reached in 2015 after spending more than a year at Vesta.'
    ]
  },
  vesta: {
    name: 'Vesta',
    adjective: 'Vestan',
    year: 1325.75,
    facts: [
      'It is an asteroid that has three side-by-side craters that look like a snowman when viewed from above.',
      'It was visited by the Dawn spacecraft in 2011.'
    ]
  },
  eris: {
    name: 'Eris',
    adjective: 'Eridian',
    year: 203830,
    facts: [
      'It is more than twice as far from the sun as Pluto. It it about Pluto’s size, and it has one moon called Dysnomia.'
    ]
  },
  sedna: {
    name: 'Sedna',
    adjective: 'Sednan',
    year: 4143736,
    facts: [
      'It will be at its closest point to the Sun in 2075-76, and won’t come that close again for another 12,000 years.'
    ]
  },
  quaoar: {
    name: 'Quaoar',
    adjective: 'Quaoaran',
    year: 104451.3,
    facts: [
      'It is pronounced “kwa-war” and is named for the creator god of the Tongva people, who are indigenous to the Los Angeles area.'
    ]
  },
  kepler22b: {
    name: 'Kepler-22b',
    adjective: 'Kepler-22b-ian',
    year: 289.862,
    facts: [
      'It is about two and a half times the size of the Earth, lies in its solar system’s “habitable zone”, and might have a surface covered with liquid water.'
    ]
  },
  halley: {
    name: 'Halley’s Comet',
    adjective: 'Hallean',
    year: 26503.325,
    facts: [
      'It was observed at least as far back as 240 BCE, and has been recorded by Babylonian, Chinese, and European astronomers. It will next be visible from Earth in 2061.'
    ]
  },
  halebopp: {
    name: 'Comet Hale-Bopp',
    adjective: 'Hale-Bopp-ian',
    year: 873312.75,
    facts: [
      'It was visible to the naked eye, even in cities with light pollution, in early 1997. A solar eclipse on March 9th allowed people to see it during daytime.'
    ]
  },
  luna1: {
    name: 'Luna 1',
    adjective: 'Luna 1-ian',
    year: 450,
    facts: [
      'In 1959, it was the first spacecraft to go to the Moon, sent by the Soviet Union, but it missed its orbital target and went into solar orbit.'
    ]
  },
  pioneer4: {
    name: 'Pioneer 4',
    adjective: 'Pioneer 4-ian',
    year: 398,
    facts: [
      'It was sent by the United States to fly by the Moon in 1959, and is still in orbit of the Sun.'
    ]
  },
  spitzer: {
    name: 'Spitzer Space Telescope',
    adjective: 'Spitzerian',
    year: 363,
    facts: [
      'It is in orbit of the Sun, following behind the Earth, and is used for observing deep space, particularly planets in other solar systems.'
    ]
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

function getRandomFromArray(arr) {;
  return arr[Math.floor(Math.random() * arr.length)];
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
      $('#facts').html('<p>' + planet.name + ' makes one orbit every ' + insertCommas(planet.year) + ' Earth days.</p><p>' + getRandomFromArray(planet.facts) + '</p>');
    }
  } else {
    $('#next-birthday').html('<span class="error">Not a valid date</span>');
  }
});

$('#toggle-license').click(function(event) {
  event.preventDefault();
  $('#license').slideToggle('fast');
});

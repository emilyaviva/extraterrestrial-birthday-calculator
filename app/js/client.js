'use strict';

$('#input-date').on('submit', function(event) {
  event.preventDefault();
  var userDate = ('#input-date').val();
  $('#earth-date').html(userDate);
});

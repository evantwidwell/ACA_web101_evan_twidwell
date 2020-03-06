// This basically just listens for click and then adds a div every time.
'use strict';

$(document).ready(function() {
  let color = 'black';
  $('.column').click(function() {
    $(this).prepend(`<div class="disc ${color}"></div>`);
    if (color === 'red') {
      color = 'black';
    } else {
      color = 'red';
    }
  });
});
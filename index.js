document.addEventListener('DOMContentLoaded', function() {
  // Select the elements to animate
  var elements = document.querySelectorAll('.reveal');

  // Add the "visible" class to the elements
  elements.forEach(function(element) {
    element.classList.add('visible');
  });
});


$('.slide-up-link').click(function() {
  $('.slide-up').addClass('animated');
});

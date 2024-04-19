document.getElementById("facebookIcon").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  // Redireccionar a la página de Facebook en una nueva ventana
  window.open("https://www.facebook.com/shirley.martinez.12327");
});

document.getElementById("githubIcon").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  // Redireccionar a la página de Facebook en una nueva ventana
  window.open("https://github.com/justosher21");
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


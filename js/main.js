$(document).ready(function() {

  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');

  //  Semantic UI settings 
  $(".ui.dropdown").dropdown();
  $('.ui.sidebar').sidebar();

  // to manage the active tab 
  $(".button").click(function () {
    $(this).addClass("active");
    $(".button").not(this).removeClass("active");
  });


  // add the map count-up 
  var odometer = new Odometer({
    el: $('.odometer')[0],
    value: 0,
    theme: 'minimal',
    duration: 3000
  });
  odometer.render();

  $('.odometer').text(22);

  // add smooth scrolling 
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // callback after the animation
          });
        }
      }
    });
});

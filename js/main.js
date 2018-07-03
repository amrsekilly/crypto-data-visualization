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
});

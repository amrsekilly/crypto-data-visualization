$(document).ready(function() {

  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');

  //  Semantic UI settings 
  $(".ui.dropdown").dropdown();
  $('.ui.sidebar').sidebar();

});

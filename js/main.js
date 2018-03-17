$(document).ready(function() {

  // The History API Management
  // For smooth page transitions
  // for moving between the pages
  var $wrap = $("#wrap");
  $wrap.on("click", ".page-link", function (event) {
    event.preventDefault();
    if (window.location === this.href) {
      return;
    }
    var pageTitle = (this.title) ? this.title : this.textContent;
    History.pushState(null, pageTitle, this.href);
  });

  // To load the new page's content in the new view
  History.Adapter.bind(window, "statechange", function () {
    var state = History.getState();
    $.get(state.url, function (res) {
      $.each($(res), function (index, elem) {
        if ($wrap.selector !== "#" + elem.id) {
          return;
        }
        $wrap.html($(elem).html());
      });
    });
  });

  //  Semantic UI settings 
  $('#slider').cycle({
    fx: 'fade',
    pause: 1,
    next: '#next2',
    prev: '#prev2',
    delay: 2000
  });
  $(".ui.dropdown").dropdown();
  $('.ui.sidebar').sidebar();

  

});

$(document).ready(function() {

  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');

  var $wrap = $("#wrap");
  // to change the active tab 
  function changeActiveTab() {
    // manage the active button
    var selectedPage =  window.location.pathname.split('/').pop();
    var pageCategory = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
    $('#nav-buttons').find('a').each(function () {   
      $(this).toggleClass('active', $(this).attr('href').split('/').slice(Math.max($(this).attr('href').split('/').length - 2)).join("/") == window.location.pathname.split('/').slice(Math.max(window.location.pathname.split('/').length - 2)).join("/"));
    });
  }

  // select the active tab once the page is reloaded 
  changeActiveTab();

  // The History API Management
  // For smooth page transitions
  // for moving between the pages
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
        changeActiveTab();
      });
    });
  });



  //  Semantic UI settings 
  $(".ui.dropdown").dropdown();
  $('.ui.sidebar').sidebar();

});

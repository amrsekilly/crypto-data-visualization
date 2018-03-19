$(document).ready(function() {


  var $wrap = $("#wrap");
  // to change the active tab 
  function changeActiveTab() {
    // manage the active button
    var selectedPage = './' + window.location.pathname.split('/').pop() || "./";
    $('#nav-buttons').find('a').each(function () {
      $(this).toggleClass('active', $(this).attr('href') == selectedPage);
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


  // the slider 
  $('.slider-nav')
    .on('init', function (event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 5,
      draggable: false,
      slidesToScroll: 1,
      arrows: false,
      focusOnSelect: false,
      swipeToSlide: false,
      infinite: true,
      centerMode: true,
      centerPadding: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    });

  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    responsive: [{
      breakpoint: 420,
      settings: {
        arrows: false,
      }
    }]
  });

  // to manage the active photo
  $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });

  $('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });


});

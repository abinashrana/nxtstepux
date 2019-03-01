console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

// slider block roles

$('.block-roles-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

// slider block blog

$('.block-blog-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
});


// slider block businesses

$('.block-businesses-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
});

$(document).ready(function(){
  $('.dropdown-submenu a.dropdown-search__input').on('click', function(e){
    $(this).toggleClass('selected');
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});


//
//off cnavas

'use strict'

$('body').on('click','[data-offcanvasFrom="offcanvas"]', function () {
	var target = $(this).data('target');
	$('#'+target).addClass('open');
	$('body').addClass('offCanvas-open');
	$('body').append('<div class="backdrop" data-offcanvasFromOut="offcanvas" data-target='+target+' />');
	$('[data-toggle="popover"]').popover()
});


$('body').on('click','[data-offcanvasFromOut="offcanvas"]', function () {
	var target = $(this).data('target');
	$('#'+target).removeClass('open');
	$('body').removeClass('offCanvas-open');
	$('body').find('.backdrop').remove();
});



var offCanvasLayout = (function() {

    function offCanvasOn() {
        // $('.sidenav-toggler').addClass('active');
        // $('.sidenav-toggler').data('action', 'sidenav-unpin');
        // $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
        // $('body').append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target='+$('#sidenav-main').data('target')+' />');

        // // Store the sidenav state in a cookie session
        // Cookies.set('sidenav-state', 'pinned');
    }

    function offCanvasOFF() {
        // $('.sidenav-toggler').removeClass('active');
        // $('.sidenav-toggler').data('action', 'sidenav-pin');
        // $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
        // $('body').find('.backdrop').remove();

        // // Store the sidenav state in a cookie session
        // Cookies.set('sidenav-state', 'unpinned');
    }

    // Set sidenav state from cookie

    // var $sidenavState = Cookies.get('sidenav-state') ? Cookies.get('sidenav-state') : 'pinned';

    // if($(window).width() > 1200) {
    //     if($sidenavState == 'pinned') {
    //         pinSidenav()
    //     }

    //     if(Cookies.get('sidenav-state') == 'unpinned') {
    //         unpinSidenav()
    //     }
    // }

    $('body').on('click', '[data-collapse]', function(e) {

        e.preventDefault();

        var $this = $(this);
        var action = $this.data('action');
        var target = $this.data('target');


        // Manage actions

        switch (action) {
            case 'sidenav-pin':
                pinSidenav();
            break;

            case 'sidenav-unpin':
                unpinSidenav();
            break;

            case 'search-show':
                target = $this.data('target');
                $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-showing');

                setTimeout(function() {
                    $('body').removeClass('g-navbar-search-showing').addClass('g-navbar-search-show');
                }, 150);

                setTimeout(function() {
                    $('body').addClass('g-navbar-search-shown');
                }, 300)
            break;

            case 'search-close':
                target = $this.data('target');
                $('body').removeClass('g-navbar-search-shown');

                setTimeout(function() {
                    $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-hiding');
                }, 150);

                setTimeout(function() {
                    $('body').removeClass('g-navbar-search-hiding').addClass('g-navbar-search-hidden');
                }, 300);

                setTimeout(function() {
                    $('body').removeClass('g-navbar-search-hidden');
                }, 500);
            break;
        }
    })


    // Add sidenav modifier classes on mouse events

    // $('.sidenav').on('mouseenter', function() {
    //     if(! $('body').hasClass('g-sidenav-pinned')) {
    //         $('body').removeClass('g-sidenav-hide').removeClass('g-sidenav-hidden').addClass('g-sidenav-show');
    //     }
    // })

    // $('.sidenav').on('mouseleave', function() {
    //     if(! $('body').hasClass('g-sidenav-pinned')) {
    //         $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hide');

    //         setTimeout(function() {
    //             $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden');
    //         }, 300);
    //     }
    // })


    // Make the body full screen size if it has not enough content inside
    // $(window).on('load resize', function() {
    //     if($('body').height() < 800) {
    //         $('body').css('min-height', '100vh');
    //         $('#footer-main').addClass('footer-auto-bottom')
    //     }
    // })

})();



//
// Navbar collapse
//


var NavbarCollapse = (function() {

	// Variables

	var $nav = $('.navbar-nav'),
		$collapse = $('.navbar .navbar-custom-collapse');


	// Methods

	function hideNavbarCollapse($this) {
		$this.addClass('collapsing-out');
	}

	function hiddenNavbarCollapse($this) {
		$this.removeClass('collapsing-out');
	}


	// Events

	if ($collapse.length) {
		$collapse.on({
			'hide.bs.collapse': function() {
				hideNavbarCollapse($collapse);
			}
		})

		$collapse.on({
			'hidden.bs.collapse': function() {
				hiddenNavbarCollapse($collapse);
			}
		})
	}

})();


//
// Scrollbar
//

'use strict';

var Scrollbar = (function() {

	// Variables

	var $scrollbar = $('.scrollbar-inner');


	// Methods

	function init() {
		$scrollbar.scrollbar().scrollLock()
	}


	// Events

	if ($scrollbar.length) {
		init();
	}

})();

// 
// Calender
// 



$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      center: 'title',
      left: 'prev',
      right: 'next'
    },
    buttonIcons:{
      prev: 'angle-left',
      next: 'angle-right'
    },
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    theme:false,
    defaultDate: '2019-01-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'Asia New Zealand',
        start: '2019-01-01'
      },
      {
        title: 'Long Event',
        start: '2019-01-07',
        end: '2019-01-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2019-01-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2019-01-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-01-11',
        end: '2019-01-13'
      },
      {
        title: 'Meeting',
        start: '2019-01-12T10:30:00',
        end: '2019-01-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2019-01-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2019-01-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2019-01-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2019-01-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2019-01-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-01-28'
      }
    ]
  });

});


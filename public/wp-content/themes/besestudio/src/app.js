/**
 * 1. Search Popup
 * 2. Index Tiled
 * 3. Menu Mobile
 * 4. Project Detail
 * 5. Preload
 */

'use strict';


(function ($) {

$('#besestudio').vide({
		  mp4: 'https://res.cloudinary.com/bese/video/upload/v1539128544/intro',
		  webm: 'uploads/intro',
		  ogv: 'uploads/intro',
		  poster: 'uploads/intro'
		});

 

	$.fn.kellyMagnificPopup = function (opts) {

		var $self = $(this),
			options = $.extend({
				delegate   : '.media',
				type       : 'image',
				tLoading   : '<div class="dots">\
							<div class="dot active"></div>\
							<div class="dot active"></div>\
							<div class="dot active"></div>\
							<div class="dot active"></div>\
						</div>',
				mainClass  : 'mfp-img-mobile',
				gallery    : {
					enabled           : true,
					navigateByImgClick: true,
					preload           : [0, 3] // Will preload 0 - before current, and 1 after the current image
				},
				image      : {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
				},
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
				callbacks  : {
					markupParse      : function (item) {
					},
					imageLoadComplete: function () {
						var $container = $('.mfp-container');

						$container.addClass('load-done');
						setTimeout(function () {
							$container.addClass('load-transition');
						}, 50);
					},
					change           : function () {
						var $container = $('.mfp-container');
						$container.removeClass('load-done load-transition');
					}

				}
			}, $self.data(), opts);
		$('.media', $self).each( function () {
			var href = $(this).data('url');

			if (href && href !== '') {
				$(this).attr('href', href);
			}

		});
		$self.magnificPopup(options);
	};

	$(document).ready(function () {
		

		var beseInterval;
		function playDemo (id, interval) {
		  
		  $('#loading-progress').animate({
		    'opacity': '1'
		  });
		  var p = 0;
		  $('#' + id).loadgo('resetprogress');
		  $('#loading-progress').html('0%');
		  window.setTimeout(function () {
		    interval = window.setInterval(function (){
		      if ($('#' + id).loadgo('getprogress') === 100) {
		        window.clearInterval(interval);
		       	$('#intro').addClass("page-loaded");
		       	$('.page-loading').fadeIn('slow');
		        $('#loading-progress').animate({
		          'opacity': '0'
		        });
		        return;
		      }

		      var prog = p * 2;
		      $('#' + id).loadgo('setprogress', prog);
		      $('#loading-progress').html(prog + '%');
		      p++;
		    }, 250);
		  }, 300);

		}
		$(window).load(function () {
		  $("#loading-logo").load(function() {
		    // Example #1
		    $('#loading-logo').loadgo({
		    	'direction': 'lr'
		    });
		    playDemo('loading-logo', beseInterval);
		  }).each(function() {
		    if (this.complete) {
		      $(this).load();

		    }
		  });
		});

		var $header = $('.header'),
			$search = $('.fa-search', $header);

		// 1. Search Popup
		if ($search.length) {
			var $boxSearch = $('.box-search', $header);

			$search.on('click', function (event) {
				event.preventDefault();
				$boxSearch.addClass('active');
				$('.search-field', $boxSearch).focus();
			});

			$('.kd-close', $boxSearch).on('click', function (event) {
				event.preventDefault();
				$boxSearch.removeClass('active');
			});



			$(document).on('keydown', function (event) {

				if (event.keyCode === 27) {

					$boxSearch.removeClass('active');
				}
			});

		}

		// 2. Index Tiled
		var $tiled = $('.tiled-gallery');

		if ($tiled.length) {
			var ww = $(window).width(),
				margins = 6;

			if (ww <= 600) {
				margins = 0;
			}
			$tiled.justifiedGallery({
				rowHeight: 220,
				margins: margins,
				lastRow: 'justify',
				randomize: false
			});
		}

		// 3. Menu Mobile
		var $btnMenu = $('.menu-mobile'),
			$hideMenu = $('.hide-menu');

		$btnMenu.on('click', function () {
			$header.toggleClass('active');

			if ($header.hasClass('active')) {
				$hideMenu.addClass('active');
			}
			else {
				$hideMenu.removeClass('active');
			}
		});
		$hideMenu.on('click', function () {
			$header.removeClass('active');
			$hideMenu.removeClass('active');
		});

		$('.menu-item-has-children', '.main-menu').on('click', ' > a', function (e) {
			var ww = $(window).width();

			if (ww <=991) {
				var $parent = $(e.target).closest('.menu-item-has-children');
				e.preventDefault();
				$('>.sub-menu', $parent).slideToggle(400);
			}
		});


		
		// 5. Preload

		var $preload = $('#preload');

		if ($preload.length) {
			$(window).on('load', function () {
				$preload.fadeOut(400);
			});
		}


		// 6. Background video
		
		

		

		initOwl();

		
		
	});

	
	function initMagnific(){
		// 4. Project Details
		var $imageProject = $('.images-project');

		if ( $imageProject.length) {
			$imageProject.kellyMagnificPopup({
				delegate: 'a'
			});
		}

	}
	

	function initOwl() {
		//owl carousel
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    autoplay:true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        600:{
		            items:3,
		            nav:false
		        },
		        1000:{
		            items:3,
		            nav:true,
		            loop:false
		        }
		    }
		});

		function resizeImageOwl() {
			// resize image Owl
			var height = $(window).height() - 120;

			if($(window).width() <= 599){
				$(".slide-image").css("height", height);
			} else {
				$(".slide-image").css("height", height)
			}
		}
		resizeImageOwl();
		

		$(window).resize(function() {
			resizeImageOwl();
		});
	}
	
	

	$(function() {

		if(Modernizr.history) {
			var $mainContent = $('#content'),
			$menuNav = $('nav li');


			$('nav a').click(function() {
				if($("#intro").hasClass('front_page')) {
					var _href = $(this).attr("href");
					history.pushState(null, null, _href);
					loadContent(_href);
					return false;
				}
			});

			function loadContent(href) {
				$.ajax({
				    type: "GET",
				    url: "/wp-content/themes/besestudio/template-parts/content-"+href+".php",
				    dataType: "html"
				}).done(function( data ) {
				    $mainContent.fadeOut(function() { 
				    	$mainContent.fadeIn(1300).html(data);
						
						if(href == 'home')
				    		initOwl();


				    	$menuNav.removeClass('active');
				    	$("nav ." + href + "").addClass("active");

				    	if(href.indexOf("bese") >= 0) {
				    		$("nav .collection").addClass("active");
				    		$(".main-menu .sub-menu").addClass("sub-menu-collection-page");

						    $('.lazy').lazy({
						    	delay: 5000,
					            placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."
					        });
						    
				    		initMagnific();
				    	} else {
				    		$(".main-menu .sub-menu").removeClass("sub-menu-collection-page");
				    	}
				    	
				    });
				});
			}

			$(window).bind("popstate", function() {
				var _href = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
       			loadContent(_href);
			});
		}
	});



})(jQuery);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/wp-content/themes/besestudio/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/wp-content/themes/besestudio/src/app.css":
/*!*********************************************************!*\
  !*** ./public/wp-content/themes/besestudio/src/app.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./public/wp-content/themes/besestudio/src/js/app.js":
/*!***********************************************************!*\
  !*** ./public/wp-content/themes/besestudio/src/js/app.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_version1_0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/version1.0.js */ "./public/wp-content/themes/besestudio/src/js/version1.0.js");
/* harmony import */ var _js_version1_0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_version1_0_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.css */ "./public/wp-content/themes/besestudio/src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_1__);
//import $ from 'jquery';



/***/ }),

/***/ "./public/wp-content/themes/besestudio/src/js/version1.0.js":
/*!******************************************************************!*\
  !*** ./public/wp-content/themes/besestudio/src/js/version1.0.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    $('#besestudio').vide({
      mp4: 'https://res.cloudinary.com/bese/video/upload/v1539128544/intro',
      webm: 'uploads/intro',
      ogv: 'uploads/intro',
      poster: 'uploads/intro'
    });
    setTimeout(function beseLoading() {
      $("#loading-logo").fadeIn();
      var beseInterval;

      function playDemo(id, interval) {
        $('#loading-progress').animate({
          'opacity': '1'
        });
        var p = 0;
        $('#' + id).loadgo('resetprogress');
        $('#loading-progress').html('0%');
        window.setTimeout(function () {
          interval = window.setInterval(function () {
            if ($('#' + id).loadgo('getprogress') === 100) {
              window.clearInterval(interval);
              $('body').css("background", "#ffffff");
              $('#intro').addClass("page-loaded");
              $('.page-loading').fadeIn('slow');
              $('#loading-progress').animate({
                'opacity': '0'
              });
              return;
            }

            var prog = p * 4;
            $('#' + id).loadgo('setprogress', prog);
            $('#loading-progress').html(prog + '%');
            p++;
          }, 250);
        }, 300);
      }

      $("#loading-logo").load(function () {
        $('#loading-logo').loadgo({
          'direction': 'lr'
        });
        playDemo('loading-logo', beseInterval);
      }).each(function () {
        if (this.complete) {
          $(this).load();
        }
      });
    }, 1000); //*** GALLERYY**/

    $('.popup').magnificPopup({
      type: 'image',
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true
      },
      gallery: {
        enabled: true
      }
    });
    var $header = $('.header');
    var $btnMenu = $('.menu-mobile'),
        $hideMenu = $('.hide-menu'),
        $navMenu = $('nav a');
    $btnMenu.on('click', function () {
      $header.toggleClass('active');

      if ($header.hasClass('active')) {
        $hideMenu.addClass('active');
      } else {
        $hideMenu.removeClass('active');
      }
    });
    $hideMenu.on('click', function () {
      $header.removeClass('active');
      $hideMenu.removeClass('active');
    });
    $navMenu.on('click', function () {
      $header.removeClass('active');
      $hideMenu.removeClass('active');
    });
    $('.menu-item-has-children', '.main-menu').on('click', ' > a', function (e) {
      var ww = $(window).width();

      if (ww <= 991) {
        var $parent = $(e.target).closest('.menu-item-has-children');
        e.preventDefault();
        $('>.sub-menu', $parent).slideToggle(400);
      }
    });
    var $preload = $('#preload');

    if ($preload.length) {
      $(window).on('load', function () {
        $preload.fadeOut(400);
      });
    }

    initOwl();
  });

  function initOwl() {
    //owl carousel
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 3,
          nav: true,
          loop: false
        }
      }
    });

    function resizeImageOwl() {
      // resize image Owl
      var height = $(window).height() - 120;

      if ($(window).width() <= 599) {
        $(".slide-image").css("height", height);
      } else {
        $(".slide-image").css("height", height);
      }
    }

    resizeImageOwl();
    $(window).resize(function () {
      resizeImageOwl();
    });
  }

  $(function () {
    if (Modernizr.history) {
      var loadContent = function loadContent(href) {
        $.ajax({
          type: "GET",
          url: href,
          dataType: "html"
        }).done(function (data) {
          // $mainContent.fadeOut(function() {                                                                  
          console.log(href);
          $menuNav.removeClass('active');
          $(".navigation a").removeClass("active");
          $(".sub-menu-collection-page a").removeClass("active"); //alert(href);

          if (href.indexOf("collection") >= 0) {
            $("nav .collection").addClass("active");
            $(".main-menu .sub-menu").addClass("sub-menu-collection-page"); //single collection

            var hrefArray = href.split("/");

            if (hrefArray.length >= 7) {
              var modifiedSingleCollectionHref = '/' + hrefArray[3] + '-' + hrefArray[4];
              href = modifiedSingleCollectionHref;
            } // end single collection
            //removes / in the start and replaces / with -


            var collectionHref = href.substring(1).replace('/', '-');
            $("nav ." + collectionHref + "").addClass("active");
            $("nav ." + collectionHref + " a").addClass("active");
          } else {
            //console.log(href.indexOf("?page"));
            var modifiedHref = href.substring(1);
            $("nav ." + modifiedHref + "").addClass("active");
            $("nav ." + modifiedHref + " a").addClass("active");
            $(".main-menu .sub-menu").removeClass("sub-menu-collection-page");
          }

          var $response = $(data);
          var onlyContent = $response.find("#content").html();
          $mainContent.css('display', 'none');
          $mainContent.fadeIn().html(onlyContent);
          if (href == '/home') initOwl();
          $('.popup').magnificPopup({
            type: 'image',
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
              verticalFit: true
            },
            gallery: {
              enabled: true
            }
          }); // })
        });
      };

      var $mainContent = $('#content'),
          $menuNav = $('nav li');
      $(document).on('click', '.navigation a', function (e) {
        if ($("#intro").hasClass('front_page')) {
          if ($(this).hasClass('active')) {
            return false;
          }

          var _href = $(this).data("target");

          history.pushState(null, null, _href);
          loadContent(_href);
          return false;
        }
      });
      $(window).bind("popstate", function () {
        var _href = location.pathname.replace(/^.*[\\\/]/, '');

        loadContent(_href);
      });
    }
  });
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map
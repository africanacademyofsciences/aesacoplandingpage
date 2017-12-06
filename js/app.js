
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jqueryFunctions = __webpack_require__(1);
	
	var _jqueryFunctions2 = _interopRequireDefault(_jqueryFunctions);
	
	var _equalize = __webpack_require__(2);
	
	var _equalize2 = _interopRequireDefault(_equalize);
	
	var _blog = __webpack_require__(3);
	
	var _blog2 = _interopRequireDefault(_blog);
	
	var _header = __webpack_require__(4);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _videos = __webpack_require__(5);
	
	var _videos2 = _interopRequireDefault(_videos);
	
	var _images = __webpack_require__(6);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _mobileMenu = __webpack_require__(7);
	
	var _mobileMenu2 = _interopRequireDefault(_mobileMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initScripts = function initScripts() {
	  _equalize2.default.bio();
	  _equalize2.default.resource();
	  _images2.default.makeResponsive();
	  _header2.default.setAffix();
	  _header2.default.setNest();
	};
	
	// Global DOM events
	$(document).ready(function documentReady() {
	  window.modalShown = 0;
	
	  // Strip HS grid styles
	  $('link[href$="layout.min.css"], link[href$="hubspot-default-no-style.min.css"]').remove();
	
	  initScripts();
	  _mobileMenu2.default.init();
	  _videos2.default.init();
	  _videos2.default.wrapYoutube();
	
	  if ($('footer.subscribe-bar').length > 0) {
	    $('body').addClass('subscribe-bar-active');
	    $('footer.subscribe-bar button.close').click(function subscribeBarClose() {
	      $('footer.subscribe-bar').addClass('closed');
	      $('body').removeClass('subscribe-bar-active');
	    });
	  }
	
	  $('button.sign-up-today').click(function signUpTodayClicked() {
	    $('.modal-nest').addClass('shown');
	    _blog2.default.adjustModalHeight();
	  });
	
	  // Prevents static carousel from speeding up once clicked
	  $('.carousel').carousel({
	    interval: false
	  });
	
	  $(document).on('mouseleave', '.carousel', function pauseCarousel() {
	    $(this).carousel('pause');
	  });
	
	  // Subscribe billboard
	  $('#subscribe-billboard').wrapInner('<div class="inner"></div>');
	  $('#subscribe-billboard').append('<div class="img-overlay" style="background-image:url(http://img.jillkonrath.com/hs-fs/hub/110248/file-2272550344-jpg/assets/images/jl-contribute.jpg?v=4);"></div>');
	
	  var $modalNest = $('.modal-nest');
	  if ($modalNest.length > 0) {
	    $('.subscribe-modal__close').click(function closeSubscribeModal() {
	      $modalNest.removeClass('shown');
	    });
	  }
	});
	
	$(window).load(function windowLoad() {
	  initScripts();
	  $('.off-canvas').css('display', 'block');
	  $('footer.subscribe-bar input[type="email"]').attr('placeholder', 'Your Email');
	  $('.subscribe-simple input[type="email"]').attr('placeholder', 'Your Email');
	  $('.subscribe-modal div > span > div').prepend('<p>' + window.signupMessage + '</p>');
	  $('select').each(function eachSelect() {
	    $(this).wrap('<div class="styled-select"></div>');
	  });
	});
	
	$(window).resize(function windowResize() {
	  initScripts();
	});
	
	$(window).scroll(function windowScroll() {
	  var $modalNest = $('.modal-nest');
	
	  if ($modalNest.length > 0) {
	    var progress = document.body.scrollTop / (document.body.clientHeight - window.innerHeight) * 100;
	
	    if (progress > 80 && window.modalShown < 1) {
	      $modalNest.addClass('shown');
	      window.modalShown++;
	    }
	  }
	});
	
	// Page specific DOM events
	if ($('body').hasClass('resources-primary')) {
	  $(document).ready(function documentReady() {
	    _equalize2.default.resourceHeader();
	
	    $('.individual-resource').each(function eachResource() {
	      var href = $(this).find('a').attr('href');
	      $(this).find('h3').wrap('<a href="' + href + '"></a>');
	    });
	  });
	  $(window).load(function windowLoad() {
	    _equalize2.default.resourceHeader();
	  });
	  $(window).resize(function windowResize() {
	    _equalize2.default.resourceHeader();
	  });
	}
	
	if ($('body').hasClass('three-col')) {
	  $(document).ready(function documentReady() {
	    _equalize2.default.threeCol();
	  });
	  $(window).load(function windowLoad() {
	    _equalize2.default.threeCol();
	  });
	  $(window).resize(function windowResize() {
	    _equalize2.default.threeCol();
	  });
	}
	
	if ($('body').hasClass('speaking-complex')) {
	  $(document).ready(function documentReady() {
	    _equalize2.default.speaking();
	  });
	  $(window).load(function windowLoad() {
	    _equalize2.default.speaking();
	  });
	  $(window).resize(function windowResize() {
	    _equalize2.default.speaking();
	  });
	}
	
	if ($('body').hasClass('book-listing-complex')) {
	  $(document).ready(function documentReady() {
	    _equalize2.default.bookListing();
	  });
	  $(window).load(function windowLoad() {
	    _equalize2.default.bookListing();
	  });
	  $(window).resize(function windowResize() {
	    _equalize2.default.bookListing();
	  });
	}
	
	if ($('body').hasClass('book-detail-complex')) {
	  $(document).ready(function documentReady() {
	    _equalize2.default.testimonials();
	  });
	  $(window).load(function windowLoad() {
	    _equalize2.default.testimonials();
	  });
	  $(window).resize(function windowResize() {
	    _equalize2.default.testimonials();
	  });
	}
	
	if ($('body').hasClass('two-col-resources')) {
	  $(document).ready(function documentReady() {
	    var viewportWidth = $(window).width();
	    if (viewportWidth < 768) {
	      $('.resource-feature').each(function eachResourceFeature() {
	        $(this).find('.resource-image a').swapWith($(this).find('.resource-content .rc-title'));
	      });
	    }
	  });
	}
	
	if ($('body').hasClass('resources-primary')) {
	  $(document).ready(function documentReady() {
	    var isInIFrame = window.location !== window.parent.location;
	    if (isInIFrame !== true) {
	      $('.resource-grid > span > div > li').unwrap().unwrap();
	    }
	    $('.subscribe-area.additional-header .form-title').append('<span>Join 130,000+ other savvy sellers who get Jill\'s fresh sales strategies, practical advice, and helpful resources delivered to their inbox each week.</span>');
	  });
	}
	
	_blog2.default.init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	$.fn.swapWith = function swapWith(to) {
	  return this.each(function eachElem() {
	    var copyTo = $(to).clone(true);
	    var copyFrom = $(this).clone(true);
	    $(to).replaceWith(copyFrom);
	    $(this).replaceWith(copyTo);
	  });
	};
	
	$.fn.waitUntilExists = function waitUntilExists(handler, shouldRunHandlerOnce, isChild) {
	  var found = 'found';
	  var $this = $(this.selector);
	  var $elements = $this.not(function eachElem() {
	    return $(this).data(found);
	  }).each(handler).data(found, true);
	
	  if (!isChild) {
	    (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] = window.setInterval(function waiting() {
	      $this.waitUntilExists(handler, shouldRunHandlerOnce, true);
	    }, 500);
	  } else if (shouldRunHandlerOnce && $elements.length) {
	    window.clearInterval(window.waitUntilExists_Intervals[this.selector]);
	  }
	
	  return $this;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	exports.resource = function () {
	  var viewportWidth = $(window).width();
	  $('.sales-resources, .resources-list').removeAttr('style');
	  var resourcesHeight = $('.sales-resources').outerHeight();
	  var wrapHeight = $('.resource-wrap').outerHeight();
	  if (viewportWidth >= 768) {
	    if (wrapHeight < resourcesHeight) {
	      $('.resource-list').css('height', resourcesHeight / 2);
	    } else {
	      $('.sales-resources').css('height', wrapHeight);
	      $('.resource-list').css('height', wrapHeight / 2);
	    }
	  } else {
	    $('.resources-list').css('height', 'auto');
	  }
	};
	
	exports.resourceHeader = function () {
	  var $left = $('.header-left');
	  var $right = $('.video-nest');
	
	  $left.css('height', 'auto');
	  $right.css('height', 'auto');
	
	  var leftHeight = $left.outerHeight();
	  var rightHeight = $right.outerHeight();
	  var windowWidth = $(window).width();
	
	  if (windowWidth > 991) {
	    if (leftHeight > rightHeight) {
	      $right.css('height', leftHeight);
	    } else if (rightHeight > leftHeight) {
	      $left.css('height', rightHeight);
	    }
	  }
	};
	
	exports.bio = function () {
	  var viewportWidth = $(window).width();
	  var brandHeight = $('.homepage-brand').outerHeight();
	  if (viewportWidth >= 1280) {
	    $('.bio').css('height', brandHeight);
	  } else {
	    $('.bio').css('height', 'auto');
	  }
	};
	
	exports.threeCol = function () {
	  var leftcol = $('.left-column').outerHeight();
	  var middlecol = $('.middle-column').outerHeight();
	  var rightcol = $('.right-column').outerHeight();
	  var viewportWidth = $(window).width();
	  var greatest = 0;
	  if (viewportWidth > 768) {
	    if (greatest < leftcol) {
	      greatest = leftcol;
	    } else if (greatest < middlecol) {
	      greatest = middlecol;
	    } else if (greatest < rightcol) {
	      greatest = rightcol;
	    }
	
	    $('.left-column').css('height', greatest);
	    $('.middle-column').css('height', greatest);
	    $('.right-column').css('height', greatest);
	  } else {
	    $('.left-column').css('height', 'auto');
	    $('.middle-column').css('height', 'auto');
	    $('.right-column').css('height', 'auto');
	  }
	};
	
	exports.speaking = function () {
	  $('.top-area .left-column').css('height', 'auto');
	  $('.top-area .right-column').css('height', 'auto');
	  $('.mid-area .left-column').css('height', 'auto');
	  $('.mid-area .right-column').css('height', 'auto');
	  $('.bot-area .left-column').css('height', 'auto');
	  $('.bot-area .right-column').css('height', 'auto');
	  $('.offer-area').css('height', 'auto');
	  $('.subscribe-area').css('height', 'auto');
	
	  var topleftcol = $('.top-area .left-column').outerHeight();
	  var toprightcol = $('.top-area .right-column').outerHeight();
	  var midleftcol = $('.mid-area .left-column').outerHeight();
	  var midrightcol = $('.mid-area .right-column').outerHeight();
	  var botleftcol = $('.bot-area .left-column').outerHeight();
	  var botrightcol = $('.bot-area .right-column').outerHeight();
	  var offleftcol = $('.offer-area').outerHeight();
	  var offrightcol = $('.subscribe-area').outerHeight();
	  var viewportWidth = $(window).width();
	
	  if (viewportWidth > 768) {
	    if (topleftcol > toprightcol) {
	      $('.top-area .right-column').css('height', topleftcol);
	    } else if (topleftcol < toprightcol) {
	      $('.top-area .left-column').css('height', toprightcol);
	    }
	
	    if (midleftcol > midrightcol) {
	      $('.mid-area .right-column').css('height', midleftcol);
	    } else if (midleftcol < midrightcol) {
	      $('.mid-area .left-column').css('height', midrightcol);
	    }
	
	    if (botleftcol > botrightcol) {
	      $('.bot-area .right-column').css('height', botleftcol);
	    } else if (botleftcol < botrightcol) {
	      $('.bot-area .left-column').css('height', botrightcol);
	    }
	
	    if (offleftcol > offrightcol) {
	      $('.subscribe-area').css('height', offleftcol);
	    } else if (offleftcol < offrightcol) {
	      $('.offer-area').css('height', offrightcol);
	    }
	  } else {
	    $('.top-area .left-column').css('height', 'auto');
	    $('.top-area .right-column').css('height', 'auto');
	    $('.mid-area .left-column').css('height', 'auto');
	    $('.mid-area .right-column').css('height', 'auto');
	    $('.bot-area .left-column').css('height', 'auto');
	    $('.bot-area .right-column').css('height', 'auto');
	    $('.offer-area').css('height', 'auto');
	    $('.subscribe-area').css('height', 'auto');
	  }
	};
	
	exports.bookListing = function () {
	  var viewportWidth = $(window).width();
	  $('.books .book').each(function eachBook(index) {
	    var mod = (index + 1) % 2;
	    if (mod !== 1) {
	      $(this).addClass('even');
	    }
	    var leftcol = $(this).find('.book-info').outerHeight();
	    var rightcol = $(this).find('.quote-area').outerHeight();
	    if (viewportWidth > 1150) {
	      if (leftcol > rightcol) {
	        $(this).find('.quote-area').css('height', leftcol);
	      } else if (leftcol < rightcol) {
	        $(this).find('.book-info').css('height', rightcol);
	      }
	    } else {
	      $(this).find('.quote-area').css('height', 'auto');
	      $(this).find('.book-info').css('height', 'auto');
	    }
	  });
	};
	
	exports.testimonials = function () {
	  var viewportWidth = $(window).width();
	  $('.testimonials').each(function eachTestimonial() {
	    $(this).find('.testimonial-single').css('height', 'auto');
	    var max = $(this).outerHeight();
	    if (viewportWidth > 990) {
	      $(this).find('.testimonial-single').css('height', max);
	    } else {
	      $(this).find('.testimonial-single').css('height', 'auto');
	    }
	  });
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	exports.wrapTopicCounts = function () {
	  $('.widget-type-post_filter ul li a').each(function eachTopicLink() {
	    $(this).html($(this).html().replace(/(\([^)]+\))/, '<span class="count">$1</span>'));
	    var count = $(this).find('.count').html();
	    $(this).find('.count').html(count.substring(1, count.length - 1));
	  });
	};
	
	exports.init = function () {
	  if ($('body').hasClass('mj-blog')) {
	    $(document).ready(function documentReady() {
	      exports.wrapTopicCounts();
	      $('a.featured img').css('display', 'none');
	      $('a.featured img').css('display', 'block');
	
	      var viewportWidth = $(window).width();
	      if (viewportWidth <= 767) {
	        $('.post-item').each(function eachPostItem() {
	          $(this).find('.left a').swapWith($(this).find('.right .blog-title'));
	        });
	      }
	    });
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	exports.setNest = function () {
	  var nestHeight = $('.site-header > div').outerHeight();
	  $('.header-nest').css('height', nestHeight);
	};
	
	exports.setAffix = function () {
	  // Reset affix
	  $(window).off('.affix');
	  $('.site-header').removeData('bs.affix').removeClass('affix affix-top affix-bottom');
	
	  // Get distance from top for site header and create affix
	  var distance = $('.site-header').offset().top;
	  $('.site-header').affix({
	    offset: {
	      top: distance
	    }
	  });
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	exports.adjustVideoSize = function () {
	  $('.video-link').each(function eachVideoLink() {
	    $(this).find('figure').css('height', 'auto');
	    var height = $(this).find('figure').closest('.row-fluid').outerHeight();
	    $(this).find('figure').css('height', height);
	  });
	};
	
	exports.init = function () {
	  window.videoCount = 0;
	  var jsonpCallback = function jsonpCallback(data) {
	    $.each(data, function eachInData(key, val) {
	      if (key === 'thumbnail_url') {
	        window.thumbnailURL = val;
	      }
	    });
	  };
	
	  $('.video-link').each(function eachVideoLink() {
	    window.videoCount++;
	    $(this).attr('id', 'vc' + window.videoCount);
	    var url = $(this).attr('href');
	    $.ajax({
	      url: 'http://fast.wistia.com/oembed/?url=' + encodeURIComponent(url),
	      dataType: 'jsonp',
	      crossDomain: true,
	      cache: false,
	      jsonp: 'callback',
	      jsonpCallback: 'jsonpCallback',
	      success: function wistiaData(data) {
	        jsonpCallback(data);
	        $('.video-link#vc' + window.videoCount + ' figure').css('background-image', 'url("' + window.thumbnailURL + '")');
	        exports.adjustVideoSize();
	      }
	    });
	  });
	};
	
	exports.wrapYoutube = function () {
	  $('iframe[src*="youtube.com"]').each(function eachYoutubeEmbed() {
	    $(this).wrap('<div class="video-container"></div>');
	  });
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _videos = __webpack_require__(5);
	
	var _videos2 = _interopRequireDefault(_videos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.makeResponsive = function () {
	  $('.combo.image img').css('display', 'none');
	  $('.combo.image img').each(function eachImage() {
	    $(this).parent().css('height', 'auto');
	    var height = $(this).closest('.row-fluid').outerHeight();
	    $(this).parent().css('height', height);
	  });
	  $('.combo.image').imagefill();
	  $('.combo.image img').css('display', 'block');
	  _videos2.default.adjustVideoSize();
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	exports.init = function () {
	  $('#hs_menu_wrapper_module_14198823314745 > ul').clone().appendTo('.overlay nav');
	  $('#trigger-overlay').appendTo('.main-nav > ul:not(.hs-menu-children-wrapper)');
	
	  var triggerBttn = document.getElementById('trigger-overlay');
	  var overlay = document.querySelector('div.overlay');
	  var closeBttn = overlay.querySelector('button.overlay-close');
	  var transEndEventNames = {
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'transitionend',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd',
	    transition: 'transitionend'
	  };
	  var transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
	  var support = {
	    transitions: Modernizr.csstransitions
	  };
	
	  var toggleOverlay = function toggleOverlay() {
	    if (classie.has(overlay, 'open')) {
	      (function () {
	        classie.remove(overlay, 'open');
	        classie.add(overlay, 'close');
	        var onEndTransitionFn = function onEndTransitionFn(ev) {
	          if (support.transitions) {
	            if (ev.propertyName !== 'visibility') return;
	            undefined.removeEventListener(transEndEventName, onEndTransitionFn);
	          }
	          classie.remove(overlay, 'close');
	        };
	
	        if (support.transitions) {
	          overlay.addEventListener(transEndEventName, onEndTransitionFn);
	        } else {
	          onEndTransitionFn();
	        }
	      })();
	    } else if (!classie.has(overlay, 'close')) {
	      classie.add(overlay, 'open');
	    }
	  };
	
	  triggerBttn.addEventListener('click', toggleOverlay);
	  closeBttn.addEventListener('click', toggleOverlay);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map
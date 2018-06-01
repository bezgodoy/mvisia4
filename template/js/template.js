/* Theme Name: The Project - Responsive Website Template
 * Author: HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 2.0.5
 * Created: March 2015
 * License URI: http://support.wrapbootstrap.com/
 * File Description: Initializations of plugins
 */

(function($){
	$(document).ready(function(){

		if ($('.boxed .fullscreen-bg').length>0) {
			$("body").addClass("transparent-page-wrapper");
		};

		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (min-width: 992px)')) {
		$('.main-navigation:not(.onclick) .navbar-nav>li.dropdown, .main-navigation:not(.onclick) li.dropdown>ul>li.dropdown').hover(
			function(){
				var $this = $(this);
				$this.addClass('show');
				$this.find('>.dropdown-menu').addClass('show');
			}, function(){
				$(this).removeClass('show');
				$(this).find('>.dropdown-menu').removeClass('show');
			});
		};

		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 991px)') || $(".main-navigation.onclick").length>0 ) {
			$('.header [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
				// Avoid following the href location when clicking
				event.preventDefault();

				// Avoid having the menu to close when clicking
				event.stopPropagation();

				// close all the siblings
				$(this).parent().siblings().removeClass('show');
				$(this).parent().siblings().find('.dropdown-menu').removeClass('show');

				// close all the submenus of siblings
				$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('show');

				// opening the one you clicked on
				$(this).parent().toggleClass('show');
				$(this).siblings('.dropdown-menu').toggleClass('show');
			});
		};

		//Transparent Header Calculations
		var timer_tr;
		if ($(".transparent-header").length>0) {
			var trHeaderHeight;
			$(window).on('load', function (e) {
				trHeaderHeight = $("header.header").outerHeight();
				$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
			});
			var headerTopHeightResize = $(".header-top").outerHeight();
			$(window).resize(function() {
				if ($(this).scrollTop()  < headerTopHeightResize + trHeaderHeight -5) {
					trHeaderHeight = $("header.header").outerHeight();
					$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
				}
			});
			$(window).scroll(function() {
				if ($(this).scrollTop() == 0 ) {
					if(timer_tr) {
						window.clearTimeout(timer_tr);
					};
					timer_tr = window.setTimeout(function() {
						trHeaderHeight = $("header.header").outerHeight();
						$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
					}, 300);
				};
			});
		}

		if ($(".transparent-header .slideshow").length>0) {
			$(".header-container header.header").addClass("transparent-header-on");
		} else {
			$(".header-container header.header").removeClass("transparent-header-on");
		}

		//Full Width Slider with Transparent Header Calculations
		if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0) {
			if (Modernizr.mq('only all and (max-width: 991px)')) {
				$("body").removeClass("transparent-header");
				$(".header-container header.header").removeClass("transparent-header-on");
				$(".tp-bannertimer").css("marginTop", "0px");
				$("body").addClass("slider-banner-fullwidth-big-height-removed");
			} else {
				$("body").addClass("transparent-header");
				$(".header-container header.header").addClass("transparent-header-on");
				$("body").removeClass("slider-banner-fullwidth-big-height-removed");
			}
		};

		if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0 || $(".slider-banner-fullwidth-big-height-removed").length>0) {
			$(window).resize(function() {
				if (Modernizr.mq('only all and (max-width: 991px)')) {
					$("body").removeClass("transparent-header");
					$(".header-container header.header").removeClass("transparent-header-on");
					$(".tp-bannertimer").css("marginTop", "0px");
				} else {
					$("body").addClass("transparent-header");
					$(".header-container header.header").addClass("transparent-header-on");
				}
			});
		};

		//Mega menu fixed width
		if ($('html[dir="ltr"] .container .mega-menu--wide').length>0 && Modernizr.mq('only all and (min-width: 992px)')) {
			var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15),
			headerFirstLeft = parseInt($('.header-first').offset().left),
			megaMenuLeftPosition = headerFirstLeft - headerSecondLeft;
			$('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
			$(window).resize(function() {
				var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15),
				headerFirstLeft = parseInt($('.header-first').offset().left),
				megaMenuLeftPosition = headerFirstLeft - headerSecondLeft;
				$('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
			});
		}
		if ($('html[dir="rtl"] .container .mega-menu--wide').length>0 && Modernizr.mq('only all and (min-width: 992px)')) {
			var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent(),
			headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth()),
			headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15),
			megaMenuRightPosition = headerSecondRight - headerFirstRight;
			$('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
			$(window).resize(function() {
				var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent(),
				headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth()),
				headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15),
				megaMenuRightPosition = headerSecondRight - headerFirstRight;
				$('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
			});
		}

		//Mega menu full width
		if ($('html[dir="ltr"] .container-fluid .mega-menu--wide').length>0 && Modernizr.mq('only all and (min-width: 992px)')) {
			var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15),
			headerFirstLeft = parseInt($('.header-first').offset().left),
			megaMenuLeftPosition = headerFirstLeft - headerSecondLeft,
			megaMenuWidth = parseInt($('.header .container-fluid').width());
			$('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
			$('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
			$(window).resize(function() {
				var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15),
				headerFirstLeft = parseInt($('.header-first').offset().left),
				megaMenuLeftPosition = headerFirstLeft - headerSecondLeft,
				megaMenuWidth = parseInt($('.header .container-fluid').width());
				$('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
				$('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
			});
		}
		if ($('html[dir="rtl"] .container-fluid .mega-menu--wide').length>0 && Modernizr.mq('only all and (min-width: 992px)')) {
			var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent(),
			headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth()),
			headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15),
			megaMenuRightPosition = headerSecondRight - headerFirstRight;
			megaMenuWidth = parseInt($('.header .container-fluid').width());
			$('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
			$('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
			$(window).resize(function() {
				var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent(),
				headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth()),
				headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15),
				megaMenuRightPosition = headerSecondRight - headerFirstRight;
				megaMenuWidth = parseInt($('.header .container-fluid').width());
				$('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
				$('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
			});
		}

		//Revolution Slider 5
		if ($(".slider-revolution-5-container").length>0) {
			$(".tp-bannertimer").show();

			$('body:not(.transparent-header) .slider-revolution-5-container .slider-banner-fullscreen').revolution({
				sliderType:"standard",
				sliderLayout:"fullscreen",
				delay:9000,
				autoHeight:"on",
				responsiveLevels:[1199,991,767,480],
				fullScreenOffsetContainer: ".header-container, .offset-container",
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				},
				gridwidth:1140,
				gridheight:750
			});
			$('.transparent-header .slider-revolution-5-container .slider-banner-fullscreen').revolution({
				sliderType:"standard",
				sliderLayout:"fullscreen",
				delay:9000,
				autoHeight:"on",
				responsiveLevels:[1199,991,767,480],
				fullScreenOffsetContainer: ".header-top, .offset-container",
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				},
				gridwidth:1140,
				gridheight:750
			});
			$('.slider-revolution-5-container .slider-banner-fullwidth').revolution({
				sliderType:"standard",
				sliderLayout:"fullwidth",
				delay:8000,
				gridwidth:1140,
				gridheight:630,
				responsiveLevels:[1199,991,767,480],
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-fullwidth-big-height').revolution({
				sliderType:"standard",
				sliderLayout:"fullwidth",
				delay:8000,
				gridwidth:1140,
				gridheight:650,
				responsiveLevels:[1199,991,767,480],
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-boxedwidth').revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:8000,
				gridwidth:1140,
				gridheight:450,
				responsiveLevels:[1199,991,767,480],
				shadow: 1,
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-fullscreen-hero:not(.dotted)').revolution({
				sliderType:"hero",
				sliderLayout:"fullscreen",
				autoHeight:"on",
				gridwidth:1140,
				gridheight:650,
				responsiveLevels:[1199,991,767,480],
				delay: 9000,
				fullScreenOffsetContainer: ".header-top, .offset-container"
			});
			$('.slider-revolution-5-container .slider-banner-fullscreen-hero.dotted').revolution({
				sliderType:"hero",
				sliderLayout:"fullscreen",
				autoHeight:"on",
				gridwidth:1140,
				gridheight:650,
				dottedOverlay:"twoxtwo",
				delay: 9000,
				responsiveLevels:[1199,991,767,480],
				fullScreenOffsetContainer: ".header-top, .offset-container"
			});
			$('.slider-revolution-5-container .slider-banner-fullwidth-hero:not(.dotted)').revolution({
				sliderType:"hero",
				sliderLayout:"fullwidth",
				gridwidth:1140,
				gridheight:650,
				responsiveLevels:[1199,991,767,480],
				delay: 9000
			});
			$('.slider-revolution-5-container .slider-banner-fullwidth-hero.dotted').revolution({
				sliderType:"hero",
				sliderLayout:"fullwidth",
				gridwidth:1140,
				gridheight:650,
				responsiveLevels:[1199,991,767,480],
				delay: 9000,
				dottedOverlay:"twoxtwo"
			});
			$('.slider-revolution-5-container .slider-banner-carousel').revolution({
				sliderType:"carousel",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:5000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"off",
					arrows: {
						style:"erinyen",
						enable:true,
						hide_onmobile:false,
						hide_onleave:false,
						tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
							left: {
								h_align:"left",
								v_align:"center",
								h_offset:30,
								v_offset:0
							},
							right: {
								h_align:"right",
								v_align:"center",
								h_offset:30,
								v_offset:0
							}
					},
					thumbnails: {
						style:"",
						enable:true,
						width:160,
						height:120,
						min_width:100,
						wrapper_padding:30,
						wrapper_color:"#373737",
						wrapper_opacity:"1",
						tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
						visibleAmount:9,
						hide_onmobile:false,
						hide_onleave:false,
						direction:"horizontal",
						span:true,
						position:"outer-bottom",
						space:20,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:0
					}
				},
				carousel: {
					maxRotation: 65,
					vary_rotation: "on",
					minScale: 55,
					vary_scale: "off",
					horizontal_align: "center",
					vertical_align: "center",
					fadeout: "on",
					vary_fade: "on",
					maxVisibleItems: 5,
					infinity: "off",
					space: -150,
					stretch: "off"
				},
				visibilityLevels:[1240,1024,778,480],
				gridwidth:600,
				gridheight:600,
				lazyType:"none",
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				shadow: 0,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		};

		//Full Page
		if ($(".fullpage-site").length>0) {
			$('.fullpage-site').fullpage({
				anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Intro', 'About', 'Portfolio', 'Clients', 'Contact Us'],
				fixedElements: '.header-container, .subfooter',
				responsiveWidth: 992,
				responsiveHeight: 600
			});
		}
		if ($(".fullpage-site-with-menu").length>0) {
			$('.fullpage-site-with-menu').fullpage({
				anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Intro', 'About', 'Menu', 'Reviews', 'Contact Us'],
				fixedElements: '.header-container, .subfooter',
				responsiveWidth: 992,
				responsiveHeight: 600,
				menu: '#fullpage-menu',
			});
		};

		//Owl carousel
		//-----------------------------------------------
		if ($('.owl-carousel').length>0) {
			$("*[dir='ltr'] .owl-carousel.carousel").owlCarousel({
				items:1,
				dots: false,
				nav: true,
				loop: true,
				navText: false,
				responsive:{
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			$("*[dir='rtl'] .owl-carousel.carousel").owlCarousel({
				items:1,
				rtl: true,
				dots: false,
				nav: true,
				loop: true,
				navText: false,
				responsive:{
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			$("*[dir='ltr'] .owl-carousel.carousel-autoplay").owlCarousel({
				items:1,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				dots: false,
				nav: true,
				navText: false,
				responsive:{
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			$("*[dir='rtl'] .owl-carousel.carousel-autoplay").owlCarousel({
				items:1,
				rtl: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				dots: false,
				nav: true,
				navText: false,
				responsive:{
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			$("*[dir='ltr'] .owl-carousel.clients").owlCarousel({
				items:2,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				dots: false,
				responsive:{
					479:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:4
					},
					1200:{
						items:6
					}
				}
			});
			$("*[dir='rtl'] .owl-carousel.clients").owlCarousel({
				items:2,
				rtl: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				dots: false,
				responsive:{
					479:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:4
					},
					1200:{
						items:6
					}
				}
			});
			$("*[dir='ltr'] .owl-carousel.content-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				nav: false,
				navText: false,
				dots: false
			});
			$("*[dir='rtl'] .owl-carousel.content-slider").owlCarousel({
				items: 1,
				rtl: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				nav: false,
				navText: false,
				dots: false
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-controls").owlCarousel({
				items: 1,
				loop: true,
				autoplay: false,
				nav: true,
				dots: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-controls").owlCarousel({
				items: 1,
				loop: true,
				rtl: true,
				autoplay: false,
				nav: true,
				dots: true
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-large-controls").owlCarousel({
				items: 1,
				loop: true,
				autoplay: false,
				nav: true,
				dots: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-large-controls").owlCarousel({
				items: 1,
				loop: true,
				rtl: true,
				autoplay: false,
				nav: true,
				dots: true
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				rtl: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				rtl: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true
			});
			$("*[dir='ltr'] .owl-carousel.content-slider-with-controls-autoplay-hover-stop").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true
			});
			$("*[dir='rtl'] .owl-carousel.content-slider-with-controls-autoplay-hover-stop").owlCarousel({
				items: 1,
				autoplay: true,
				rtl: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true
			});

			var sync1 = $(".owl-carousel.content-slider-with-thumbs");
			var sync2 = $(".owl-carousel.content-slider-thumbs");
			var slidesPerPage = 4; //globaly define number of elements per page
			var syncedSecondary = true;

			if ($("*[dir='ltr']").length>0) {
				sync1.owlCarousel({
					items : 1,
					slideSpeed : 700,
					nav: true,
					autoplay: false,
					dots: false,
					loop: true,
					responsiveRefreshRate : 200
				}).on('changed.owl.carousel', syncPosition);

				sync2.on('initialized.owl.carousel', function () {
					sync2.find(".owl-item").eq(0).addClass("current");
				}).owlCarousel({
					items : slidesPerPage,
					dots: false,
					nav: false,
					smartSpeed: 200,
					slideSpeed : 500,
					slideBy: slidesPerPage,
					responsiveRefreshRate : 100
				}).on('changed.owl.carousel', syncPosition2);
			} else {
				sync1.owlCarousel({
					items : 1,
					slideSpeed : 700,
					nav: true,
					autoplay: false,
					rtl: true,
					dots: false,
					loop: true,
					responsiveRefreshRate : 200
				}).on('changed.owl.carousel', syncPosition);

				sync2.on('initialized.owl.carousel', function () {
					sync2.find(".owl-item").eq(0).addClass("current");
				}).owlCarousel({
					items : slidesPerPage,
					dots: false,
					nav: false,
					rtl: true,
					smartSpeed: 200,
					slideSpeed : 500,
					slideBy: slidesPerPage,
					responsiveRefreshRate : 100
				}).on('changed.owl.carousel', syncPosition2);
			}
			function syncPosition(el) {
				//if you set loop to false, you have to restore this next line
				//var current = el.item.index;

				//if you disable loop you have to comment this block
				var count = el.item.count-1;
				var current = Math.round(el.item.index - (el.item.count/2) - .5);

				if(current < 0) {
					current = count;
				}
				if(current > count) {
					current = 0;
				}

				//end block
				sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
				var onscreen = sync2.find('.owl-item.active').length - 1;
				var start = sync2.find('.owl-item.active').first().index();
				var end = sync2.find('.owl-item.active').last().index();

				if (current > end) {
					sync2.data('owl.carousel').to(current, 100, true);
				}
				if (current < start) {
					sync2.data('owl.carousel').to(current - onscreen, 100, true);
				}
			}

			function syncPosition2(el) {
				if(syncedSecondary) {
					var number = el.item.index;
					sync1.data('owl.carousel').to(number, 100, true);
				}
			}

			sync2.on("click", ".owl-item", function(e){
				e.preventDefault();
				var number = $(this).index();
				sync1.data('owl.carousel').to(number, 300, true);
			});
		};

		// Fixed header
		//-----------------------------------------------
		if (($(".header.fixed.fixed-desktop").length > 0) && Modernizr.mq('only all and (min-width: 992px)')) {
			var sticky = new Waypoint.Sticky({
				element: $('.header-container .header.fixed'),
				stuckClass: 'object-visible',
				handler: function(direction) {
					$('body').toggleClass('fixed-header-on');
				},
				offset: -1
			});
		};
		if ($(".header.fixed.fixed-all").length > 0) {
			var sticky = new Waypoint.Sticky({
				element: $('.header-container .header.fixed'),
				stuckClass: 'object-visible',
				handler: function(direction) {
					$('body').toggleClass('fixed-header-on');
				},
				offset: -1
			});
		};

		// Animations
		//-----------------------------------------------
		if ($("[data-animation-effect]").length>0) {
			$("[data-animation-effect]").each(function() {
				if(Modernizr.csstransitions) {
					var waypoints = $(this).waypoint(function(direction) {
						animatedObject = $(this.element);
						animatedObject.addClass('animated object-visible ' + animatedObject.attr("data-animation-effect"));
						this.destroy();
					},{
						offset: '90%'
					});
				} else {
					$(this).addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0 || $('.masonry-grid').length>0 || $('.masonry-grid-fitrows').length>0 || $('.isotope-container-fitrows').length>0) {
			$('.masonry-grid').isotope({
				itemSelector: '.masonry-grid-item',
				layoutMode: 'masonry'
			});
			$('.masonry-grid-fitrows').isotope({
				itemSelector: '.masonry-grid-item',
				layoutMode: 'fitRows'
			});
			$('.isotope-container').fadeIn();
			var $container = $('.isotope-container').imagesLoaded( function() {
				$container.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
			});
			$('.isotope-container-fitrows').fadeIn();
			var $container_fitrows = $('.isotope-container-fitrows').imagesLoaded( function() {
				$container_fitrows.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'fitRows',
					transitionDuration: '0.6s',
					filter: "*"
				});
			});
			// filter items on button click
			$('.filters').on( 'click', 'ul.nav li a', function() {
				var filterValue = $(this).attr('data-filter');
				$(".filters").find("li .active").removeClass("active");
				$(this).addClass("active");
				$container.isotope({ filter: filterValue });
				$container_fitrows.isotope({ filter: filterValue });
				return false;
			});
			$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
				$('.tab-pane .masonry-grid-fitrows').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'fitRows'
				});
			});
		};

		// Animated Progress Bars
		//-----------------------------------------------
		if ($("[data-animate-width]").length>0) {
			$("[data-animate-width]").each(function() {
				if (!Modernizr.csstransitions) {
					$(this).find("span").hide();
				};
				var waypoints = $(this).waypoint(function(direction) {
					$(this.element).animate({width: $(this.element).attr("data-animate-width")}, 800 );
					this.destroy();
					if (!Modernizr.csstransitions) {
						$(this.element).find("span").show('slow');
					};
				},{
					offset: '90%'
				});
			});
		};

		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").addClass("fadeToTop");
				$(".scrollToTop").removeClass("fadeToBottom");
			} else {
				$(".scrollToTop").removeClass("fadeToTop");
				$(".scrollToTop").addClass("fadeToBottom");
			}
		});

		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			if($(".fixed.header").length>0) {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 85
				});
			} else {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 20
				});
			}
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			if(($(".header.fixed").length>0) && (Modernizr.mq('only all and (min-width: 768px)'))) {
				$('.smooth-scroll a, a.smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top-63
							}, 1000);
							return false;
						}
					}
				});
			} else {
				$('.smooth-scroll a, a.smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top
							}, 1000);
							return false;
						}
					}
				});
			}
		}

		// Full Width Image Overlay
		//-----------------------------------------------
		if ($(".full-image-overlay").length>0) {
			overlayHeight = $(".full-image-overlay").outerHeight();
			$(".full-image-overlay").css("marginTop",-overlayHeight/2);
		};

		//This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes (Header Top).
		//-----------------------------------------------
		$('.header-top .dropdown-menu input').click(function(e) {
			e.stopPropagation();
		});

	}); // End document ready

})(this.jQuery);

if (jQuery(".btn-print").length>0) {
	function print_window() {
		var mywindow = window;
		mywindow.document.close();
		mywindow.focus();
		mywindow.print();
		mywindow.close();
	}
}

$('.gallery-slider').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	arrows: true,
	prevArrow: '<div class="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
	nextArrow: '<div class="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
	responsive: [
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true
		  }
		}
	]
  });
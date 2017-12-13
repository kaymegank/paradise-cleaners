jQuery(document).ready(function($) {
		//$('.sqz-filter_block ul li:eq(2)').addClass('active');
		$('.single-photography .sqz-main_navigation li.menu-item-1761, .single-photography .sqz-mobile_navigation li.menu-item-1730').removeClass('current_page_parent');
		$('.tax-design-type .sqz-main_navigation li.menu-item-1761, .tax-design-type .sqz-mobile_navigation li.menu-item-1730').removeClass('current_page_parent');
		$('.single-case-study .sqz-mobile_navigation li.current_page_parent, .tax-case-studies .sqz-mobile_navigation li.current_page_parent, .tax-work .sqz-mobile_navigation li.current_page_parent').removeClass('current_page_parent');
		$('.single-case-study .sqz-main_navigation li.current_page_parent, .tax-case-studies .sqz-main_navigation li.current_page_parent, .tax-work .sqz-main_navigation li.current_page_parent').removeClass('current_page_parent');
		$('.single-case-study .sqz-main_navigation li.menu-item-1871, .single-case-study .sqz-main_navigation li.menu-item-1760').addClass('current_page_parent');
		$('.tax-case-studies .sqz-main_navigation li.menu-item-1871, .tax-case-studies .sqz-main_navigation li.menu-item-1760').addClass('current_page_parent');
		$('.tax-work .sqz-main_navigation li.menu-item-1871, .tax-work .sqz-main_navigation li.menu-item-1760').addClass('current_page_parent');



		$('.single-photography .sqz-main_navigation li.menu-item-1727').addClass('current_page_parent');
		$('.single-case-study .sqz-mobile_navigation li.menu-item-1870').addClass('current_page_parent');
		$('.tax-case-studies .sqz-mobile_navigation li.menu-item-1870').addClass('current_page_parent');
		$('.tax-work .sqz-mobile_navigation li.menu-item-1870').addClass('current_page_parent');

		// // Parallax Effect
		// jQuery(function($) {
		// 	function scrollSomething() {
		// 		var x = $(document).scrollTop();
		// 		var scrollSpeed = x * 0.5;
		// 		$("#sqz-banner").css({
		// 			"position": "relative",
		// 			"z-index": "-1",
		// 			"top": scrollSpeed + "px"
		// 		});
		// 	}
		// 	window.addEventListener("scroll", scrollSomething);
		// });



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.logo').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		$('#sqz-header, .sqz-full_toggle_menu').addClass('nav-up');
	} else {
		// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$('#sqz-header, .sqz-full_toggle_menu').removeClass('nav-up');
		}
	}

	lastScrollTop = st;
}







	// svg image to png
// 	if (!Modernizr.svg) {
// 		var imgs = document.getElementsByTagName('img');
// 		var dotSVG = /.*\.svg$/;
// 		for (var i = 0; i != imgs.length; ++i) {
// 			if(imgs[i].src.match(dotSVG)) {
// 				imgs[i].src = imgs[i].src.slice(0, -3) + "png";
// 			}
// 		}
// 	}

	$(window).load(function() {
	// will first fade out the loading animation
	$("#sqz-animated_logo").fadeOut(300);
	$('body').removeClass('loading');
	//$('body').addClass('fadeIn');
        // will fade out the whole DIV that covers the website.
        $("#sqz-preloader").delay(500).fadeOut(1000);
    });

	//sticky header
	$(window).scroll( function(){
		var height = $(window).scrollTop();
		var scroll = $(window).scrollTop() - 140 , slowscroll = scroll/2;
		$('body').removeClass('sqz-sticky, sqz-mobile_sticky');
		if(height  > 50) {
			// $('#sqz-banner').css({ transform: "translateY(" + slowscroll + "px)"});
		}

		if(height  > 200) {
			$('body').addClass('sqz-sticky');

		} else {
			$('body').removeClass('sqz-sticky');

		}
		// if(height  > 70) {
		// 	$('body').addClass('sqz-mobile_sticky');

		// } else {
		// 	$('body').removeClass('sqz-mobile_sticky');

		// }

	});
	// $(window).scroll( function(){
	// 	var height = $(window).scrollTop();
	// 	$('body').removeClass('sqz-mobile_sticky');
	// 	if(height  > 70) {
	// 		$('body').addClass('sqz-mobile_sticky');

	// 	} else {
	// 		$('body').removeClass('sqz-mobile_sticky');

	// 	}

	// });
	$(".sqz-filter_inner_wrap").scroll(function() {
    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        $(this).parent('nav').addClass('sqz-scroll');
    } else {
        $(this).parent('nav').removeClass('sqz-scroll');
    }
	});
	$('.sqz-scroll_menu').click(function() {
		var menuHeight = $(this).prev('.sqz-filter_inner_wrap').innerHeight();
		var scrollableMenu = $(this).prev('.sqz-filter_inner_wrap');
  		if($(this).parent('.sqz-filter_block').hasClass('sqz-scroll')) {
			scrollableMenu.animate({
				scrollTop: 0
			},800);
		}else{
			scrollableMenu.animate({
				scrollTop: menuHeight
			},800);
		}
	});
	// Smooth Scrolling
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = hash;
		});
	});


	wow = new WOW(
	{
		animateClass: 'animated',
		offset:       100
	}
	);
	wow.init();
	//youtube video
	function youframe() {
		var frameWidth = $('.sqz-entry_content iframe').width();
		$('.sqz-entry_content iframe').css('height', frameWidth *.563);
	}
	youframe();
	$(window).resize(youframe);

	$('.gallery .gallery-item').each(function() {
		var caption_gallery = $(this).find(".wp-caption-text").html();
		$(this).find("img").attr('data-caption', caption_gallery);
	});

	$('.sqz-blog_single').each(function(){
		var single_caption = $(this).find(".front-caption").html();
		$(this).find(".sqz-fancy ").attr('data-caption', single_caption);
	});


	// $('.gallery .gallery-item .sqz-fancy').attr('title', caption_gallery);


	//gallery
	$(".sqz-fancy").fancybox({
		maxWidth : 1200,
		maxHeight : '70%',
		fitToView : true,
		width  : '100%',
		height  : '100%',
		autoSize : false,
		closeClick : false,
		openEffect : 'fade',
		closeEffect : 'fade',
		nextEffect : 'fade',
		prevEffect : 'fade',
		padding : 0,
		helpers : {
			title : {
				type : 'inside'
			},
			overlay: {
				locked: false
			},
			media : {}
		},
		beforeShow : function(element) {
			var data_caption = this.element.find('img').attr('data-caption');
			this.inner.find('img').attr('data-caption', data_caption);
			this.title = data_caption;

			if($("body").hasClass("single")){
				var data_caption = this.element.find('img').attr('data-caption');
				this.inner.find('img').attr('data-caption', data_caption);
				this.title = data_caption;
			}
			else{
				var data_caption = this.element.attr('data-caption');
				this.inner.find('img').attr('data-caption', data_caption);
				this.title = data_caption;
			}
			// alert(alt);
		},
		tpl : {
			next     : '<a title="Next" class="fancybox-nav fancybox-next test" href="javascript:;"></a>',
			prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"></a>',
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>'
		}
	});

	$('.sqz-filter_title').click(function(e) {
		if($(this).parent('.sqz-filter_box').hasClass('sqz-open')) {
			$('.sqz-filter_block').slideUp(300);
			setTimeout (function(){
				$('.sqz-filter_box').removeClass('sqz-open');
			},300);
			e.stopImmediatePropagation();
		}else{
			$('.sqz-filter_block').slideUp(300);
			$('.sqz-filter_box').removeClass('sqz-open');
			$(this).parent('.sqz-filter_box').addClass('sqz-open');
			$(this).next('.sqz-filter_block').slideDown(300);
		}
	});
	$('.sqz-filter_block a').click(function() {
		$('.sqz-filter_block').slideUp(300);
		$('.sqz-filter_box').removeClass('sqz-open');
	});

	if($('body').hasClass('single-case-study') || $('body').hasClass('post-type-archive')) {
		$('#menu-item-874').removeClass('current_page_parent');
	}
	// FULL MENU
	$('.sqz-full_toggle_menu').click(function(e) {
		e.preventDefault();
		if($(this).hasClass('sqz-open')) {
			$('body').removeClass('sqz-menu_open');
			$('.sqz-full_nav').fadeOut(200);
			$(this).removeClass('sqz-open');
		}else{
			$(this).addClass('sqz-open');
			$('body').addClass('sqz-menu_open');
			$('.sqz-full_nav').fadeIn(200);
			e.stopImmediatePropagation();
		}
		$('.sub-toggle').removeClass('expand');
		return false;
	});

	// mobile menu
	$('.sqz-toggle_menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('sqz-open');
		$('body').toggleClass('sqz-nav_open');
		$('#sqz-main_navigation').fadeToggle(500);
	});
	$('.sqz-close').click(function() {
		$('body').removeClass('sqz-menu_open');
		$('.sqz-mobile_navigation').fadeOut(200);
	});
	$('.sqz-mobile_menu .menu-item-has-children > a').each(function() {
		var activeMenuItem = $(this).text();
		$(this).after("<h4 class='sqz-menu_header'><span class='sub-menu_back'><i class='mdi mdi-chevron-left'></i></span><span class='sqz-menu_title'>"+activeMenuItem+"</span></h4>");
		$(this).append("<span class='sub-toggle'><i class='mdi mdi-chevron-right'></i></span>");
		$(this).nextAll('h4, ul').wrapAll("<div class='sqz-submenu_wrap' />");
	});
	$('.sqz-submenu_wrap').each(function() {
		$(this).find('.sqz-submenu_wrap').addClass('sqz-second');
	});
	$('.sqz-main_navigation .menu-item-has-children > a').click(function(e) {
		e.preventDefault();
	});
	$('.sqz-mobile_menu .menu-item-has-children > a').click(function(e) {
		e.preventDefault();

		//$('.sqz-mobile_menu .sqz-mobile_nav').animate({left: '-100%'});
		$(this).parent('li').parent('ul').animate({left: '-100%'});
		$(this).next('.sqz-submenu_wrap').animate({left:0});
	//	$(this).parents('.sqz-submenu_wrap').animate({left: 0});
	$('.sqz-submenu_wrap .sqz-menu_header').hide();
	$(this).next('.sqz-submenu_wrap').find('>.sqz-menu_header').show();

});
	$(document).on('click', '.sub-menu_back', function() {
		var parentMenu = $(this).parent().parent('.sqz-submenu_wrap');
		if(parentMenu.hasClass('sqz-second')){
			$(this).parent('.sqz-menu_header').hide();
			$(this).parents('.sub-menu').animate({left: 0});
			$(this).parent('.sqz-menu_header').parent('.sqz-submenu_wrap').animate({left: 100+'%'});
			$(this).parents('.sub-menu').prev().show();

		}else{
			$(this).parents('.sqz-submenu_wrap').animate({left:100+'%'});
			$('.sqz-mobile_menu .sqz-mobile_nav').animate({left: 0});
			$(this).parent('.sqz-menu_header').hide();
		}

	});
	$('.sqz-hidden_content div').addClass('sqz-hidden_block');
	function sqz_sidebar_widget() {
		var winWidth = $(window).width();
		if(winWidth < 768) {
			$('.sqz-widget_title').click(function(e) {
				if($(this).hasClass('sqz-open')) {
					$('.sqz-widget_title').removeClass('sqz-open');
					$('.sqz-hidden_block').slideUp(300);
					e.stopImmediatePropagation();
				}else{
					$('.sqz-widget_title').removeClass('sqz-open');
					$('.sqz-hidden_block').slideUp(300);
					$(this).addClass('sqz-open').next('.sqz-hidden_block').slideDown(300);
					e.stopImmediatePropagation();
				}
			});
			// $(".gallery-item .gallery-icon a").unbind('click');

		} else {
			$('.sqz-hidden_block').show();
			$('.sqz-widget_title').unbind('click');
			// $('.sqz-full_nav .sqz-address .sqz-nav_number a').attr('href')

		}
	}
	sqz_sidebar_widget();
	$(window).resize(sqz_sidebar_widget);
});

$(window).resize(function(){
	var winWidthNew = $(window).width();
	if($(winWidthNew > 959)) {
		$('.sqz-toggle_menu').removeClass('sqz-open');
		$('body').removeClass('sqz-nav_open');
		$('#sqz-main_navigation, .sqz-hidden_block').removeAttr('style');
	}

});



$('select').niceSelect();

$('body').on('focus', '.gfield_error input', function() {
	$(this).parent('div').next('.validation_message').fadeOut(100);
	$(this).parents('li').removeClass('gfield_error');
});

//equal height

equalheight = function(container){

	var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	$el,
	topPosition = 0;
	$(container).each(function() {

		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
 } else {
 	rowDivs.push($el);
 	currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
 }
 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
 	rowDivs[currentDiv].height(currentTallest);
 }
});
}

$(window).load(function() {
	equalheight('.sqz-equal_height');
});


$(window).resize(function(){
	equalheight('.sqz-equal_height');
});
$(document).ajaxComplete(function() {
	$('body').on('click','.sqz-category a', function() {
		var currentTerm = $(this).attr('href');
		$(currentTerm).trigger('click');
	});
});

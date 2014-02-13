$(document).ready(function() {

	$('.visa ul li > div > div > div > div').jScrollPane({
		verticalDragMinHeight: 60,
		verticalDragMaxHeight: 60,
		horizontalDragMinWidth: 60,
		horizontalDragMaxWidth: 60,
		verticalGutter: 20
	});

	$('.details .pictures').slides({
		pagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'slide',
		slideSpeed: 250,
		play: 7500,
		pause: 2500
	});

	$('input[type="checkbox"], select').uniform();
	$('.lb .comments li > div > div > div, .visa ul li > div > div > div, .faq > ul li > div > div > div').append('<span></span>');
	/* Visa start */
	$('.visa ul li > div').hide();
	$('.visa ul li > div > div').each(function() {
		$(this).children('div').hide();
		$(this).children('div').filter(':first').show();
		$(this).children('div').filter(':first').find('a.prev').hide();
		$(this).children('div').filter(':last').find('a.next').hide();
		$(this).find('a.next').click(function() {
			$(this).parent().parent().hide();
			$(this).parent().parent().next('div').show();
			return false;
		});
		$(this).find('a.prev').click(function() {
			$(this).parent().parent().hide();
			$(this).parent().parent().prev('div').show();
			return false;
		});
	});
	$('.visa ul li > div > div > div').append('<button class="close"></button>');
	$('.visa ul li > div > div > div .close').click(function() {
		$(this).parents('li').children('div').fadeOut(150);
	});
	$('.visa ul li').each(function() {
		var t = $(this).position();
		var p = $('.visa').height();
		var h = $(this).children('div > div > div').filter(':first').height();
		var d = t.top + h;
		if (d < p) {
			$(this).children('div').css({'top': '0'});
			$(this).find('div span').css({'top': '22px'});
		}
		else {
			$(this).children('div').css({'bottom': '0'});
			$(this).find('div span').css({'bottom': '22px'});
		}
	});
	$('.visa ul li > a').click(function() {
		$('.visa ul li > div').stop(true, true).fadeOut(150);
		$(this).parents('li').children('div').fadeIn(150);
		return false;
	});
	/* Visa end */
	$('.faq > ul li').each(function() {
		var x = $(this).find('p > a').position();
		$(this).find('div span').css({'left': x.left - 81 + 'px'});
	});
	$('.faq > ul li > p > a').click(function() {
		$(this).parents('li').children('div').slideToggle(0);
		return false;
	}).filter(':first').click();
	$('.information > div > .articles > div:last-child, .information > div > .reviews > div:last-child, .lb .articles > div:last-child').css({'margin-bottom': '0'});
	$('.albums li:nth-child(3n)').css({'margin-right': '0'});
	$('.content .pagination li:last-child').css({'margin-left': '20px', 'padding-left': '24px', 'background': 'url("./images/pagination_last.png") no-repeat left 5px'});
	/* Added 18 Dec start */
	$('.carousel1').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutExpo'
	});
	$('.carousel2').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutExpo'
	});
	var gallery = $('.content .picture > div > div');
	$('.content .gallery ul li a').click(function () {
		gallery.hide();
		gallery.filter(this.hash).stop(true, true).fadeIn(0);
	}).filter(':first').click();
	/* Added 18 Dec end */
});

$(document).ready(function () {
	$('.multimedia__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		arrows: true
	});

	$('.analogue__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false,
		arrows: true
	});

	$('.card__slider-transition').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		dots: false,
		arrows: true
	});
	
	$('.card__video-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: false,
		arrows: true
	});
});

$(document).ready(function () {
	$('.header__catalog-btn').click(function () {
		$('.header__menu-burger').toggleClass('open-menu');
		$('.header__catalog-menu').toggleClass('open-menu');
	});
	$('.header__categories-left').click(function () {
		$('.categories-btn').toggleClass('open__categories');
		$('.header__categories-menu').toggleClass('open__categories');
	});

	$('.pagination-btn').click(function () {
		$('.pagination-btn').removeClass('active-page')
		$(this).addClass('active-page');
	})

});

/* popup */
$('.open-popup').click(function (e) {
	e.preventDefault();
	$('.popup').fadeIn(600);
	$('html').addClass('no-scroll');
});

$('.popup__close').click(function () {
	$('.popup').fadeOut(600);
	$('html').removeClass('no-scroll');
});

$('.open-popup-two').click(function(e) {
	e.preventDefault();
	$('.popup').fadeOut(600);
	$('.popup-two').fadeIn(600);
	$('html').addClass('no-scroll');
});

$('.popup-two__application').click(function() {
	$('.popup-two').fadeOut(600);
	$('html').removeClass('no-scroll');
});


/* $(".link").click(function(){})  $(document).on('click', '.link', function () {}) */

/* $(".link").click(function(){
	$('.link').removeClass('red');
}) */

/* $(document).on('click', '.link', function () {
	(this).removeClass('red');
}) */
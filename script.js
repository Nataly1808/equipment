$(document).ready(function () {
$('.multimedia__slider').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2
 });
});

$(document).ready(function() {
	$('.header__catalog-btn').click(function() {
		 $('.header__menu-burger').toggleClass('open-menu');
		 $('.header__catalog-menu').toggleClass('open-menu');
	});
});


(function ($) {

	$('.fa-external-link-alt').hide();

	$('.workshops-certificates__a').hover(function () {
		$(this).siblings('.fa-external-link-alt').slideToggle();
  }, function () {
		$(this).siblings('.fa-external-link-alt').slideToggle();
  });


//SMOOTH SCROLL MENU
function smoothScrollingTo(target) {
	$('html,body').animate({
		scrollTop: $(target).offset().top
	}, 1000, 'swing', function(){
		window.location.hash = target;
	} );
}

$('a[href*=\\#]').on('click', function (event) {
	event.preventDefault();
	smoothScrollingTo(this.hash);
});

// SMOOTH SCROLL BUTTON
$('.topScrollButton').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 560) {
		$('.topScrollButton').fadeIn();
	} else {
		$('.topScrollButton').fadeOut();
	}
});

$(".filter__button").click(function (e) {
	e.preventDefault();
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
	} else {
		$(this).parent().find(".filter__button").removeClass('active');
		$(this).addClass('active');
	};
});

//BURGER NENU OPEN AND CLOSE AFTER CLICK
$(".filter__burger").click(function () {
	if ($(this).hasClass("open")) {
		$(this).removeClass("open");
		$(".filter").removeClass("open");
	} else {
		$(this).addClass("open");
		$(".filter").addClass("open");
	};
});

//HIDING BURGER MENU AND SUBCATEGORIES AFTER CLICK
$(".filter__button").click(function () {
	if ($(this).hasClass('filter__button_drop')) {
		$(this).addClass('open');
	} else {
		$(".filter").removeClass("open");
		$(".filter__burger").removeClass("open");
	};
});

$(document).ready(function () {
	smoothScrollingTo(location.hash);
});

})(jQuery);
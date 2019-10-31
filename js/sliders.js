$(document).ready(function () {

	if ($(window).width() < 660) {

		$(".conditions_mob_show").slick({
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 13000,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			infinite: true,
			pauseOnFocus: false,
			pauseOnHover: false
			
		});

		$(".team").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 5000,
			infinite: true,
			pauseOnFocus: false,
			pauseOnHover: false
		});

		$(".stats").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 7000,
		});

		$(".results").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000,
		});

		$(".portfolio").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
		});

		$(".media").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
		});
	}

	else if ($(window).width() < 768) {

		$(".team").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 5000,
			infinite: true,
			pauseOnFocus: false,
			pauseOnHover: false

		});

		$(".conditions_mob_show").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 13000,
			infinite: true,
			pauseOnFocus: false,
			pauseOnHover: false
		}); 

		$(".stats").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 7000,
		});

		$(".results").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000,
		});

		$(".portfolio").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
		});

		$(".media").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
		});
	}

	else if ($(window).width() < 1024) {

		$(".conditions").slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 13000,
			infinite: true,
			pauseOnFocus: false,
			pauseOnHover: false
		});

		$(".team").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 5000

		});

		$(".portfolio").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true
		});

		$(".media").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true
		});
	}

	else if ($(window).width() < 1400) {

		$(".conditions").slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 8000
		});

		$(".portfolio").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true
		});

		$(".media").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true
		});

	}

	else {

		$(".media").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true
		});

	}


});
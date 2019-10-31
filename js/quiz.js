let currentSlide = $(".questions__interactive").find(".questions__q_status_active");
let count = 1;

$(document).ready(function () {
		
	

	$(".questions__next").on("click", function () {
		nextSlide();
		switchMessage()
	});

	$(".questions__prev").on("click", function () {
		prevSlide();
		switchMessage()
	});

});

function prevSlide() {
	if ($(currentSlide).prev().hasClass("questions__q") === true) {

		$(currentSlide).removeClass("questions__q_status_active");
		currentSlide = $(currentSlide).prev().addClass("questions__q_status_active");
		count = $(currentSlide).attr("id").substring(1);
		$(".count__first").text(count);

	}
};

function nextSlide() {
	if ($(currentSlide).next().hasClass("questions__end") === true) {
		$(".questions__buttons").hide();

		$(currentSlide).find(".questions__radio").each(function () {

			if ($(this).prop('checked') == true) { 

		       	$(currentSlide).removeClass("questions__q_status_active");
				currentSlide = $(currentSlide).next().addClass("questions__q_status_active");
				count = $(currentSlide).attr("id").substring(1);
				$(".count__first").text(count);

		    }
		})	
	}

	else if ($(currentSlide).next().hasClass("questions__q") === true) {

		$(currentSlide).find(".questions__radio").each(function () {

			if ($(this).prop('checked') == true) { 

		       	$(currentSlide).removeClass("questions__q_status_active");
				currentSlide = $(currentSlide).next().addClass("questions__q_status_active");
				count = $(currentSlide).attr("id").substring(1);
				$(".count__first").text(count);

		    }
		})	

	}
};

function switchMessage() {
	let disableClass = "questions__end-par_status_disable";

	if ($("#registration3").is(":checked")) {
		$(".questions__end-par").html("В настоящий момент наша юридическая компания помогает в списании долгов гражданам из города Новосибирска и из Новосибирской области, поэтому Вам мы, к сожалению, помочь не сможем.");
		$(".questions__end-par").addClass(disableClass);
	}

	else if ($("#debt1, #mortgage1, #law1").is(":checked") && $(".questions__end-par").hasClass(disableClass) === false) { 
		$(".questions__end-par").html("На наш взгляд, Ваша ситуация с задолженностью не подходит под процедуру списания долгов (банкротства).");		
	}

	else {
		$(".questions__end-par").removeClass(disableClass);
	}

	
}
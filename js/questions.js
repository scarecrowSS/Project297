$(document).ready(function () {

	$(".more__question").on('click', function() {
		let questCurrent = $(this).next(".more__answer");
		let localState = $(questCurrent).hasClass("more__answer_state_open");

		if(localState === false) {
			openState(questCurrent, this);
		}

		else if(localState === true) {
			closeState(questCurrent, this);
		}
	});
});

function openState(block, elem) {
	$(block).addClass("more__answer_state_open");
	$(elem).find(".more__button").addClass("more__button_status_active");
};

function closeState(block, elem) {
	$(block).removeClass("more__answer_state_open");
	$(elem).find(".more__button").removeClass("more__button_status_active");
};
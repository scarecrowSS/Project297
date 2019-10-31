let overflowStatus = false;

$(document).ready(function () {
	$(".overflow__close, .show-popup").on("click", function () {
		if (overflowStatus === false) {
			openOverflow();
		}
		else {
			closeOverflow();
		}
	}) 
});

function openOverflow () {
	$(".overflow").addClass("overflow_state_open");
	overflowStatus = true;
}

function closeOverflow () {
	$(".overflow").removeClass("overflow_state_open");
	overflowStatus = false;
}


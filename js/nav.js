$(document).ready(function () {

	let menuStatus = false;

	$(".hamb").on("click", function () {	
		menuStatus = menuStatus === true ? hideMenu() : showMenu();
	});
	
	if ($(window).width() < 1440) {

		$(document).mouseup(function (e){ 
			var div = $(".nav, .hamb"); 
			if (!div.is(e.target)) { 
				hideMenu();
				menuStatus = false; 
			};
		});

	};
});

function hideMenu() {
	$(".sidebar").removeClass("sidebar_status_visible");
	return false;
};

function showMenu() {
	$(".sidebar").addClass("sidebar_status_visible");
	return true;
};

$(document).ready(function () {

	$(".media__play").on("click", function() {
		let currentVideo = $(this).prev(".media__video")[0];
		
		if (currentVideo.paused) {
			
			playVideo(currentVideo, this);
		}
		else {
			stopVideo(currentVideo, this);
		}

	})
});

function playVideo (currentVideo, button) {
	currentVideo.play();
	$(button).addClass("media__play_status_pause");

	currentVideo.onended = function(e) {
	 	$(button).removeClass("media__play_status_pause");;
	};

}

function stopVideo (currentVideo, button) {
	currentVideo.pause();
	$(button).removeClass("media__play_status_pause");

}
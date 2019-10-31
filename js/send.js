$(document).ready(function () {
  $(function() {
    $('.form, .map-form').submit(function(e) {
        var $form = $(this);
        $.ajax({
        	type: $form.attr('method'),
        	url: $form.attr('action'),
        	data: $form.serialize()
        }).done(function() {
        	$(".success").addClass("success_status_active"); 
          $(".overflow").removeClass("overflow_state_open");   
        	$(".form__input, .map-form__input").val('');
        	$(".success").addClass("success_status_active");
          	setTimeout(function() {
          	    $(".success").removeClass("success_status_active");
          	}, 2000);
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
    });
  });
})
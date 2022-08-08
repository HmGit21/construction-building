AOS.init();
!(function($){
	"use strict";
	
	//Menu toggle
  $(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('.menu-toggle').toggleClass('active')
		$('nav').toggleClass('active');
	})
});
	
	// jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
	
})(jQuery);
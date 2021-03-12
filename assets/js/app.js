(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		

		// owl-carousel-configure
		$(".slider-area").owlCarousel({
			items:1,
			loop:true,
			nav:false,
			dots:false,
			autoplay:true,
            animateOut:'fadeOut',
			autoplayTimeout: 3000,
            smartSpeed: 1000,
		})

        $("#jackpot").animateNumbers(500000000, true, 10000);

		//slick menu active
        $("#slick-menu").slicknav({
			prependTo:'#mobile-menu'     
		 });

		 $(".cnt-btn").click(function(){
			$(".social-chat ul").toggleClass(".m_active");
		  });


		




	});



}(jQuery));
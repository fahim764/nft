(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// Owl Carousel

		$("#owl-csel1").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<i class="fa-solid fa-chevron-left"></i>',
						'<i class="fa-solid fa-chevron-right"></i>'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 1,
					dots: false,						
				},
				767: {
					items: 2,

				},
				768: {
					items: 3,

				},
				1200: {
					items: 6,						
				}
			}

		});

		$(".profile-part").click(function(){
			$(".profile-menu").toggleClass("profile-menu-show");
		});

		// sticky menu

		jQuery (window).scroll(function (){
			var stickymenu = jQuery (window).scrollTop();

			if (stickymenu > 100) {
				jQuery("nav").addClass('sticky-menu')
			} else {
				jQuery("nav").removeClass('sticky-menu')
			}


		});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);

})


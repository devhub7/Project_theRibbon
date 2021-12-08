jQuery(document).ready(function($) {
	$(".active-carousel").owlCarousel({
		items: 1,
		loop: true,	
		//navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'] ,
		nav: false,
		autoplay: true,
	});


	$(".active-Carousel").owlCarousel({
		items: 5,
		loop: true,	
		//navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'] ,
		nav: false,
		autoplay: true,   
		dots:false,
	});

	$(".active-slider").owlCarousel({
		items: 1,
		loop: true,	
		//navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'] ,
		nav: false,
		autoplay: true,   
		dots:false,
	});
});
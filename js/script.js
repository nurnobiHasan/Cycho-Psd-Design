$(document).ready(function(){
  $(".header-bottom-right-area").owlCarousel({
	  "items":1,
	  "loop":true,
	  "autoplay":false,
	  "autoplayTimeout":3000,
	  "autoplayHoverPause":true,
	  responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			1000:{
				items:1,
			}
		}
	
	});
	$(".mobile-menu").click(function(){
		$(".header-top-nav ul").slideToggle(1000);
		
	});
	
	
	 $(".icon-slider").owlCarousel({
		 items:4,
		 dots:false,
		 loop:true,
		 autoplay:true,
		 autoplayTimeout:2000,
		  responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:4,
				nav:true,
				loop:false
			}
		}
		 
	 });
	  $(".review-slider-area").owlCarousel({
		  loop:true,
		  nav:true,
		  navText:['<i class="fas fa-arrow-circle-left"></i>','<i class="fas fa-arrow-circle-right"></i>'],
		  dots:false,
		  autoplay:true,
		  autoplayTimeout:2000,
		   responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1200:{
				items:2,
				nav:true,
				loop:false
			}
		}
	  });
	 $(".footer-top-right").owlCarousel({
		  loop:true,
		  dots:false,
		  autoplay:true,
		  autoplayTimeout:2000,
		  responsiveClass:true,
			responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			992:{
				items:4,
				nav:true,
				loop:false
			}
		}
	 });
	$(".scrollbar").click(function(){
		$("html").animate({
			"scrollTop":"0px"
		},2000);
	});
	$(window).scroll(function(){
		var a=$(window).scrollTop();
		if(a<300){
			$(".scrollbar").slideUp();
		}
		else{
			$(".scrollbar").slideDown();
		}
		
	});
	
	 
});	
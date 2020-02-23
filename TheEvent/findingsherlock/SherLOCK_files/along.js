/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

	#ALONG | Andrew & Hannah Elope
	@Author		   iamandrewmiller
	@Type          Javascript
	@Last Update   7:00 PM 1/02/14

	TABLE OF CONTENTS
	---------------------------
	 1. Loading
	 2. Full screen
	 3. Inline Popup
	 4. Scroll Reveal
	 5. Countdown
	 6. Center welcome
	 7. Carousel
	 8. Map
	    8.1 Show/hide map
	 9. Tooltip
	10. Smooth scroll
	11. Newsletter
	12. Fade popup

  =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* */

/* ================================= */
/* :::::::::: 1. Loading ::::::::::: */
/* ================================= */

$(window).load(function() {
	
	setTimeout(function() {
	$("#logo-loading").addClass("zoomOut animated");
	}, 1000);

	setTimeout(function() {
	$(".globload").addClass("fadeOut animated");
	}, 2000);

	setTimeout(function() {
	$(".globload").addClass("display-none");
	}, 5000);
	
	setTimeout(function() {
		
		$("#brand-logo").addClass("fadeIn").removeClass("opacity-0");
		
	}, 4000);
	
	

	
	setTimeout(function() {
		
		$(".scrollbott-2").addClass("slideInUp").removeClass("opacity-0");
		$(".control-video").addClass("slideInDown").removeClass("opacity-0");
		
	}, 2500);
	
	
	setTimeout(function() {
		
		$(".scrollbott").addClass("slideInUp").removeClass("opacity-0");
		
	}, 2500);
		
});

/* ================================= */
/* :::::::: 2. Full screen ::::::::: */
/* ================================= */

	$(document).ready(function() {
		fullScreenContainer();
	});

	function fullScreenContainer() {
	
		var screenWidth = $(window).width() + "px";
		var screenHeight = $(window).height() + "px";
		
		$("#coming-soon").css({
		width: screenWidth,
		height: screenHeight
		});
		
		$(window).resize( function () {
		
		var screenWidth = $(window).width() + "px";
		var screenHeight = $(window).height() + "px";
		
		$("#coming-soon").css({
		width: screenWidth,
		height: screenHeight
		}); 
		
	/*	 $.firefly({
		 	color: '#F1E7C0',
		 	minPixel: 1,
		 	maxPixel: 2,
		 	total : 1,
		 	on: '#wrapper-firefly'
		 }); */
		
		}); 
	
	}
	
/* ================================= */
/* :::::::: 3. Inline Popup :::::::: */
/* ================================= */

/* $('#inline-popups').magnificPopup({
  delegate: 'a',
  removalDelay: 100, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
}); */

/* ================================= */
/* ::::::: 4. Scroll Reveal :::::::: */
/* ================================= */

(function($) {

        'use strict';

        // The starting defaults.
            var config = {
            after: '0.2s',
            over: '1.66s',
            mobile: false,
        };

        window.scrollReveal = new scrollReveal({ reset: true, move: '50px' });
    
    })();

/* ================================= */
/* :::: 5. Owl Story Casrousel ::::: */
/* ================================= */


$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
        paginationSpeed : 1000,
    goToFirstSpeed : 2000,
      items: 6,
      navigationText:["<img src\=\"assets/img/prevbg.png\"\/>","<img src\=\"assets/img/nextbg.png\"\/>"]
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

/* $('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		30,
			'month': 	12,
			'year': 	2016,
			'hour': 	11,
			'min': 		13,
			'sec': 		0
		},
		omitWeeks: true
}); */

/* ================================= */
/* ::::::: 6. Center welcome ::::::: */
/* ================================= */

$(document).ready(function(){
	
	$(function(){
		
	 $.fn.center = function () {
		this.css("position","absolute");
		this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
		this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
		return this;
	}
	
		$(".welcomeblock").center();   // on page load div will be centered   
		$(".tlt").center();   // on page load div will be centered                                                
		$(window).resize(function(){ // whatever the screen size this
		   $(".welcomeblock").center();       // this will make it center when 
		   $(".tlt").center();       // this will make it center when 
		});                          // window resize happens
		
	});

});
		
/* ================================= */
/* :::::::::: 7. Carousel :::::::::: */
/* ================================= */

/* $('.carousel').carousel({
	  interval: 5000
}) */
	


/* ================================= */
/* :::::::::: 9. Tooltip ::::::::::: */
/* ================================= */

if (window.matchMedia("(min-width: 1025px)").matches) {	
			
	$(function () { $("[data-toggle='tooltip']").tooltip(); });

}

/* ================================= */
/* ::::::: 10. Smooth scroll ::::::: */
/* ================================= */

smoothScroll.init({
	speed: 800, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
});


/* ================================= */
/* ::::::::: 12. Fade popup :::::::: */
/* ================================= */

new WOW().init();
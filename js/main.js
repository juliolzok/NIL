jQuery(document).ready(function(){
	"use strict";


/* ------------------------------------------------------------------
                PRELOADER                     
------------------------------------------------------------------ */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
    jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
    jQuery(".preloader").delay(1000).fadeOut("slow");
});


/* ------------------------------------------------------------------
                FOR SCROLL UP BUTTON                     
------------------------------------------------------------------ */
	jQuery.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 300, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 300, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: 'Scroll to top', // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
		scrollImg: true, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 2147483647 // Z-Index for the overlay
	});

/* ==================================================================
				Change the menu height on scroll
================================================================== */
	$(window).on('scroll', function() {
	    if ($(window).scrollTop() > 1) {
	        $('.do-main-menu').addClass('minified');
	    } else {
	        $('.do-main-menu').removeClass('minified');
	    }
	});

/* ------------------------------------------------------------------
                USED FOR CLICK TO HIDE MENU                     
------------------------------------------------------------------ */
jQuery(".nav a").on("click", function () {
    jQuery("#nav-menu").removeClass("in").addClass("collapse")
});

$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

/* ------------------------------------------------------------------
                SMOOTH SCROll
------------------------------------------------------------------ */
smoothScroll.init({
    speed: 1500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( toggle, anchor ) {} // Function to run after scrolling
});


/* ------------------------------------------------------------------
                			Lightbox
------------------------------------------------------------------ */
$('.do-work-item-popup').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}
});


/* ------------------------------------------------------------------
                		PARALLAX REFRESH COMMAND
------------------------------------------------------------------ */
if(!Modernizr.touch){
	$(window).stellar({
		responsive: true,
	    positionProperty: 'position',
	    horizontalScrolling: false
	});
}


/* ---------------------------------------------
	Blog and Team Slider
 --------------------------------------------- */
$("#do-team-carousal").owlCarousel({
 
    // Most important owl features
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,3],
    itemsTabletSmall: [767,2],
    itemsMobile : [479,1],
 
    //Autoplay
    autoPlay: 6000, //Set AutoPlay to 5 seconds
 
    // Navigation
    navigation : false,
 
    //Pagination
    pagination : true
});


$("#do-blog-slider").owlCarousel({    
    singleItem : true,
 
    //Autoplay
    autoPlay: 10000, //Set AutoPlay to 5 seconds
 
    // Navigation
    navigation : false,
 
    //Pagination
    pagination : true
});


$("#do-testimonial-1st").owlCarousel({
	//Items
	items : 1,
	itemsDesktop: [1199,1],
	itemsDesktopSmall: [979,1],
	itemsTablet: [768,1],
	itemsMobile : [520,1],

	//Autoplay
	autoPlay: false,

	// Navigation
	navigation : false,

	//Pagination
	pagination: true
});


$("#do-testimonial-2nd").owlCarousel({
	//Items
	items : 1,
	itemsDesktop: [1199,1],
	itemsDesktopSmall: [979,1],
	itemsTablet: [768,1],
	itemsMobile : [520,1],

	//Autoplay
	autoPlay: 6000,

	// Navigation
	navigation : true,
	navigationText: ["",""],

	//Pagination
	pagination: false
});



$("#do-related-work-carousal").owlCarousel({
	//Items
	items : 4,
	itemsDesktop: [1199,4],
	itemsDesktopSmall: [979,3],
	itemsTablet: [768,2],
	itemsMobile : [520,1],

	//Autoplay
	autoPlay: 7000,

	// Navigation
	navigation : false,
	navigationText: ["",""],

	//Pagination
	pagination: false
});


$("#do-portfolio-slider").owlCarousel({
	//Items
	items : 5,
	itemsDesktop: [1199,5],
	itemsDesktopSmall: [979,4],
	itemsTablet: [768,3],
	itemsMobile : [520,1],

	//Autoplay
	autoPlay: 7000,

	// Navigation
	navigation : false,
	navigationText: ["",""],

	//Pagination
	pagination: false
});

$("#do-logo-slider").owlCarousel({
	//Items
	items : 4,
	itemsDesktop: [1199,4],
	itemsDesktopSmall: [979,3],
	itemsTablet: [768,3],
	itemsMobile : [520,1],

	//Autoplay
	autoPlay: false,

	// Navigation
	navigation : false,

	//Pagination
	pagination: true
});

$("#do-logo-slider-2nd").owlCarousel({
	//Items
	items : 5,
	itemsDesktop: [1199,4],
	itemsDesktopSmall: [979,4],
	itemsTablet: [768,3],
	itemsMobile : [520,1],

	//Autoplay
	autoPlay: false,

	// Navigation
	navigation : false,

	//Pagination
	pagination: false
});

/* ==================================================================
                		Flickr Feed
================================================================== */
$('#flickr-gallery').jflickrfeed({
	limit: 6,
	qstrings: {
		id: '35653055@N04'   /* Add your Flickr ID here. You can find your flickr id from http://idgettr.com/ */
	},
	itemTemplate:
	'<li>' +
		'<a class="flickr-gallery-img" href="{{image}}" title="{{title}}">' +
			'<img src="{{image_s}}" alt="{{title}}" />' +
		'</a>' +
	'</li>'
}, function(data) {
	$('.flickr-gallery-img').magnificPopup({
		type: 'image',
		  gallery:{
		    enabled:true
		  }
	});
});


/* ==================================================================
					WoW Js
================================================================== */
	var wow = new WOW(
	  {
	    boxClass:     'appear',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       100,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    }
	  }
	);
	wow.init();



/* ==================================================================
                		SKILLBAR
================================================================== */
$('.do-about-us-section').waypoint(function(direction) {
	$('.do-skillbar[data-percent]').each(function () {
		var skillbarWrapper = $(this);
	    var progress = $(this).find('span.skill-bar-percent');
	    var percentage = Math.ceil($(this).attr('data-percent'));
	    $({countNum: 0}).animate({countNum: percentage}, {
	      duration: 4000,
	      step: function() {
	        // What todo on every count
	      var pct = '';
	      if(percentage == 0){
	        pct = Math.floor(this.countNum) + '%';
	      }else{
	        pct = Math.floor(this.countNum+1) + '%';
	      }
	      progress.text(pct) && skillbarWrapper.find('.do-skillbar-bar').css('width',pct);
	      }
	    });
	  });
	this.destroy()
}, {
	offset: '50%'
});


$('.do-custom-section-three').waypoint(function(direction) {
	$('.do-skillbar[data-percent]').each(function () {
		var skillbarWrapper = $(this);
	    var progress = $(this).find('span.skill-bar-percent');
	    var percentage = Math.ceil($(this).attr('data-percent'));
	    $({countNum: 0}).animate({countNum: percentage}, {
	      duration: 4000,
	      step: function() {
	        // What todo on every count
	      var pct = '';
	      if(percentage == 0){
	        pct = Math.floor(this.countNum) + '%';
	      }else{
	        pct = Math.floor(this.countNum+1) + '%';
	      }
	      progress.text(pct) && skillbarWrapper.find('.do-skillbar-bar').css('width',pct);
	      }
	    });
	  });
	this.destroy()
}, {
	offset: 'bottom-in-view'
});


/* ==================================================================
                		COUNTER PLUGIN
================================================================== */
$('.do-counter-section').waypoint(function(direction) {
	$('.do-counter').countTo({
        speed: 3500
    });
	this.destroy()
}, {
	offset: 'bottom-in-view'
});

// HOMEPAGE 3
$('.do-counter-section-2').waypoint(function(direction) {
	$('.do-counter').countTo({
        speed: 3500
    });
	this.destroy()
}, {
	offset: 'bottom-in-view'
});


$(function(){
    $(window).on("resize.showContent", function() {
    var windowsize = $(window).width();
    if(windowsize <= 767) {
    	// HOMEPAGE
    	$('.do-counter-section').waypoint(function(direction) {
			$('.do-counter').countTo({
		        speed: 3500
		    });
			this.destroy()
		}, {
			offset: '25%'
		});

		// HOMEPAGE 3
		$('.do-counter-section-2').waypoint(function(direction) {
			$('.do-counter').countTo({
		        speed: 3500
		    });
			this.destroy()
		}, {
			offset: '25%'
		});
      }
    }).trigger("resize.showContent")
});


/* ==================================================================
                		BLOG INFINITE SCROLL
================================================================== */

  var $blogContainer = $('.do-infinite-blog'),
  	  $blogMasonryContainer = $('.do-masonry-blog-wrapper');

  	$blogContainer.infinitescroll({
		navSelector  : '#do-blog-next-page-nav',    // selector for the paged navigation 
		nextSelector : '#do-blog-next-page-nav a',  // selector for the NEXT link (to page 2)
		itemSelector : '.do-blog-items',     // selector for all items you'll retrieve
		animate: true,
		loading: {
			msgText: "",
			speed: 500,
			animate: false,
		    finishedMsg: 'No more items to load.',
		    img: 'images/controls/loader.GIF'
		  }
		}
	);

	$blogMasonryContainer.imagesLoaded(function(){
	    $blogMasonryContainer.isotope({
	        itemSelector : '.do-blog-masonry-items',
	        masonry: {
			    columnWidth: '.do-masonry-blog-wrapper .do-blog-masonry-items'
			  }
	    });
	});

	$blogMasonryContainer.infinitescroll({
		navSelector  : '#do-blog-next-page-nav',    // selector for the paged navigation 
		nextSelector : '#do-blog-next-page-nav a',  // selector for the NEXT link (to page 2)
		itemSelector : '.do-blog-masonry-items',     // selector for all items you'll retrieve
		animate: true,
		loading: {
			msgText: "",
			speed: 500,
			animate: false,
		    finishedMsg: 'No more items to load.',
		    img: 'images/controls/loader.GIF'
		  }
		},
		function( newElements ) {
	    	$blogMasonryContainer.imagesLoaded(function(){
				 $blogMasonryContainer.isotope( 'appended', $( newElements ) );
			});
		}
	);


/* ==================================================================
                	PORTFOLIO INFINITE SCROLL
================================================================== */
	var $portfolioContainer	= $('.do-portfolio-works');

		// filter items on button click
		$portfolioContainer.imagesLoaded(function(){
			$portfolioContainer.isotope({
				filter: '*',
				itemSelector: '.do-work-item',
				animationOptions: {
				    duration: 750,
				    easing: 'linear',
				    queue: false
				},
				masonry: {
				  // use outer width of grid-sizer for columnWidth
				  columnWidth: '.do-work-item'
				}
			});
		});


	    $portfolioContainer.infinitescroll({
		    navSelector  : '#do-portfolio-next-page-nav',    // selector for the paged navigation 
		    nextSelector : '#do-portfolio-next-page-nav a',  // selector for the NEXT link (to page 2)
		    itemSelector : '.do-work-item',     // selector for all items you'll retrieve
		    loading: {
		        finishedMsg: 'No more pages to load.',
		        img: 'images/controls/loader.GIF'
		      }
		    },
		    // call Isotope as a callback
		    function( newElements ) {
		    	$portfolioContainer.imagesLoaded(function(){
					$portfolioContainer.isotope( 'appended', $( newElements ) );
				});
			$('.do-work-item-popup').magnificPopup({
				type: 'image',
				gallery:{
					enabled:true
				}
			});
			}
		);


		$('#do-portfolio-filter a').on('click',function(){
		    var selector = $(this).attr('data-filter');
		        $portfolioContainer.isotope({
			        filter: selector,
			        animationOptions: {
			            duration: 750,
			            easing: 'linear',
			            queue: false
		            }
		        });
		    return false;
		});


		var $optionSets = $('#do-portfolio-filter .do-portfolio-filter-btn-group'),
		         $optionLinks = $optionSets.find('a');

		         $optionLinks.on('click',function(){
		            var $this = $(this);
		        // don't proceed if already selected
		        if ( $this.hasClass('selected') ) {
		            return false;
		        }
		     var $optionSet = $this.parents('#do-portfolio-filter .do-portfolio-filter-btn-group');
		     $optionSet.find('.selected').removeClass('selected');
		     $this.addClass('selected');
		});

	
/* ==================================================================
                		Homepage Slider
================================================================== */
$( '#do-homeone-slider' ).sliderPro({
	width: '100%',
    fade: true,
    forceSize: 'fullWindow',
    arrows: true,
    waitForLayers: false,
    buttons: false,
    autoplay: true,
    autoplayDelay: 12000,
    autoplayOnHover: 'none',
    autoScaleLayers: false,
    slideAnimationDuration: 2000
});

$( '#do-hometwo-slider' ).sliderPro({
	width: '100%',
    fade: true,
    forceSize: 'fullWindow',
    arrows: true,
    waitForLayers: false,
    buttons: false,
    autoplay: true,
    autoplayDelay: 8000,
    autoplayOnHover: 'none',
    autoScaleLayers: false,
    slideAnimationDuration: 2000
});

$('.do-homepage-one .sp-mask').css({'height':($(window).height() - 60 ) +'px'});
$('.do-homepage-one .sp-slide').css({'height':($(window).height() - 60 ) +'px'});


var windowH = $(window).height();
var wrapperH = $('.do-homepage-2nd header, .do-homepage-fourth header').height();

	if(windowH > wrapperH) {
	    $('.do-homepage-2nd header, .do-homepage-fourth header').css({'height':($(window).height())+'px'});
	}

	$(window).resize(function(){
	    var windowH = $(window).height();
	    var wrapperH = $('.do-homepage-2nd header, .do-homepage-fourth header').height();
	    var differenceH = windowH - wrapperH;
	    var newH = wrapperH + differenceH;
	    var truecontentH = $('.do-hero-header-wrapper').height();
	    if(windowH <= truecontentH) {
	        $('.do-homepage-2nd header, .do-homepage-fourth header').css('height', (newH)+'px');
	    } else if(windowH > wrapperH) {
	        $('.do-homepage-2nd header, .do-homepage-fourth header').css({'height':($(window).height())+'px'});
	    }
	})
	$(window).trigger('resize');


/* ==================================================================
                		Contact Form
================================================================== */

$("#do-submit-btn").on('click',function() {
    var proceed = true;
    //simple validation at client's end
    //loop through each field and we simply change border color to red for invalid fields
	$("#contact-form input, #contact-form textarea").each(function(){
		$(this).css('border-color','');
		if(!$.trim($(this).val())){ //if this field is empty
			$(this).css('border','1px solid #FC4848'); //change border color to red
			proceed = false; //set do not proceed flag
		}
		//check invalid email
		var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
			$(this).css('border','1px solid #FC4848'); //change border color to red
			proceed = false; //set do not proceed flag
		}
	});

	$(".do-home-contact-form #contact-form input, .do-home-contact-form #contact-form textarea").each(function(){
		$(this).css('border-bottom-color','');
		if(!$.trim($(this).val())){ //if this field is empty
			$(this).css({
				"border": "0px solid",
				"border-bottom": "2px solid #FC4848",
			}); //change border color to red
			proceed = false; //set do not proceed flag
		}
		//check invalid email
		var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
			$(this).css('border-bottom','2px solid #FC4848'); //change border color to red
			proceed = false; //set do not proceed flag
		}
	});

    if(proceed) //everything looks good! proceed...
    {
		//get input field values data to be sent to server
        var post_data = {
			'name'		: $('input[name=name]').val(),
			'email'	: $('input[name=email]').val(),
			'message'		: $('textarea[name=message]').val()
		};
        var output = '';
        //Ajax post data to server
        $.post('contact.php', post_data, function(response){
			if(response.type == 'error'){ //load json data from server and output message
				output = '<div class="error">'+response.text+'</div>';
			}else{
			    output = '<div class="success">'+response.text+'</div>';
				//reset values in all input fields
				$("#contact-form input, #contact-form textarea").val('');
				//$("#contact-form").slideUp(); //hide form after success
			}
			$("#contact-result").hide().html(output).slideDown();
        }, 'json');
    }else{
		$("#contact-result").hide().html('<div class="error">All fields are Required.</div>').slideDown();
	}
});

//reset previously set border colors and hide all message on .keyup()
$("#contact-form input, #contact-form textarea").keyup(function() {
    $(this).css('border','');
    $("#contact-result").slideUp();
});

});

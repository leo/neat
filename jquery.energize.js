/*!
	Energize 0.0.1
	Copyright 2014 - medienreaktor GmbH
*/

(function ($) {

	$.fn.accordion = function(speed) {

		$(this).find('dt').click(function(){
				
			var open_items = $(this).next().hasClass('open');
			var next = $(this).next();
			var opened = $(this).closest('dl').find('.open');
					
			if(open_items != true){
				$(opened).slideUp();
				$(opened).removeAttr('class');
			}
					
			$(next).slideToggle(speed);
			$(next).toggleClass('open');
				
		});
		
	}
   
	$.fn.tabs = function() {

		$(this).find('nav ul li a').click(function(event){
			
			var curr = $(this).closest('li').hasClass('active');
			var id = $(this).attr('href').split('#')[1];
			var tabs = $(this).closest('div[class*="tabs"]');
			
			if(curr != true){
				$(this).closest('ul').find('.active').removeClass('active');
				$(this).closest('li').addClass('active');
				
				$(tabs).find('article.active').hide();
				$(tabs).find('article.active').removeClass('active');
				
				$(tabs).find('#' + id).show();
				$(tabs).find('#' + id).addClass('active');
			}
			
			event.preventDefault();
		});
	}
	
	$.fn.center = function() {
		
		$(document).ready(function(){
    			center_me();
    			$(window).on('resize', center_me);
		});
  
		function center_me(){
    			$(this).css({
        			position: 'absolute',
        			left: ($(window).width() / 2) - $(this).outerWidth(true) / 2,
        			top: ($(window).height() / 2) - $(this).outerHeight(true) / 2
    			});
 		}

	}

}(jQuery));

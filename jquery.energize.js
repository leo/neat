/*!
	Energize 0.0.1
	Copyright 2014 - medienreaktor GmbH
*/

(function ($) {

	$.fn.accordion = function(speed) {
		
		$(this).find('dd').css('display', 'none');

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
		
		$(this).find('section article').not('.active').css('display', 'none');

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
	
	$.fn.center = function(options) {
        
        	element = $(this);
        
		var config = {
			'container': null
		}
		
		if (options) {
			$.extend(config, options);
		}
		
		if (config.container !== null) {
			var wrap = config.container;
		} else {
			var wrap = $(window);
		}
          
        	$( window ).resize(function() {
    			element.css({
        			position: 'absolute',
        			left: (wrap.width() / 2) - element.outerWidth(true) / 2,
        			top: (wrap.height() / 2) - element.outerHeight(true) / 2
    			});
		}).trigger('resize');
        
        	return this;
        	
	}

}(jQuery));

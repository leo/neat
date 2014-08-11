/*!
	neat 0.0.6 - a lightweight ui-handler for jquery
	Copyright 2014 - medienreaktor GmbH
*/

(function ($) {
	
	$.fn.toggleAttr = function(attr, attr_con) {
		
		var el = $(this);
		
		if(el.attr(attr)) {
			el.removeAttr(attr);
		} else {
			el.attr(attr, attr_con);
		}
		
	}

	$.fn.accordion = function(speed, all) { 
		
        	if(!all) {
            
            		$(this).find('dd').css('display', 'none');

            		$(this).find('dt').click(function(){
                    
                		var open_items = $(this).next().hasClass('open');
                		var next = $(this).next();
                		var opened = $(this).closest('dl').find('.open');
                        
                		if(open_items != true){
                    			$(opened).slideUp(speed);
                    			$(opened).removeAttr('class');
                    			$(this).closest('dl').find('.active').removeClass('active');
                		};
                        
                		$(next).slideToggle(speed);
                		$(next).toggleClass('open');
                		$(this).toggleClass('active');
                    
        		});
            
        	} else {
        
            		if(all == 'open' && $(this).hasClass('all-open') == false) {
                		$(this).find('dd').not(".open").slideDown(speed).addClass('open');
                		$(this).find('dt').not(".active").addClass('active');
                        
                		$(this).removeClass('all-closed');
                		$(this).addClass('all-open');
            		}
            
            		if(all == 'close' && $(this).hasClass('all-closed') == false) {
                		$(this).find('.open').slideUp(speed).removeClass('open');                 
                		$(this).find('.active').removeClass('active');
                        
                		$(this).removeClass('all-open');
                		$(this).addClass('all-closed');
            		}
            
            		if(all == 'toggle') {
                		$(this).find('dd').slideToggle(speed).toggleClass('open');
                		$(this).find('dt').toggleClass('active');
                        
                		$(this).removeClass('all-open all-closed');
            		}
            
        	}
		
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
			};
			
			event.preventDefault();
		});
	}
	
	$.fn.center = function(options) {
        
        	element = $(this);
        
		var config = {
			'container': null
		};
		
		if (options) {
			$.extend(config, options);
		};
		
		if (config.container !== null) {
			var wrap = config.container;
			container.css('position', 'relative');
		} else {
			var wrap = $(window);
		};
          
        	$(window).resize(function() {
    			element.css({
        			position: 'absolute',
        			left: (wrap.width() / 2) - element.outerWidth(true) / 2,
        			top: (wrap.height() / 2) - element.outerHeight(true) / 2
    			});
		}).trigger('resize');
        
        	return this;
        	
	}
	
	$.fn.tooltip = function(speed) {
		
		if(! speed) {
			var speed = 300;	
		};
    
		$(this).hover(function(){ 
			
			var tooltip_content = $(this).attr('title');
			var position = $(this).position();
        
			$(this).data('tooltip', tooltip_content).removeAttr('title');
			
			var styling =	'display: none; ' +
					'position: absolute; ' +
					'left: ' + position.left + 'px; ' +
					'top: ' + (position.top + $(this).outerHeight(true)) + 'px;';
		
			$('body').append('<div role="tooltip" style="' + styling + '">' + tooltip_content + '</div>');
			$('div[role="tooltip"]').fadeIn(speed);
			
		}, function(){
         
			$(this).attr('title', $(this).data('tooltip'));
			$('div[role="tooltip"]').fadeOut(speed, function(){
				$(this).remove();
			});
			
		});
		
	}

}(jQuery));

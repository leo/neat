/*
	neat 8 - a lightweight ui-handler for jquery
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

	$.fn.accordion = function(raw_speed, all) {
		
		var root = $(this);
		var speed = raw_speed;
		
		$(this).find('dd').css('display', 'none');
		
		$(this).find('dt').click(function(){
                    
			var open_items = $(this).next().hasClass('open');
			var next = $(this).next();
			var opened = $(this).closest('dl').find('.open');
                        
			if(open_items != true){
				opened.slideUp(speed);
				opened.removeAttr('class');
				$(this).closest('dl').find('.active').removeClass('active');
			};
                        
			next.slideToggle(speed);
			next.toggleClass('open');
			$(this).toggleClass('active');
                    
		});
            
		return {
			
			multi: function(sort) {
				
				if(sort == 'open' && root.hasClass('all-open') == false) {
					root.find('dd').not(".open").slideDown(speed).addClass('open');
					root.find('dt').not(".active").addClass('active');
					
					root.removeClass('all-closed');
					root.addClass('all-open');
				}
					
				if(sort == 'close' && root.hasClass('all-closed') == false) {
					root.find('.open').slideUp(speed).removeClass('open');                 
					root.find('.active').removeClass('active');
					
					root.removeClass('all-open');
					root.addClass('all-closed');
				}
				
				if(sort == 'toggle') {
					root.find('dd').slideToggle(speed).toggleClass('open');
					root.find('dt').toggleClass('active');
					
					root.removeClass('all-open all-closed');
				}
				
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
				
				tabs.find('article.active').hide().removeClass('active');
				tabs.find('#' + id).show().addClass('active');
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

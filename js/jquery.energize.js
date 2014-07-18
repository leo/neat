/*!
	Energize 0.0.1
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

}(jQuery));
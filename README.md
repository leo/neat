## usage

Of course you need no include **jQuery** in your site, before you can use neat.

	<script src="//code.jquery.com/jquery-latest.min.js"></script>
	
Afterwards our plugin needs to be loaded and initiated through some pretty neat methods. (You can find more information about each method in the [wiki](../../wiki).)

	<script src="jquery.neat.min.js"></script>
		
	<script>
		$(function(){
			$('.accordion').accordion();
			$('.tabs').tabs();
			$('.element').center();
			$('a[title]').tooltip();
		});
	</script>
	
### minified

As a developer you be an opponent of long loading times. In order to save as much space, you can download the minimized version of our plugin <a href="http://marijnhaverbeke.nl//uglifyjs?code_url=https://raw.githubusercontent.com/medienreaktor/neat/master/jquery.neat.js&header=/*!%20neat%20-%20a%20lightweight%20ui-handler%20for%20jquery%20-%20Copyright%202014%20medienreaktor%20GmbH%20*/">here</a>.

### delays on mobile devices

Many mobile browsers are adding a 300ms-delay to each click-event because they need to check if you use the double-tab method first. Of course, this is pretty ugly. To get around this you just need to implement [fastclick] (http://build.origami.ft.com/bundles/js?modules=fastclick):

	$(function() {
    		FastClick.attach(document.body);
	});

# neat

neat is a lightweight UI handler for jQuery.

## Why is it neat?

jQuery UI is overloaded and bloated. neat is not.


## How to use?

First include jQuery, then neat in your site:

	<script src="//code.jquery.com/jquery-latest.min.js"></script>
	<script src="jquery.neat.min.js"></script>
	
Use the neat methods (you can find more about methods in the [wiki](../../wiki)):
		
	<script>
		$(function(){
			$('.element').method();
		});
	</script>
	
### Minified

Reduce loading times and use the minified version of the plugin <a href="https://rawgit.com/medienreaktor/neat/master/jquery.neat.min.js">here</a>.

### Delays on Mobile Devices

Many mobile browsers add a 300ms-delay to each click-event (to check for double-tapping). To get around this, you just need to implement [fastclick] (http://build.origami.ft.com/bundles/js?modules=fastclick):

	$(function() {
    		FastClick.attach(document.body);
	});

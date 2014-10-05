## what?

We all know jQuery UI but no one likes it. Why? It's completely overloaded and absolutely not dynamic. At this point, "neat" comes in.

## how?

Of course you need no include **jQuery** in your site, before you can use neat.

	<script src="//code.jquery.com/jquery-latest.min.js"></script>
	
Afterwards our plugin needs to be loaded and initiated through some pretty neat methods. (You can find more information about each method in the [wiki](../../wiki).)

	<script src="jquery.neat.min.js"></script>
		
	<script>
		$(function(){
			$('.element').method();
		});
	</script>
	
### minified

As a developer you be an opponent of long loading times. In order to save as much space, you can download the minimized version of our plugin <a href="https://raw.githubusercontent.com/medienreaktor/neat/master/jquery.neat.min.js">here</a>.

### delays on mobile devices

Many mobile browsers are adding a 300ms-delay to each click-event because they need to check if you use the double-tab method first. Of course, this is pretty ugly. To get around this you just need to implement [fastclick] (http://build.origami.ft.com/bundles/js?modules=fastclick):

	$(function() {
    		FastClick.attach(document.body);
	});

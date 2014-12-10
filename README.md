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

### Methods

#### .accordion()

Create an accordion using a plain definition list:

	<dl class="list">
		<dt>This is the title of the first pane</dt>
		<dd>This is a description.</dd>
		<dt>This is the title of the second pane</dt>
		<dd>This is a description.</dd>
	</dl>
	
Load and customize it:

	$('.list').accordion({
		'speed': 200  // Defines the toggling speed of each item
	});

#### .tabs()

Create a tabbed navigation using a list and articles:

	<div class="tabs">
		<nav>
			<ul>
				<li><a href="#tab-1">Navigation zu Tab 1</a></li>
				<li><a href="#tab-2">Navigation zu Tab 2</a></li>
			</ul>
		</nav>
		<section>
			<article id="tab-1">
				Inhalt des ersten Tabs.
			</article>
			<article id="tab-2">
				Inhalt des zweiten Tabs.
			</article>
		</section>
	</div>

Load it:

	$('.tabs').tabs();
	

#### .tooltip()

TODO: Describe what it does and how to use ...

	
#### .center()

TODO: Describe what it does and how to use ...


## Further information	

### Minified version

Reduce loading times and use the minified version of the plugin <a href="https://rawgit.com/medienreaktor/neat/master/jquery.neat.min.js">here</a>.

### Delays on Mobile Devices

Many mobile browsers add a 300ms-delay to each click-event (to check for double-tapping). To get around this, you just need to implement [fastclick] (http://build.origami.ft.com/bundles/js?modules=fastclick):

	$(function() {
    		FastClick.attach(document.body);
	});

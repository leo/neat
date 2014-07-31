## Installation

Selbstverständlich sollte zunächst **jQuery** auf der jeweiligen Seite eingebunden werden, damit unser Plugin überhaupt funktioniert:

	<script src="//code.jquery.com/jquery-latest.min.js"></script>

Anschließend sollte dann sowohl das Plugin geladen, als auch direkt initiiert werden. Das sieht dann so aus:

	<script src="js/jquery.neat.min.js"></script>
		
	<script>
		$(function(){
			$('.accordion').accordion(200);
			$('.tabs').tabs();
			$('.element').center();
			$('a[title]').tooltip();
		});
	</script>

## Verzögerungen deaktivieren

Auf einigen mobilen Browsern werden Verzögerungen bei den Klick-Events auftreten, welche sich ganz einfach beheben lassen. Hierzu muss das jQuery-Plugin 'fastclick' eingebunden werden:

https://github.com/ftlabs/fastclick/blob/master/lib/fastclick.js

Ist das Plugin eingebunden, muss es nurnoch wie folgt initiiert werden:

	$(function() {
    		FastClick.attach(document.body);
	});

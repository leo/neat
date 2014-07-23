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

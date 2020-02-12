<?php include 'includes/header.php'; ?>

	<div class="container big_container no_padding">
		<div class="row content_container">
			<div class="col-xs-12">
				<div class="left_container">
					<center>
						<form name="quadro">
							<table border="1" cellspacing="2" cellpadding="10">
								<!-- primeira linha -->
								<tr>
									<td>
										<button name="L[1]C[1]" type="button" onclick="Usuario_Joga(1,1)" disabled></button>
									</td>
									<td>
										<button name="L[1]C[2]" type="button" onclick="Usuario_Joga(1,2)" disabled></button>
									</td>
									<td>
										<button name="L[1]C[3]" type="button" onclick="Usuario_Joga(1,3)" disabled></button>
									</td>
								</tr>
								<!-- segunda linha -->
								<tr>
									<td>
										<button name="L[2]C[1]" type="button" onclick="Usuario_Joga(2,1)" disabled></button>
									</td>
									<td>
										<button name="L[2]C[2]" type="button" onclick="Usuario_Joga(2,2)" disabled></button>
									</td>
									<td>
										<button name="L[2]C[3]" type="button" onclick="Usuario_Joga(2,3)" disabled></button>
									</td>
								</tr>
								<!-- terceira linha -->
								<tr>
									<td>
										<button name="L[3]C[1]" type="button" onclick="Usuario_Joga(3,1)" disabled></button>
									</td>
									<td>
										<button name="L[3]C[2]" type="button" onclick="Usuario_Joga(3,2)" disabled></button>
									</td>
									<td>
										<button name="L[3]C[3]" type="button" onclick="Usuario_Joga(3,3)" disabled></button>
									</td>
								</tr>
							</table>
							<div onclick="IniciarJogo()" class="button_play"><img src="public/images/play_button.png"></div>
						</form>
					</center>
				</div>
			</div>
		</div>
		<div class="answers_container">
			<div id="winner">
				<h2 class="background" data-target="winner">you WON</h2>
			</div> 
			<div id="tie">
				<h2 class="background" data-target="tie">it's a tie</h2>
			</div>
			<div id="loser">
				<h2 class="background" ata-target="loser">you WON</h2>
			</div>
		</div>
	</div>

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script>
		var game_width;
		function start(){
			var wh = $(window).height();
			$('.big_container').height(wh);
			game_width = $('.left_container table').width();
			if(window.innerWidth < 769){
				$('.left_container table').height(game_width);
				$('.left_container .button_play').height(game_width);
	        }
	        else{
	        	$('.left_container table').height('439');
	        	$('.left_container .button_play').height('439');
	        }
		}
		$('body').on('click', '.background', function(){
			elem = $(this).data('target');
			$('#'+elem).fadeOut();
			$('.answers_container').fadeOut();
			$('.'+elem).css('opacity', '0');
			reset();
		})
		start();
		window.addEventListener('resize', function(event){
			start();
		});
	</script>
	</body>
</html>
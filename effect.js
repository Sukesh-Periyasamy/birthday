$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function(){
	var vw;
	$(window).resize(function(){
		vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4').stop();
		$('#b11').animate({top:240, left: vw-200},500);
		$('#b22').animate({top:240, left: vw-70},500);
		$('#b33').animate({top:240, left: vw+60},500);
		$('#b44').animate({top:240, left: vw+190},500);
	});

	// Turn on lights - First action
	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow');
		
		// Auto play music after 1 second
		setTimeout(function(){
			$('#play').click();
		}, 1000);
	});

	// Play music - Automatic
	$('#play').click(function(){
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		
		// Auto show banner after 2 seconds
		setTimeout(function(){
			startAutomaticSequence();
		}, 2000);
	});

	// Automatic sequence
	function startAutomaticSequence() {
		// Step 1: Banner comes in
		$('.bannar').addClass('bannar-come');
		
		// Step 2: Balloons fly after 3 seconds
		setTimeout(function(){
			flyBalloons();
		}, 3000);
	}

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}

	function flyBalloons() {
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3').addClass('balloons-rotate-behaviour-two');
		
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		
		// Step 3: Show cake after 4 seconds
		setTimeout(function(){
			showCake();
		}, 4000);
	}

	function showCake() {
		$('.cake').fadeIn('slow');
		
		// Candles are already lit (fuego visible by default)
		$('.fuego').fadeIn('slow');
		
		// Step 4: Show blow candle button after 3 seconds
		setTimeout(function(){
			$('#blow_candle').fadeIn('slow');
		}, 3000);
	}

	// Blow candles - User action
	$('#blow_candle').click(function(){
		// Blow out candles
		$('.fuego').fadeOut('slow');
		$(this).fadeOut('slow');
		
		// Show TINA message
		setTimeout(function(){
			showTinaMessage();
		}, 1000);
	});

	function showTinaMessage() {
		vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		
		$('#b11').animate({top:240, left: vw-200},500);
		$('#b22').animate({top:240, left: vw-70},500);
		$('#b33').animate({top:240, left: vw+60},500);
		$('#b44').animate({top:240, left: vw+190},500);
		
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		
		// Show story message
		setTimeout(function(){
			showStory();
		}, 3000);
	}
	
	function showStory() {
		$('.cake').fadeOut('fast');
		$('.message').fadeIn('slow');
		
		var i;
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				
				if(i==21){
					$("p:nth-child(20)").fadeOut('slow').promise().done(function () {
						$('.message').fadeOut('fast');
						$('.cake').fadeIn('fast');
						
						// Show gift button after message ends
						setTimeout(function(){
							$('#open_gift').fadeIn('slow');
						}, 2000);
					});
				}
				else{
					msgLoop(i);
				}			
			});
		}
		msgLoop(0);
	}

	// Open gift - Redirect to main website
	$('#open_gift').click(function(){
		window.location.href = 'main.html';
	});
});

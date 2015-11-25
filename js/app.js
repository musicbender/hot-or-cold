
$(document).ready(function(){
    
    //Setting up new game
    var secretNumber;
    
	function newGame() {
        secretNumber = randomNumber();
        //console.log('DEBUG: ' + secretNumber);
        $('#feedback').text('Make your Guess!');
        $('#count').text('0');
        $('#guesslist').empty();
    }
    
    function randomNumber() {
        return Math.floor((Math.random()* 100) + 1);
    }
    
    newGmae();
    
    
    
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



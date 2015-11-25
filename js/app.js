
$(document).ready(function(){
    
    /*--Setting up new game--*/
    var secretNumber,
        guess;
    
	function newGame() {
        secretNumber = randomNumber();
        
        $('#feedback').text('Make your Guess!');
        $('#count').text('0');
        $('#guesslist').empty();
    }
    
    function randomNumber() {
        return Math.floor((Math.random()* 100) + 1);
    }
    
    newGame();
    
    
    $('form').submit(function(){
        guess = $('#userguess').val();
        
        checkGuess();
        
        function checkGuess() {
            if (guess == secretNumber){
                $('#feedback').text("You got it!");
            }
            else {
                holdCold();
            }
        }
        
        function hotCold(){
            if ((guess > secretNumber + 50) || (guess < secretNumber - 50)){
                $('#feedback').text("Ice Cold");
            }
            else if (((guess < secretNumber + 50) && (guess > secretNumber + 30)) || ((guess > secretNumber - 50) && (guess < secretNumber - 30))){
                $('#feedback').text("Cold");
            }
            else if (((guess < secretNumber + 30) && (guess > secretNumber + 20)) || ((guess > secretNumber - 30) && (guess < secretNumber - 20))) {
                $('#feedback').text("Warm");
            }  
            else if (((guess < secretNumber + 20) && (guess > secretNumber + 10)) || ((guess > secretNumber - 20) && (guess < secretNumber - 10))){
                $('#feedback').text("Hot!");
            }
            else if (((guess < secretNumber + 10) && (guess > secretNumber + 1)) || ((guess > secretNumber - 10) && (guess < secretNumber - 1))){
                $('#feedback').text("Very Hot!");
            }
            else{
                $('#feedback').text("error");
            }
        }  
    });
    

    
    
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



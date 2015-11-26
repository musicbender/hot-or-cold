
$(document).ready(function(){
    
    /*--Setting up new game--*/
    var secretNumber,
        guess;
    
    //functions when creating a new game
	function newGame() {
        secretNumber = randomNumber();
        
        $('#feedback').text('Make your Guess!');
        $('#count').text('0');
        $('#guesslist').empty();
    }
    
    //create random number between 1-100
    function randomNumber() {
        return Math.floor((Math.random()* 100) + 1);
    }
    
    newGame();
    
    //Run newGame() when clicking New Game at the top
    $('.new').click(function(){
        newGame();
    });
    
    
    $('form').submit(function(){
        guess = $('#userGuess').val();
        checkGuess();
        
        //Checks if guess is correct answer, if not runs hotCold() function
        function checkGuess() {
            if (guess == secretNumber){
                $('#feedback').text("You got it!");
            }
            else {
                console.log('DEBUG: Run hotCold()');
                hotCold();
            }
        }
        
        //Tells you if your incorrect answer is hot, cold, etc...
        function hotCold(){
            console.log('DEBUG: Secret Number is ' + secretNumber + ' Guess is: ' + guess);
            if ((guess > secretNumber + 50) || (guess < secretNumber - 50)){
                $('#feedback').text("Ice Cold");
            }
            else if (((guess <= secretNumber + 50) && (guess > secretNumber + 30)) || ((guess >= secretNumber - 50) && (guess < secretNumber - 30))){
                $('#feedback').text("Cold");
            }
            else if (((guess <= secretNumber + 30) && (guess > secretNumber + 20)) || ((guess >= secretNumber - 30) && (guess < secretNumber - 20))) {
                $('#feedback').text("Warm");
            }  
            else if (((guess <= secretNumber + 20) && (guess > secretNumber + 10)) || ((guess >= secretNumber - 20) && (guess < secretNumber - 10))){
                $('#feedback').text("Hot!");
            }
            else if (((guess <= secretNumber + 10) && (guess > secretNumber + 2)) || ((guess >= secretNumber - 10) && (guess < secretNumber - 2))){
                $('#feedback').text("Very Hot!");
            }
            else if (((guess <= secretNumber + 2) && (guess >= secretNumber + 1)) || ((guess >= secretNumber - 2) && (guess <= secretNumber - 1))){
                $('#feedback').text("SMOKIN!!!");
            }
            else{
                $('#feedback').text("Keep Trying!");
            }
        }  
        
        //adds this guess to guesslist
        $('#guessList').append('<li>' + guess + ' </li>');
        
        //clear textbox
        $('#userGuess').val('');
        
        return false;
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




$(document).ready(function(){
	function newGame() {
        var secretNumber = randomNumber();
    }
    
    function randomNumber() {
        return Math.floor((Math.random()* 10) + 1);
    }
    
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



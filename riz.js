function guess_number(){
  var secret = 22;
  var guess;
  while(guess != secret){ 
    guess = prompt("Guess a number between 1 and 100");
   
    if(guess == secret){
       alert("Conadhfljsdt");
    }
    else if(guess < secret){
        alert("guess higher");        
    }
    else if(guess > secret){
      alert("guess lower");
    }
    else{
      alert("that's not a number");
    }
  }
}
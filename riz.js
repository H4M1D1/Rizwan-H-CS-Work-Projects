function guess_number(){
  var secret = 12;
  var guess;
  while(guess != secret){ 
    guess = prompt("Guess my favourite number, right now!");
   
    if(guess == secret){
       alert("Stop Cheating!!! >:(");
    }
    else if(guess < secret){
        alert("Come on, higher of course!");        
    }
    else if(guess > secret){
      alert("It's lower than that!");
    }
    else{
      alert("That's not a number silly!");
    }
  }
}

function centguess(){
var x = prompt("Type in any year, my website will tell you what century that year belongs to!");
var y =(x/100)
var z =(y + 1)
    alert("This year is in the" + " " + Math.floor(z) + "th Century")
}

function assignment(){
  var secret = "sarah";
  var guess;
  while(guess != secret){
    guess = prompt("What is your first name?");

    if (guess == secret){
      alert("Sorry Ms.Pais, this assignment is still under construction.");
    }
    else if(guess != secret){
      alert("Why are you trying to snoop my assignments? LEAVEEEEEEE!!!!!");
    }
    else{
      alert("That's not a name silly!");
    }
  }
}

function angle(){
var x = prompt("My website will tell you the value of an angle if you provide it with the other 2 angles! Enter the first angle value for a triangle!");
var y = prompt("Enter the second angle... ");
      alert(180 - x - y + " " + "degrees is the last angle of that triangle!");
}

function integer(){
  var x = 0;
  while (x <= 99){
    x = x + 1;
    if(x % 4 == 0 && x % 10 == 0){
      console.log("FourTen");
    }else if(x % 10 == 0){
      console.log("Ten");
    }else if(x % 4 == 0){
      console.log("Four");
    }else{
      console.log(x);
    }
  }alert("Check the console for the numbers!");
}

function sentlength(){
  var a = prompt("Enter a set of words, my website let you know how many letters there are in that phrase!")
  alert(a.length);
}

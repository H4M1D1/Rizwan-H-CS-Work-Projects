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
  var a = prompt("Enter a set of words, my website will let you know how many characters there are in that phrase!")
  alert(a.length);
}

function encrypt(){
  var x = prompt("Enter any letter, word, or phrase!")
  var y = x.toUpperCase()
  var z = y.replace(/A/g, "q").replace(/B/g, "w").replace(/C/g, "e").replace(/D/g, "r").replace(/E/g, "t").replace(/F/g, "y").replace(/G/g, "u").replace(/H/g, "i").replace(/I/g, "o").replace(/J/g, "p").replace(/K/g, "a").replace(/L/g, "s").replace(/M/g, "d").replace(/N/g, "f").replace(/O/g, "g").replace(/P/g, "h").replace(/Q/g, "j").replace(/R/g, "k").replace(/S/g, "l").replace(/T/g, "z").replace(/U/g, "x").replace(/V/g, "c").replace(/W/g, "v").replace(/X/g, "b").replace(/Y/g, "n").replace(/Z/g, "m")
  if (/[0-9]/.test(x)){
    alert("No numbers, please!");
  }else{
    alert(z)
  }
}

function decrypt(){
  var p = prompt("Enter any letter, word, or phrase!")
  var f = p.toUpperCase()
  var d = f.replace(/Q/g, "a").replace(/W/g, "b").replace(/E/g, "c").replace(/R/g, "d").replace(/T/g, "e").replace(/Y/g, "f").replace(/U/g, "g").replace(/I/g, "h").replace(/O/g, "i").replace(/P/g, "j").replace(/A/g, "k").replace(/S/g, "l").replace(/D/g, "m").replace(/F/g, "n").replace(/G/g, "o").replace(/H/g, "p").replace(/J/g, "q").replace(/K/g, "r").replace(/L/g, "s").replace(/Z/g, "t").replace(/X/g, "u").replace(/C/g, "v").replace(/V/g, "w").replace(/B/g, "x").replace(/N/g, "y").replace(/M/g, "z")
  if (/[0-9]/.test(p)){
    alert("No numbers, please!");
  }else{
    alert(d)
  }
}
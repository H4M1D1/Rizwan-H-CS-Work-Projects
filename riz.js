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

function getHistory(){
  return document.getElementById("history-value").innerText;
}
function printHistory(num){
  document.getElementById("history-value").innerText=num;
}
function getOutput(){
  return document.getElementById("output-value").innerText;
}
function printOutput(num){
  if(num==""){
    document.getElementById("output-value").innerText=num;
  }
  else{
    document.getElementById("output-value").innerText=getFormattedNumber(num);
  } 
}
function getFormattedNumber(num){
  if(num=="-"){
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
  operator[i].addEventListener('click',function(){
    if(this.id=="clear"){
      printHistory("");
      printOutput("");
    }
    else if(this.id=="backspace"){
      var output=reverseNumberFormat(getOutput()).toString();
      if(output){//if output has a value
        output= output.substr(0,output.length-1);
        printOutput(output);
      }
    }
    else{
      var output=getOutput();
      var history=getHistory();
      if(output==""&&history!=""){
        if(isNaN(history[history.length-1])){
          history= history.substr(0,history.length-1);
        }
      }
      if(output!="" || history!=""){
        output= output==""?output:reverseNumberFormat(output);
        history=history+output;
        if(this.id=="="){
          var result=eval(history);
          printOutput(result);
          printHistory("");
        }
        else{
          history=history+this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
    
  });
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
  number[i].addEventListener('click',function(){
    var output=reverseNumberFormat(getOutput());
    if(output!=NaN){ //if output is a number
      output=output+this.id;
      printOutput(output);
    }
  });
}
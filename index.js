
let randomNumber1 = Math.floor(Math.random()*6+1);
if ( randomNumber1===1 ){
  document.getElementById("dice1").src="images/dice1.jpg"; // give a id to the image, get that id &  change src image related to the random number
}else if ( randomNumber1===2 ){
  document.getElementById("dice1").src="images/dice2.jpg";
}else if ( randomNumber1===3 ){
  document.getElementById("dice1").src="images/dice3.jpg";
}else if ( randomNumber1===4 ){
  document.getElementById("dice1").src="images/dice4.jpg";
}else if ( randomNumber1===5 ){
  document.getElementById("dice1").src="images/dice5.jpg";
}else {
  document.getElementById("dice1").src="images/dice6.jpg";
}


let randomNumber2 =  Math.floor(Math.random()*6+1);
if ( randomNumber2 === 1){
  document.getElementById("dice2").src="images/dice1.jpg";
}else if (randomNumber2 === 2 ){
  document.getElementById("dice2").src="images/dice2.jpg";
}else if (randomNumber2 === 3 ){
  document.getElementById("dice2").src="images/dice3.jpg";
}else if (randomNumber2 === 4 ){
  document.getElementById("dice2").src="images/dice4.jpg";
}else if (randomNumber2 === 5 ){
  document.getElementById("dice2").src="images/dice5.jpg";
}else{
  document.getElementById("dice2").src="images/dice6.jpg";
}


let randomNumber3 = Math.floor(Math.random()*6+1);
if ( randomNumber3 === 1){
  document.getElementById("dice3").src="images/dice1.jpg";
}else if (randomNumber3 === 2 ){
  document.getElementById("dice3").src="images/dice2.jpg";
}else if (randomNumber3 === 3 ){
  document.getElementById("dice3").src="images/dice3.jpg";
}else if (randomNumber3 === 4 ){
  document.getElementById("dice3").src="images/dice4.jpg";
}else if (randomNumber3 === 5 ){
  document.getElementById("dice3").src="images/dice5.jpg";
}else{
  document.getElementById("dice3").src="images/dice6.jpg";
}







if ( randomNumber1>randomNumber2 && randomNumber1>randomNumber3 ){
  document.getElementById("refresh").textContent = "Player 1 win 👴";
  document.querySelector("body").setAttribute("style", "background-color: #FEE440;");

} else if ( randomNumber2>randomNumber1 && randomNumber2> randomNumber3){
  document.getElementById("refresh").textContent = " Player 2 win 👵";
  document.querySelector("body").setAttribute("style", "background-color: #FFE2E2;");

} else if ( randomNumber3>randomNumber1 && randomNumber3>randomNumber2 ){
  document.getElementById("refresh").textContent = " Player 3 Win 🐵"
  document.querySelector("body").setAttribute("style", "background-color: #A2D2FF;");

} else if ( randomNumber1 == randomNumber2 == randomNumber3 ){
  document.getElementById("refresh").textContent = "Draw ✨";
  document.querySelector("body").setAttribute("style", "background-color: #F7F7F7;");
  document.querySelectorAll(".player").setAttribute("style", "color:black;")
}

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generate random number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png -dice6.png

var randomImageSource = "images/" + randomDiceImage; //image1 source for 1 - 6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);



if (randomNumber1 === randomNumber2) {
  var user1 = document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  var user1 = document.querySelector("h1").innerHTML = "Player 1 Wins";
} else {
  var user2 = document.querySelector("h1").innerHTML = "Player 2 Wins";
}

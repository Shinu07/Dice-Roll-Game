// Player name
var player1 = "Player 1";
var player2 = "Player 2";

//Function to change the player name
function editNames(){
    player1 = prompt("player1 name");
    player2 = prompt ("player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

//function to roll the dice
function rollTheDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    
    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    
    var image1 = document.querySelectorAll("img")[0];
    
    image1.setAttribute("src", randomImageSource);
    
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = (player1 + " Wins! " + player2 + " Try Again");
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = (player2 + " wins! " + player1 + " Try Again " );
    }
        else  {
            document.querySelector("h1").innerHTML = "Draw!"

        }
    }



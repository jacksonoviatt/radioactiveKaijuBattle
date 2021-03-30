
// Here is a function I will call onClick to remove cookies when we leave the page
function removeCookies() {
    Cookies.remove("playerKaijuSelection");
    Cookies.remove("userMaxHealth");
    Cookies.remove("computerMaxHealth");
    Cookies.remove("userCurrentHealth");
    Cookies.remove("computerCurrentHealth");
}


// Here I pulled the cookies out of the cookies jar and set variables
var playerKaijuSelection = Cookies.get("playerKaijuSelection");
var userMaxHealth = Cookies.get("userMaxHealth");
var computerMaxHealth = Cookies.get("computerMaxHealth");
var playerCurrentHealth = Cookies.get("userCurrentHealth");
var computerCurrentHealth = Cookies.get("computerCurrentHealth");
var opponentKaiju = Cookies.get('opponent');
var attackEqualizer = Cookies.get("attackStrength");
var enemyAttackEqualizer = Cookies.get("opponentAttackStrength");

// Here is a couple of funcitons these are functions that set the animations back to normal
//  I will call on later using setTimeout to set the "bounce back" of the game play area box shadow
// and the animation of the fight, they are not grouped together because setTimeout doesn't take arguments in the line of code
// I now realize a way likely way to get around this (won't know till I test it) by storing the function with the arguments in a variable, I will update this later.
function radioactiveGlow() {
    var gameContainer = document.getElementById('gamePlay')
    gameContainer.style.boxShadow = "-1px -1px 50px aqua, 1px -1px 3px aqua, -1px 1px 3px aqua, 1px 1px 3px aqua";
}

function shrinkMePlayer() {
    var playerImage = playerContainer.querySelector('img');
    playerImage.style.height = "300px";
    playerImage.style.padding = "10px";
    playerTitle.style.textShadow = "-1px -1px 50px #E55934, 1px -1px 3px #E55934, -1px 1px 3px #E55934, 1px 1px 3px #E55934";
}
function shrinkMeEnemy() {
    var enemyImage = computerContainer.querySelector('img');
    enemyImage.style.height = "300px";
    enemyImage.style.padding = "10px";
    enemyTitle.style.textShadow = "-1px -1px 50px #E55934, 1px -1px 3px #E55934, -1px 1px 3px #E55934, 1px 1px 3px #E55934";
}

// Here is a another function, this one sets the radioactive glow animation around
//  the game play arena back to its original color I use setTimeout to call 
// radioactive glow, and set 400 milliseconds as the wait time before reverting
function fightAnimation(color) {
    var gameContainer = document.getElementById('gamePlay');
    gameContainer.style.boxShadow = `-1px -1px 50px ${color}, 1px -1px 3px aqua, -1px 1px 20px aqua, 1px 1px 0px aqua`;
    setTimeout(radioactiveGlow, 400);
}


//  Here I grab the containers that will hold the html code that is stored in the cookies jar
// I then wrote a conditional statement that inserts the code from the cookie onto the new page
// Unless there is no choice defined, then it wil display the go back button instead and a message
var playerContainer = document.getElementById('playerSection')
var computerContainer = document.getElementById('computerSection')


if (playerKaijuSelection != undefined) {
    playerContainer.innerHTML = playerKaijuSelection;
    computerContainer.innerHTML = opponentKaiju;
} else {
    document.body.innerHTML = `<div id="makeAChoice"><h3> You need to pick a character</h3> <a href="/index.html" onclick="removeCookies()">GO BACK</a></div>`;
}



// Here i insert html code into the health statement blocks
// This shows the player and the opponents current health
var playerHealthStatement = document.getElementById('playerHealthStatement');
playerHealthStatement.innerHTML = `<p class="healthScore"> Your Health: ${playerCurrentHealth}/${userMaxHealth}`;
var computerHealthStatement = document.getElementById('computerHealthStatement');
computerHealthStatement.innerHTML = `<p class="healthScore"> Enemy Health: ${computerCurrentHealth}/${computerMaxHealth}`;


// Here are a few variables that will be utilized in the computer attack functions
var playerAttackScore = document.getElementById('attackScorePlayer');
var computerAttackScore = document.getElementById('attackScoreComputer');

var enemyTitle = computerContainer.querySelector('h2');
var enemyImage = computerContainer.querySelector('img');

var playerImage = playerContainer.querySelector('img');
var playerTitle = playerContainer.querySelector('h2');
var computerCurrentHealth = Cookies.get("computerCurrentHealth");

function computerAttack() {
    // These are the animations for the fight, they set the new style, which is then changed back 
    // in 400 milliseconds by the setTimeout and shrinkMe functions, the fight animation function, which changes the radioactive glow
    enemyImage.style.height = "320px";
    enemyImage.style.padding = "0px";
    enemyTitle.style.textShadow = "-1px -1px 3px aqua, 1px -1px 3px aqua, -1px 1px 3px aqua, 1px 1px 3px aqua";
    setTimeout(shrinkMeEnemy, 400);
    fightAnimation(`#70297a`);

    // Here I use the Math floor and random functions to set the computers attacks to a random number
    // The use of the attack equalizer allows less durable kaijus to have a chance at rolling higher attack number
    // I then subract the computers attack score from the players health 
    // And display the attack score as loss underneath the opposing kaiju
    var randomMath = Math.floor(Math.random() * 10 + enemyAttackEqualizer);
    playerCurrentHealth -= randomMath;
    playerAttackScore.innerText = "-" + randomMath;

    // I then set the computers new health score in a cookie, and display it on the page
    Cookies.set("userCurrentHealth", playerCurrentHealth);
    playerHealthStatement.innerHTML = `<p> Your Health: ${playerCurrentHealth}/${userMaxHealth}`;
    

    // This conditon block displays the message that you won or lost by inserting code into the body
    // this is the same as the "go back you need to make a choice" from above
    if (playerCurrentHealth <= 0 && playerCurrentHealth < computerCurrentHealth) {
        document.body.innerHTML = `<div id="makeAChoice"><h3> You lost :(</h3> <a href="/index.html" onclick="removeCookies()">PLAY AGAIN</a></div>`;
    } 
}


// This is the user attack, this function is very similar to the above function, only 
// now it is for the users attack, this function will run when you click on the attack button 
// and then thanks to our handy friend the setTimeout function, the computer attack will comnence
// 800 milliseconds after the user attack
function userAttack() {
    playerImage.style.height = "320px";
    playerImage.style.padding = "0px";
    playerTitle.style.textShadow = "-1px -1px 3px aqua, 1px -1px 3px aqua, -1px 1px 3px aqua, 1px 1px 3px aqua";
    setTimeout(shrinkMePlayer, 400);
    fightAnimation(`#588157`);
    var randomMath = Math.floor(Math.random() * 10 + attackEqualizer);
    computerCurrentHealth -= randomMath;
    computerAttackScore.innerText = "-" + randomMath;
    Cookies.set("computerCurrentHealth", computerCurrentHealth);
    computerHealthStatement.innerHTML = `<p> Enemy Health ${computerCurrentHealth}/${computerMaxHealth}`;
    setTimeout(computerAttack, 800);
    if (computerCurrentHealth <= 0 && playerCurrentHealth > computerCurrentHealth) {
        document.body.innerHTML = `<div id="makeAChoice"><h3> You won :)</h3> <a href="/index.html" onclick="removeCookies()">PLAY AGAIN</a></div>`;
    }
}



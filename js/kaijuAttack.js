
// Here is a function I will call onClick to remove cookies when we leave the page
function removeCookies() {
    Cookies.remove("playerKaijuSelection")
    Cookies.remove("userMaxHealth")
    Cookies.remove("computerMaxHealth")
    Cookies.remove("userCurrentHealth")
    Cookies.remove("computerCurrentHealth")
}


// Here I pulled the cookies out of the cookies jar and set variables
var playerKaijuSelection = Cookies.get("playerKaijuSelection")
var userMaxHealth = Cookies.get("userMaxHealth")
var computerMaxHealth = Cookies.get("computerMaxHealth")
var playerCurrentHealth = Cookies.get("userCurrentHealth")
var computerCurrentHealth = Cookies.get("computerCurrentHealth")
var opponentKaiju = Cookies.get('opponent');
var attackEqualizer = Cookies.get("attackStrength");
var enemyAttackEqualizer = Cookies.get("opponentAttackStrength");

// Here is a funciton I will call on later using setTimeout to set the "bounce back" of the game play area box shadow
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
    // enemyTitle.style.fontSize = "600px"
    enemyTitle.style.textShadow = "-1px -1px 50px #E55934, 1px -1px 3px #E55934, -1px 1px 3px #E55934, 1px 1px 3px #E55934";
}

function fightAnimation(color) {
    var gameContainer = document.getElementById('gamePlay');
    gameContainer.style.boxShadow = `-1px -1px 50px ${color}, 1px -1px 3px aqua, -1px 1px 20px aqua, 1px 1px 0px aqua`;
    setTimeout(radioactiveGlow, 400);
    // var playerSection = document.getElementById('playerSection');
    
}

var playerContainer = document.getElementById('playerSection')
playerContainer.append(playerKaijuSelection);
var computerContainer = document.getElementById('computerSection')


if (playerKaijuSelection != undefined) {
    playerContainer.innerHTML = playerKaijuSelection;
    computerContainer.innerHTML = opponentKaiju;
    
} else {
    document.body.innerHTML = `<div id="makeAChoice"><h3> You need to pick a character</h3> <a href="/index.html" onclick="removeCookies()">GO BACK</a></div>`;
}




var playerHealthStatement = document.getElementById('playerHealthStatement');
playerHealthStatement.innerHTML = `<p class="healthScore"> Your Health: ${playerCurrentHealth}/${userMaxHealth}`;
var computerHealthStatement = document.getElementById('computerHealthStatement');
computerHealthStatement.innerHTML = `<p class="healthScore"> Enemy Health: ${computerCurrentHealth}/${computerMaxHealth}`;

var winnerStatement = document.getElementById('winnerStatement');
var playerAttackScore = document.getElementById('attackScorePlayer');
var computerAttackScore = document.getElementById('attackScoreComputer')

var enemyTitle = computerContainer.querySelector('h2');
var enemyImage = computerContainer.querySelector('img');
function computerAttack() {
    enemyImage.style.height = "320px";
    enemyImage.style.padding = "0px";
    enemyTitle.style.textShadow = "-1px -1px 3px aqua, 1px -1px 3px aqua, -1px 1px 3px aqua, 1px 1px 3px aqua";
    setTimeout(shrinkMeEnemy, 400);
   fightAnimation(`#70297a`);
    var randomMath = Math.floor(Math.random() * 10 + enemyAttackEqualizer);
    playerCurrentHealth -= randomMath;
    playerAttackScore.innerText = "-" + randomMath;
    console.log(randomMath);
    Cookies.set("userCurrentHealth", playerCurrentHealth);
    playerHealthStatement.innerHTML = `<p> Your Health: ${playerCurrentHealth}/${userMaxHealth}`;
    if (playerCurrentHealth <= 0 && playerCurrentHealth < computerCurrentHealth) {
        document.body.innerHTML = `<div id="makeAChoice"><h3> You lost :(</h3> <a href="/index.html" onclick="removeCookies()">PLAY AGAIN</a></div>`;
    } else  if (computerCurrentHealth <= 0 && playerCurrentHealth > computerCurrentHealth) {
        document.body.innerHTML = `<div id="makeAChoice"><h3> You won :)</h3> <a href="/index.html" onclick="removeCookies()">PLAY AGAIN</a></div>`;
    }
}

var playerImage = playerContainer.querySelector('img');
var playerTitle = playerContainer.querySelector('h2');

var computerCurrentHealth = Cookies.get("computerCurrentHealth")
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
    setTimeout(computerAttack, 1000);
}



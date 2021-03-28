

function removeCookies() {
    Cookies.remove("playerKaijuSelection")
    Cookies.remove("userMaxHealth")
    Cookies.remove("computerMaxHealth")
    Cookies.remove("userCurrentHealth")
    Cookies.remove("computerCurrentHealth")
}

var playerKaijuSelection = Cookies.get("playerKaijuSelection")
var userMaxHealth = Cookies.get("userMaxHealth")
var computerMaxHealth = Cookies.get("computerMaxHealth")
var playerCurrentHealth = Cookies.get("userCurrentHealth")
var computerCurrentHealth = Cookies.get("computerCurrentHealth")
var opponentKaiju = Cookies.get('opponent');
var attackEqualizer = Cookies.get("attackStrength");
var enemyAttackEqualizer = Cookies.get("opponentAttackStrength");




var playerContainer = document.getElementById('playerSection')
playerContainer.append(playerKaijuSelection);
var computerContainer = document.getElementById('computerSection')


if (playerKaijuSelection != undefined) {
    playerContainer.innerHTML = playerKaijuSelection;
    computerContainer.innerHTML = opponentKaiju;
} else {
    document.body.innerHTML = `<h3> You need to pick a character</h3> <a href="/index.html" onclick="removeCookies()">GO BACK</a>`;
}




var playerHealthStatement = document.getElementById('playerHealthStatement');
playerHealthStatement.innerHTML = `<p> Your Health: ${playerCurrentHealth}/${userMaxHealth}`;
var computerHealthStatement = document.getElementById('computerHealthStatement');
computerHealthStatement.innerHTML = `<p> Enemy Health: ${computerCurrentHealth}/${computerMaxHealth}`;

var winnerStatement = document.getElementById('winnerStatement');

var playerCurrentHealth = Cookies.get("userCurrentHealth");
function computerAttack() {
    
    playerCurrentHealth -= Math.floor(Math.random() * 5) + enemyAttackEqualizer;
    Cookies.set("userCurrentHealth", playerCurrentHealth);
    playerHealthStatement.innerHTML = `<p> Your Health: ${playerCurrentHealth}/${userMaxHealth}`;
    if (playerCurrentHealth <= 0 && playerCurrentHealth < computerCurrentHealth) {
        winnerStatement.innerHTML = "<p>You lose :)</p>"
    } 
}

var computerCurrentHealth = Cookies.get("computerCurrentHealth")
function userAttack() {
    
    computerCurrentHealth -= Math.floor(Math.random() * 5) + attackEqualizer;
    Cookies.set("computerCurrentHealth", computerCurrentHealth);
    computerHealthStatement.innerHTML = `<p> Enemy Health ${computerCurrentHealth}/${computerMaxHealth}`;
    computerAttack();
    if (computerCurrentHealth <= 0 && playerCurrentHealth > computerCurrentHealth) {
        winnerStatement.innerHTML = "<p>You win :)</p>"
    } 
}



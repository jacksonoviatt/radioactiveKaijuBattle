

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
var userCurrentHealth = Cookies.get("userCurrentHealth")
var computerCurrentHealth = Cookies.get("computerCurrentHealth")


var kaijuList = [
    {
        kaijuName: "King Kong",
        maxHealth: 40,
        attackStrength: 8
    },
    {
        kaijuName: "Godzilla",
        maxHealth: 50,
        attackStrength: 6
    },
    {
        kaijuName: "Mechagodzilla",
        maxHealth: 60,
        attackStrength: 7
    }
];





// var playerKaijuSelection = Cookies.get("playerKaijuSelection");
// if (playerKaijuSelection != undefined) {
//     playerContainer.outerHTML = playerKaijuSelection;
// }

// console.log(playerKaijuSelection);

var playerContainer = document.getElementById('playerSection')
playerContainer.append(playerKaijuSelection);
var computerContainer = document.getElementById('computerSection')
var playerKaijuSelection = Cookies.get("playerKaijuSelection");
if (playerKaijuSelection != undefined) {
    playerContainer.innerHTML = playerKaijuSelection;
} else {
    playerContainer.innerHTML = `<h3> You need to pick a character`;
}

// if (playerKaijuSelectio 
    console.log(playerKaijuSelection);

// playerContainer.append(playerKaijuSelection);

if (playerKaijuSelection === 'King Kong') {
   console.log("hello world");
}
var userCurrentHealth = userMaxHealth;
var computerCurrentHealth = computerMaxHealth;
var playerHealthStatement = document.getElementById('playerHealthStatement');
playerHealthStatement.innerHTML = `<p> ${playerCurrentHealth}/${userMaxHealth}`;
var computerHealthStatement = document.getElementById('computerHealthStatement');
computerHealthStatement.innerHTML = `<p> ${computerCurrentHealth}/${computerMaxHealth}`;

var winnerStatement = document.getElementById('winnerStatement');

var playerCurrentHealth = Cookies.get("userCurrentHealth");
function computerAttack() {
    
    playerCurrentHealth -= Math.floor(Math.random() * 5) + 5;;
    Cookies.set("userCurrentHealth", playerCurrentHealth);
    playerHealthStatement.innerHTML = `<p> ${playerCurrentHealth}/${userMaxHealth}`;
    if (playerCurrentHealth <= 0 && playerCurrentHealth < computerCurrentHealth) {
        winnerStatement.innerHTML = "<p>You lose :)</p>"
    } 
}

var computerCurrentHealth = Cookies.get("computerCurrentHealth")
function userAttack() {
    
    computerCurrentHealth -= Math.floor(Math.random() * 5) + 5;;
    Cookies.set("computerCurrentHealth", computerCurrentHealth);
    computerHealthStatement.innerHTML = `<p> ${computerCurrentHealth}/${computerMaxHealth}`;
    computerAttack();
    if (computerCurrentHealth <= 0 && playerCurrentHealth > computerCurrentHealth) {
        winnerStatement.innerHTML = "<p>You win :)</p>"
    } 
}


var attackButton = document.getElementById('attackButton');


playerHealthStatement.innerHTML = `<p> ${userCurrentHealth}/${userMaxHealth}`;




// computerContainer.innerText += computerKaiju + "  " + computerMaxHealth + "  " + computerAttackStrength;
// console.log(computerKaiju + "  " + computerMaxHealth + "  " + computerAttackStrength);


Cookies.set("userCurrentHealth", playerCurrentHealth)
Cookies.set("computerCurrentHealth", computerCurrentHealth)
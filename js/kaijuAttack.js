

function removeCookies() {
    Cookies.remove("playerKaijuSelection")
    Cookies.remove("userMaxHealth")
    Cookies.remove("computerMaxHealth")
    Cookies.remove("userCurrentHealth")
    Cookies.remove("computerCurrentHealth")
}


var kaijuList = [
    {
        kaijuName: "King Kong",
        maxHealth: 50,
        attackStrength: 6
    },
    {
        kaijuName: "Godzilla",
        maxHealth: 50,
        attackStrength: 6
    },
    {
        kaijuName: "Mechagodzilla",
        maxHealth: 50,
        attackStrength: 6
    }
];

var playerKaijuSelection = Cookies.get("playerKaijuSelection");

var playerContainer = document.getElementById('playerSection')
playerContainer.append(playerKaijuSelection);
var computerContainer = document.getElementById('computerSection')


// console.log(playerKaijuSelection);

if (playerKaijuSelection === 'King Kong') {
    var userMaxHealth = kaijuList[0].maxHealth;
    var userKaiju = kaijuList[0].kaijuName;
    var userAttackStrength = kaijuList[0].attackStrength

    var computerMaxHealth = kaijuList[1].maxHealth;
    var computerKaiju = kaijuList[1].kaijuName;
    var computerAttackStrength = kaijuList[1].attackStrength

} else if (playerKaijuSelection === 'Godzilla') {
    var userMaxHealth = kaijuList[1].maxHealth;
    var userKaiju = kaijuList[1].kaijuName;
    var userAttackStrength = kaijuList[1].attackStrength

    var computerMaxHealth = kaijuList[2].maxHealth;
    var computerKaiju = kaijuList[2].kaijuName;
    var computerAttackStrength = kaijuList[2].attackStrength

} else if (playerKaijuSelection === "Mechagodzilla") {
    var userMaxHealth = kaijuList[2].maxHealth;
    var userKaiju = kaijuList[2].kaijuName;
    var userAttackStrength = kaijuList[2].attackStrength

    var computerMaxHealth = kaijuList[0].maxHealth;
    var computerKaiju = kaijuList[0].kaijuName;
    var computerAttackStrength = kaijuList[0].attackStrength

} else {
    playerContainer.innerHTML = "<p>You need to choose a player</p>"
}
var userCurrentHealth = userMaxHealth;
var computerCurrentHealth = computerMaxHealth;
var playerHealthStatement = document.getElementById('playerHealthStatement');
playerHealthStatement.innerHTML = `<p> ${playerCurrentHealth}/${userMaxHealth}`;
var computerHealthStatement = document.getElementById('computerHealthStatement');
computerHealthStatement.innerHTML = `<p> ${computerCurrentHealth}/${computerMaxHealth}`;


var playerCurrentHealth = Cookies.get("userCurrentHealth");
function computerAttack() {
    playerCurrentHealth -= userAttackStrength;
    Cookies.set("userCurrentHealth", playerCurrentHealth);
    playerHealthStatement.innerHTML = `<p> ${playerCurrentHealth}/${userMaxHealth}`;
    if (playerCurrentHealth <= 0) {
        playerContainer.innerHTML = "<p>You lose :)</p>"
    } 
}

function userAttack() {
    attackButton.style.backgroundColor = "red";
    var computerCurrentHealth = Cookies.get("computerCurrentHealth")

    computerCurrentHealth -= 5;
    Cookies.set("computerCurrentHealth", computerCurrentHealth);
    computerHealthStatement.innerHTML = `<p> ${computerCurrentHealth}/${computerMaxHealth}`;
    computerAttack();
    if (computerCurrentHealth <= 0) {
        playerContainer.innerHTML = "<p>You win :)</p>"
    } 
}

var attackButton = document.getElementById('attackButton');


playerHealthStatement.innerHTML = `<p> ${userCurrentHealth}/${userMaxHealth}`;


playerContainer.innerText += "  " + userMaxHealth + "  " + userAttackStrength;

computerContainer.innerText += computerKaiju + "  " + computerMaxHealth + "  " + computerAttackStrength;
console.log(computerKaiju + "  " + computerMaxHealth + "  " + computerAttackStrength);

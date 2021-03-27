

function removeCookies() {
    Cookies.remove("playerKaijuSelection")
}

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
        kaijuName: "Mecha Godzilla",
        maxHealth: 50,
        attackStrength: 6
    }
];

var playerKaijuSelection = Cookies.get("playerKaijuSelection");

var playerContainer = document.getElementById('playerSection')

playerContainer.append(playerKaijuSelection);


// console.log(playerKaijuSelection);

if (playerKaijuSelection === 'King Kong') {
    var userMaxHealth = kaijuList[0].maxHealth;
    var userKaiju = kaijuList[0].kaijuName;
    var userAttackStrength = kaijuList[0].attackStrength
    
    var computerMaxHealth = kaijuList[1].maxHealth;
    var computerKaiju = kaijuList[1].kaijuName;
    var computerAttackStrength = kaijuList[1].attackStrength

} else if (playerKaijuSelection === 'chooseGodzilla') {
    var userMaxHealth = kaijuList[1].maxHealth;
    var userKaiju = kaijuList[1].kaijuName;
    var userAttackStrength = kaijuList[1].attackStrength

    var computerMaxHealth = kaijuList[2].maxHealth;
    var computerKaiju = kaijuList[2].kaijuName;
    var computerAttackStrength = kaijuList[2].attackStrength

} else if (playerKaijuSelection === 'chooseMecha') {
    var userMaxHealth = kaijuList[2].maxHealth;
    var userKaiju = kaijuList[2].kaijuName;
    var userAttackStrength = kaijuList[2].attackStrength

    var computerMaxHealth = kaijuList[3].maxHealth;
    var computerKaiju = kaijuList[3].kaijuName;
    var computerAttackStrength = kaijuList[3].attackStrength

} else {
    playerContainer.innerHTML = "<p>You need to choose a player</p>"
}



console.log(userKaiju + "  " + userMaxHealth + "  " + userAttackStrength);

// function userAttack(){
//     if (userMaxHealth <= 0) {
//         playerContainer.innerHTML = "<p>You lose :(</p>"
//     } else if ({
        
//     }
   
// }
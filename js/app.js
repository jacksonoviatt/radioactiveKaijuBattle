
// var kaijuList = [
//     {
//         kaijuName: "King Kong",
//         maxHealth: 40,
//         attackStrength: 8
//     },
//     {
//         kaijuName: "Godzilla",
//         maxHealth: 50,
//         attackStrength: 6
//     },
//     {
//         kaijuName: "Mechagodzilla",
//         maxHealth: 60,
//         attackStrength: 4
//     }
// ];



function selectKaiju(kaijuChoice) {
    var chosenKaiju = document.getElementById(kaijuChoice);
    kaijuChoice = chosenKaiju.outerHTML;
    console.log(kaijuChoice);
    Cookies.set("playerKaijuSelection", kaijuChoice);
    Cookies.set("userMaxHealth", 50);
    Cookies.set("computerMaxHealth", 50);

    Cookies.set("userCurrentHealth", 50);
    Cookies.set("computerCurrentHealth", 50);
}

var playersSelection = Cookies.get("playerKaijuSelection");
console.log(playersSelection);
var chooseAKaiju = document.getElementsByClassName("chooseAKaiju");
for(var i = 0; i < chooseAKaiju; i++) {
}





// document.getElementById('choiceDisplay').innerText = `${i} is ready to fight`


// if (playerKaijuSelection === 'King Kong') {
//     var userMaxHealth = kaijuList[0].maxHealth;
//     var userKaiju = kaijuList[0].kaijuName;
//     var userAttackStrength = kaijuList[0].attackStrength

//     var computerMaxHealth = kaijuList[1].maxHealth;
//     var computerKaiju = kaijuList[1].kaijuName;
//     var computerAttackStrength = kaijuList[1].attackStrength

// } else if (playerKaijuSelection === 'Godzilla') {
//     var userMaxHealth = kaijuList[1].maxHealth;
//     var userKaiju = kaijuList[1].kaijuName;
//     var userAttackStrength = kaijuList[1].attackStrength

//     var computerMaxHealth = kaijuList[2].maxHealth;
//     var computerKaiju = kaijuList[2].kaijuName;
//     var computerAttackStrength = kaijuList[2].attackStrength

// } else if (playerKaijuSelection === "Mechagodzilla") {
//     var userMaxHealth = kaijuList[2].maxHealth;
//     var userKaiju = kaijuList[2].kaijuName;
//     var userAttackStrength = kaijuList[2].attackStrength

//     var computerMaxHealth = kaijuList[0].maxHealth;
//     var computerKaiju = kaijuList[0].kaijuName;
//     var computerAttackStrength = kaijuList[0].attackStrength

// } else {
//     playerContainer.innerHTML = "<p>You need to choose a player</p>"
// }
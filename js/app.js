
function setKaijuValues(enemy, playerStrength, playerHealth, enemyStrength, enemyHealth) {
    
    
    var enemyKaiju = document.getElementById(enemy).outerHTML;
    
    
    Cookies.set("opponent", enemyKaiju);
    Cookies.set("userMaxHealth", playerHealth);
    Cookies.set("userCurrentHealth", playerHealth);
    
    Cookies.set("attackStrength", playerStrength);
    Cookies.set("opponentAttackStrength", enemyStrength)
    
    Cookies.set("computerCurrentHealth", enemyHealth);
    Cookies.set("computerMaxHealth", enemyHealth);
}
var chooseYourCharacter = document.getElementById('choiceDisplay');


function selectKaiju(kaijuChoice) {
    var chosenKaiju = document.getElementById(kaijuChoice);
    if(kaijuChoice === 'chooseKong') {
        setKaijuValues('chooseGodzilla', 8, 20, 6, 25);
        chooseYourCharacter.innerText = "King Kong is your fighter";
    } else if(kaijuChoice === 'chooseGodzilla') {
        setKaijuValues('chooseMecha', 6, 25, 4, 30);
        chooseYourCharacter.innerText = "Godzilla is your fighter";
    } else if(kaijuChoice === 'chooseMecha') {
        setKaijuValues('chooseKong', 4, 30, 10, 20);
        chooseYourCharacter.innerText = "Mechagodzilla is your fighter";
    }
    kaijuChoice = chosenKaiju.outerHTML;
    Cookies.set("playerKaijuSelection", kaijuChoice);
}






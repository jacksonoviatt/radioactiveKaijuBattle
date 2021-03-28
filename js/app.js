
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



function selectKaiju(kaijuChoice) {
    var chosenKaiju = document.getElementById(kaijuChoice);
    if(kaijuChoice === 'chooseKong') {
        setKaijuValues('chooseGodzilla', 8, 40, 6, 50);
    } else if(kaijuChoice === 'chooseGodzilla') {
        setKaijuValues('chooseMecha', 6, 50, 4, 60);
    } else if(kaijuChoice === 'chooseMecha') {
        setKaijuValues('chooseKong', 4, 60, 8, 40);
    }
    kaijuChoice = chosenKaiju.outerHTML;
    Cookies.set("playerKaijuSelection", kaijuChoice);
}







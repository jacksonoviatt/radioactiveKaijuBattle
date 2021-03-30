
// here is a function that takes in arguments 
// to set our players enemy and other stats as cookies
// As well as set the enemy cookie to a string of html code

function setKaijuValues(enemy, playerStrength, playerHealth, enemyStrength, enemyHealth) {

    var enemyKaiju = document.getElementById(enemy).outerHTML;

    Cookies.set("opponent", enemyKaiju);
    Cookies.set("userMaxHealth", playerHealth);
    Cookies.set("userCurrentHealth", playerHealth);

    Cookies.set("attackStrength", playerStrength);
    Cookies.set("opponentAttackStrength", enemyStrength);

    Cookies.set("computerCurrentHealth", enemyHealth);
    Cookies.set("computerMaxHealth", enemyHealth);
}

// Grabs the element that will display your choice in words
var chooseYourCharacter = document.getElementById('choiceDisplay');

// this function is called onclick in our html code
// this sets the state of each cookie as determined by the arguments/ the chosen kaiju
function selectKaiju(kaijuChoice) {

    var chosenKaiju = document.getElementById(kaijuChoice);
    
    // This sets the hover style to stay to indicate your selection
    chosenKaiju.style.boxShadow = "-1px -1px 50px aqua, 1px -1px 3px aqua, -1px 1px 3px aqua, 1px 1px 3px aqua";
    statsArticle = chosenKaiju.querySelector('article');
    chosenImage = chosenKaiju.querySelector('img');
    statsArticle.style.textShadow = "-0.8px -0.8px 10px #E55934, 0.8px -0.8px 0 #E55934, -0.8px 0.8px 0 #E55934, 0.8px 0.8px 0 #E55934";
    statsArticle.style.marginTop = "70px";
    chosenImage.style.height = "400px";
    // var chosenKaiju = document.getElementById(kaijuChoice);
    // each kaiju has a set enemy and they all have different max healths and attack maximums
    if (kaijuChoice === 'chooseKong') {
        setKaijuValues('chooseGodzilla', 8, 25, 6, 30);
        chooseYourCharacter.innerText = "King Kong is your fighter";
    } else if (kaijuChoice === 'chooseGodzilla') {
        setKaijuValues('chooseMecha', 6, 30, 4, 35);
        chooseYourCharacter.innerText = "Godzilla is your fighter";
    } else if (kaijuChoice === 'chooseMecha') {
        // Kong gets a bit of extra strength when he fights godzilla or it wouldn't
        // be fair and mecha godzilla almost always wins
        setKaijuValues('chooseKong', 4, 35, 10, 25);
        chooseYourCharacter.innerText = "Mechagodzilla is your fighter";
    }
    // now that we are done with the kaijuChoice cookie on this page, we will convert it to html code
    // and then set it to a cookie
    kaijuChoice = chosenKaiju.outerHTML;
    Cookies.set("playerKaijuSelection", kaijuChoice);
}






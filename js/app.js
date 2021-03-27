

function selectKaiju(kaijuChoice) {
    var chosenKaiju = document.getElementById(kaijuChoice);
    kaijuChoice = chosenKaiju.innerHTML;
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
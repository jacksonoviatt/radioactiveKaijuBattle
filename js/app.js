

function selectKaiju(kaijuChoice) {
    var chosenKaiju = document.getElementById(kaijuChoice);
    kaijuChoice = chosenKaiju.innerHTML;
    Cookies.set("playerKaijuSelection", kaijuChoice);
}

var playersSelection = Cookies.get("playerKaijuSelection");

var chooseAKaiju = document.getElementsByClassName("chooseAKaiju");
for(var i = 0; i < chooseAKaiju; i++) {
}





// document.getElementById('choiceDisplay').innerText = `${i} is ready to fight`
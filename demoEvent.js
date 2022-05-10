let compteur = 0;

function compteurIncrement(){
    compteur++;
    let paragrapheCompteur = document.getElementById("paragrapheCompteur");
    paragrapheCompteur.innerHTML = "Vous avez cliqué " +compteur +" fois";
}

function changerCouleur(button){
    let randomRed = getRandomInt(256);
    let randomGreen = getRandomInt(256);
    let randomBlue = getRandomInt(256);
    button.style.backgroundColor = "RGB("+randomRed+","+randomGreen+","+randomBlue+")";
}

function getRandomInt(borneMax){
    return Math.floor(Math.random()*borneMax);
}
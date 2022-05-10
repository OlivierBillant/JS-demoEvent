let compteur = 0;

function compteurIncrement(){
    compteur++;
    let paragrapheCompteur = document.getElementById("paragrapheCompteur");
    paragrapheCompteur.innerHTML = "Vous avez cliqué " +compteur +" fois";
}
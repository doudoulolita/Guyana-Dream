"use strict";

// La fonction qui initialise le tout
function init() {

	cartes = [carte1]; // tableaux des cartes dans le fichier carte.js. Au début du jeu, c'est la carte 1

	recupCanvas(); // appel de la fonction de récupération des canvas dans jeu.js

	ecranAccueil(); // appel de la fonction du fichier jeu.js
}

/***** lorsque la fenêtre est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };




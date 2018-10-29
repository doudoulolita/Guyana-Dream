"use strict";

// La fonction qui initialise le tout
function init() {

	recupCanvas(); // appel de la fonction de récupération des canvas dans jeu.js

	ecranJeu(); // appel de la fonction du fichier jeu.js
}

/***** lorsque la fenêtre est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };




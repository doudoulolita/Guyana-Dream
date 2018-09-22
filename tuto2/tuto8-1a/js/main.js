"use strict";

// La fonction qui initialise le tout
function init() {

	/* variables */
	cartes = [carte1]; // carte 1 dans le fichier carte.js et autres cartes dans le fichier change-carte.js

	/* appel des fonctions */

	recupCanvas(); // appel de la fonction de récupération des canvas dans jeu.js

	ecranAccueil(); // appel de la fonction du fichier ecrans.js
}

/***** lorsque la fenêtre est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };




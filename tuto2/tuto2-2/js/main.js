"use strict";

// La fonction qui initialise le tout
function init() {

	recupCanvas(); // appel de la fonction de récupération des canvas dans jeu.js

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	dessineImage(tuile, 0, 0);

	dessineImage(joueur, tuile.width*3, tuile.height*2);
}

/***** lorsque la fenêtre est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };




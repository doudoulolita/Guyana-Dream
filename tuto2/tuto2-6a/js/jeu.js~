/* Récupération du canvas pour pouvoir dessiner dessus */

function recupCanvas() {
/** Récupération du canvas **/
	let canvas1 = document.querySelector('canvas');
	context1 = canvas1.getContext('2d');

	// Définit les dimensions du canvas
	largeurCanvas = canvas1.width;
	hauteurCanvas = canvas1.height;
}

// La fonction qui initialise le tout
function init() {

	recupCanvas(); // récupération du canvas des tuiles
	dessineCarte(); // dessin de la carte
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

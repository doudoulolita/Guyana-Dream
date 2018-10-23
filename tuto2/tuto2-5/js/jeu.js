/* Récupération du canvas pour pouvoir dessiner dessus */

function recupCanvas() {
	let canvas1 = document.querySelector('canvas'); //on récupère le canvas sur lequel on va dessiner
	context1 = canvas1.getContext('2d'); //on indique le contexte

	// Définit les dimensions du canvas
	largeurCanvas = canvas1.width;
	hauteurCanvas = canvas1.height;
}

// La fonction qui initialise le tout

function init() {
    recupCanvas(); // récupération du canvas des tuiles
    dessineLigneCarte(); // dessin de la ligne de la carte
}

/***** lorsque la fenêtre est chargée, la fonction init() est appelée *****/

window.onload = function() { init() };

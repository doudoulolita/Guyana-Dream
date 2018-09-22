/* Récupération du canvas pour pouvoir dessiner dessus */

function recupCanvas() {
	let canvas = document.querySelector('canvas'); //on récupère le canvas sur lequel on va dessiner
	context = canvas.getContext('2d'); //on indique le contexte

	// Définit les dimensions du canvas
	largeurCanvas = canvas.width;
	hauteurCanvas = canvas.height;
}

// La fonction qui initialise le tout

function init() {
    recupCanvas(); // récupération du canvas des tuiles
    dessineLigneCarte(); // dessin de la ligne de la carte
}

/***** lorsque la fenêtre est chargée, la fonction init() est appelée *****/

window.onload = function() { init() };

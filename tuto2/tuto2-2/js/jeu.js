/* Récupération du canvas pour pouvoir dessiner dessus */

function recupCanvas() {
	canvas = document.querySelector('canvas'); //on récupère le canvas sur lequel on va dessiner
	context = canvas.getContext('2d'); //on indique le contexte

	// Définit les dimensions du canvas
	canvasLargeur = canvas.width;
	canvasHauteur = canvas.height;
}

recupCanvas(); // appel de la fonction qui récupère le canvas



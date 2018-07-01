var couleurfondCarte = "#5b6634"; // couleur de fond du jeu

/* Récupération du canvas pour pouvoir dessiner dessus */

function recupCanvas() {
/** Récupération du canvas **/
	var canvas = document.querySelector('canvas');
	context = canvas.getContext('2d');

	// Définit les dimensions du canvas
	largeurCanvas = canvas.width;
	hauteurCanvas = canvas.height;
}

/* function pour la couleur du fond */
function couleurFond(couleur) {
	/* on remplit tout le canvas de couleur */
	context.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context.fillRect(0,0, largeurCanvas, hauteurCanvas); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context.fill(); // on remplit !
}

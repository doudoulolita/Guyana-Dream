let couleurfondCarte = "#5b6634"; // couleur de fond du jeu

/* Récupération du canvas pour pouvoir dessiner dessus */

function recupCanvas() {
/** Récupération du canvas **/
	let canvas1 = document.querySelector('canvas');
	context1 = canvas1.getContext('2d');

	// Définit les dimensions du canvas
	largeurCanvas = canvas1.width;
	hauteurCanvas = canvas1.height;
}

/* fonction pour la couleur du fond */
function couleurFond(couleur) {
	/* on remplit tout le canvas de couleur */
	context1.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context1.fillRect(0,0, largeurCanvas, hauteurCanvas); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context1.fill(); // on remplit !
}

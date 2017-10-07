var couleurfondCarte = "#5b6634"; // couleur de fond du jeu

/* Récupération du canvas pour pouvoir dessiner dessus */

function recupCanvas(id) {
	// Récupére le canvas à partir de son id
	canvas = document.getElementById(id);

	// Définit les dimensions du canvas
	canvasLargeur = canvas.width;
	canvasHauteur = canvas.height;
	
	context = canvas.getContext('2d');
}

/* function pour la couleur du fond */
function couleurFond(couleur) {
	/* on remplit tout le canvas de couleur */
	context.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context.fillRect(0,0, canvasLargeur, canvasHauteur); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context.fill(); // on remplit !
}

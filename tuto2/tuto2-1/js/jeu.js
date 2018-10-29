/* récupération du canvas et du context */

function recupCanvas() { //  fonction appelée dans le fichier main.js
	// récupére le canvas sur lequel on va dessiner à partir de sa balise 
	canvas = document.querySelector('canvas');

	// Largeur et hauteur du canvas
	largeurCanvas = canvas.width;
	hauteurCanvas = canvas.height;

	// récupération du context qui permet de dessiner sur le canvas
	context = canvas.getContext('2d');
}

var couleurfondCarte = "#5b6634"; // couleur de fond du jeu

/* fonction pour la couleur du fond (appelée dans le fichier ecran.js) */
function couleurFond(couleur, x, y, largeur, hauteur) { 
	/* on remplit tout le canvas de couleur */
	context.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context.fillRect(x, y, largeur, hauteur); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context.fill(); // on remplit !
}

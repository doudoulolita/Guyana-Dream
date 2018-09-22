/* Récupération du canvas pour pouvoir dessiner dessus */

let canvas = "";//canvas[0] contient le premier canvas et canvas[6] le cinquiÃ¨me
let context = []; // initialise les contextes

let largeurCanvas = 0;
let hauteurCanvas = 0;

/* récupération des canvas et des contexts */

function recupCanvas() {
	// récupére tous les canvas sur lesquels on va dessiner
	canvas = document.querySelectorAll('canvas');//canvas[0] contient le premier canvas et canvas[6] le cinquiÃ¨me

	// Largeur et hauteur du canvas 1 (les canvas commencent Ã  0)
	largeurCanvas = canvas[0].width;
	hauteurCanvas = canvas[0].height;

	// récupération des contexts qui permettent de dessiner sur les canvas
	for (i=0; i<canvas.length; i++) {//pourquoi faire une boucle ? car plus tard, nous rajouterons encore des canvas par dessus! on n'aura donc pas besoin de réadapter le code
		context[i] = canvas[i].getContext('2d');//context[0] contient le context du premier canvas et context[6] celui du septiÃ¨me
	}
}

let couleurfondCarte = "#5b6634"; // couleur de fond du jeu


/* function pour la couleur du fond */
function couleurFond(couleur, x, y, largeur, hauteur) {
	/* on remplit tout le canvas de couleur */
	context[0].fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context[0].fillRect(x, y, largeur, hauteur); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context[0].fill(); // on remplit !
}


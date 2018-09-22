/* Récupération du canvas pour pouvoir dessiner dessus */

let canvas = "";//canvas[0] contient le premier canvas et canvas[4] le cinquième
let context = []; // initialise les contextes

/* Initialise la largeur et la hauteur du canvas */
let largeurCanvas = 0;
let hauteurCanvas = 0;

/* récupération des canvas et des contexts */

function recupCanvas() {
	// récupére tous les canvas sur lesquels on va dessiner
	canvas = document.querySelectorAll('canvas');//canvas[0] contient le premier canvas et canvas[4] le cinquième

	for (i=0; i<canvas.length; i++){ // on parcourt le tableau des canvas
		if(joueurs.length > 2) { // si le nombre de joueurs est plus grand que 2
			canvas[i].width = (carte1[0].length*tailleTuile) +  (joueurs.length*tailleTuile); // on augmente la largeur du canvas par rapport à la largeur de la carte en fonction du nombre de joueurs à afficher
			canvas[i].height = (carte1.length*tailleTuile) + hauteurTitre*2; // on augmente la hauteur du canvas pour mettre le titre
		}
		else {
			canvas[i].width = (carte1[0].length*tailleTuile) +  (3*tailleTuile); // pour 2 joueurs ou moins, on ajoute juste 3 largeurs de tuiles à la taille de la carte
			canvas[i].height = (carte1.length*tailleTuile) + hauteurTitre*2; // on augmente la hauteur du canvas pour mettre le titre
		}			
	}

	// Largeur et hauteur du canvas 1 (les canvas commencent à  0)
	largeurCanvas = canvas[0].width;
	hauteurCanvas = canvas[0].height;

	// récupération des contexts qui permettent de dessiner sur les canvas
	for (i=0; i<canvas.length; i++) {//pourquoi faire une boucle ? car plus tard, nous rajouterons encore des canvas par dessus! on n'aura donc pas besoin de réadapter le code
		context[i] = canvas[i].getContext('2d');//context[0] contient le context du premier canvas et context[4] celui du cinquième
	}
}

let couleurfondCarte = "#5b6634"; // couleur de fond du jeu


/* fonction pour la couleur du fond */
function couleurFond(couleur, x, y, largeur, hauteur) { 
	/* on remplit tout le canvas de couleur */
	context[0].fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context[0].fillRect(x, y, largeur, hauteur); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context[0].fill(); // on remplit !
}




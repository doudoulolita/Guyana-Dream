/* Récupération du canvas pour pouvoir dessiner dessus */

let canvas = "";//canvas[0] contient le premier canvas et canvas[4] le cinquième
let context = []; // initialise les contextes

/* Initialise la largeur et la hauteur du canvas */
let largeurCanvas = 0;
let hauteurCanvas = 0;

/* récupération des canvas et des contexts */

function recupCanvas() {
	// récupére tous les canvas sur lesquels on va dessiner (appelée dans le fichier main.js)
	canvas = document.querySelectorAll('canvas');//canvas[0] contient le premier canvas et canvas[4] le cinquième

	for (i=0; i<canvas.length; i++){ // on parcourt le tableau des canvas

		canvas[i].width = (carte1[0].length*tailleTuile); // pour 2 joueurs ou moins, on ajoute juste 3 largeurs de tuiles à la taille de la carte
		canvas[i].height = (carte1.length*tailleTuile); // on augmente la hauteur du canvas pour mettre le titre
			
	}

	// Largeur et hauteur du canvas 1 (les canvas commencent à  0)
	largeurCanvas = canvas[0].width;
	hauteurCanvas = canvas[0].height;

	// récupération des contexts qui permettent de dessiner sur les canvas
	for (i=0; i<canvas.length; i++) {//pourquoi faire une boucle ? car plus tard, nous rajouterons encore des canvas par dessus! on n'aura donc pas besoin de réadapter le code
		context[i] = canvas[i].getContext('2d');//context[0] contient le context du premier canvas et context[4] celui du cinquième
	}
}

/***** fonction pour lancer les animations de joueur et des pnjs *****/

let myReq; // variable pour la fonction requestAnimationFrame qui permet l'animation


function animeTout() {
	context[2].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas du joueur

	animePerso(joueur, context[2]);

	 myReq = requestAnimationFrame(animeTout);//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}


/***** fonction pour afficher le jeu *****/
function ecranJeu() {

	context[0].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le premier canvas (avant d'afficher la carte)

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	dessineCarte(); // appel de la fonction de dessin de la carte (carte.js) sur le canvas[0]

	myReq = requestAnimationFrame(animeTout); // lance l'animation du joueur

	// Lorsqu'une touche est appuyée, lance la fonction qui fait bouger le personnage
	document.onkeydown = persoBouge; // si on appuie sur une touche, appel de la fonction du fichier clavier.js

}

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

		canvas[i].width = (carte1[0].length*tailleTuile) +  (3*tailleTuile); // pour 2 joueurs ou moins, on ajoute juste 3 largeurs de tuiles à la taille de la carte
		canvas[i].height = (carte1.length*tailleTuile) + hauteurTitre*2; // on augmente la hauteur du canvas pour mettre le titre
			
	}

	// Largeur et hauteur du canvas 1 (les canvas commencent à  0)
	largeurCanvas = canvas[0].width;
	hauteurCanvas = canvas[0].height;

	// récupération des contexts qui permettent de dessiner sur les canvas
	for (i=0; i<canvas.length; i++) {//pourquoi faire une boucle ? car plus tard, nous rajouterons encore des canvas par dessus! on n'aura donc pas besoin de réadapter le code
		context[i] = canvas[i].getContext('2d');//context[0] contient le context du premier canvas et context[4] celui du cinquième
	}
}

/** textes du jeu **/

let titreJeu = "Guyana-Dream";

let hauteurTitre1=50;

let hauteurTitre=14;

let texteChoixPerso = 'Cliquez vite sur un perso';

let titreInventaire = "Inventaire";


let texteFin = "Fin du jeu";

let texteResultat = "";
let texteGagne = "Gagné !";
let textePerd = "Perdu !";

let fonte = "px Arial";
let couleurTexte = "#cb923b";

/* les textes des PNJs sont dans leur fichier respectif */


/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) { // fonction écrivant un texte d'une taille donnée en paramètre aux coordonnées x et y
	context[4].font = tailleTexte+fonte ;
	context[4].fillStyle = couleurTexte;
	context[4].fillText(texte,x,y);
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
	context[4].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des textes

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	ajouteTexte(titreJeu, hauteurTitre, 10, hauteurCanvas-10); // appel de la fonction du fichier texte.js pour le titre du jeu

	dessineCarte(); // appel de la fonction de dessin de la carte (carte.js) sur le canvas[0]

	myReq = requestAnimationFrame(animeTout); // lance l'animation du joueur

	// Lorsqu'une touche est appuyée, lance la fonction qui fait bouger le personnage
	document.onkeydown = persoBouge; // si on appuie sur une touche, appel de la fonction du fichier clavier.js

	ajouteTexte(titreInventaire, hauteurTitre, largeurCanvas-(3*tailleTuile)+20,20); // appel de la fonction du fichier texte.js pour le titre de l'inventaire
}

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

/** textes du jeu **/

let titreJeu = "Guyana-Dream";

let hauteurTitre1=50;

let hauteurTitre=14;

let texteChoixPerso = 'Cliquez vite sur un perso';

let texteAide = "Appuyez sur A pour combattre l'ennemi";

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

function bulleTexte(texte, x, y) { // fonction dessinant un cartouche ("bulle" simplifiée) avec un texte, à l'endroit indiqué lors de l'appel

	context[1].beginPath();
	context[1].fillStyle = 'rgb(255, 255, 255)'; // couleur du cartouche

	context[1].arc(x, y-tailleTuile, tailleTuile/2,  Math.PI/2, Math.PI+(Math.PI/2)); // cercle 1

	context[1].arc(x+(pnj.texte.length*6), y-tailleTuile, tailleTuile/2, Math.PI+(Math.PI/2), 2*Math.PI+(Math.PI/2)); // cercle 2
	context[1].fill(); // ça remplit les cercles et entre les deux

	context[1].closePath();

	context[4].clearRect(x, y-(tailleTuile*1.5), pnj.texte.length*9, tailleTuile);// on efface le texte (qui n'est pas sur le même canvas) en se basant sur sa longueur

	ajouteTexte(texte, 14, x, y-tailleTuile); // on écrit le texte
}



/***** fonction pour lancer les animations de joueur et des pnjs *****/

let myReq; // variable pour la fonction requestAnimationFrame qui permet l'animation


function animeTout() {
	context[2].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas du joueur
	context[3].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des PNJs

	animePerso(joueur, context[2]);

	animePnjs(context[3]);

	 myReq = requestAnimationFrame(animeTout);//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}

/**** Le jeu se décline en 3 écrans : 

	- l'écran d'accueil montre les images des joueurs possibles. On doit cliquer sur un de ces joueurs
	- l'écran de jeu efface le tout puis affiche la carte, le personnage choisi et les PNJs
	- l'écran de fin efface le tout puis affiche les scores et le résultat du jeu (gagné ou perdu)

 ****/

let tempsEcran= 3000; // temps au bout duquel l'écran de jeu s'affiche

function ecranAccueil() { // fonction pour afficher les images permettant de choisir le joueur parmi 3 (appelée dans le fichier main.js)

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	ajouteTexte(texteChoixPerso, hauteurTitre, largeurCanvas/3, 20); // texte en haut du canvas avec l'instruction

	ajouteTexte(texteAide, hauteurTitre, largeurCanvas/3.5, 60); // texte en haut du canvas avec l'instruction pour l'ennemi

	ajouteTexte(titreJeu, hauteurTitre1, largeurCanvas/4 , hauteurCanvas/2); // titre du jeu au centre du canvas

	dessineJoueurs(context[2]); // appel de la fonction dessinant les joueurs du fichier persos.js

	canvas[4].addEventListener("click", clicCanvas, false);	// vérifie si on clique sur un des singes (fonction persos.js)
}

/***** fonction pour afficher le jeu après le choix du joueur (appelée dans le fichier main.js) *****/
function ecranJeu() {

	setTimeout(function() { // cette fonction se lancera quand le temps décidé sera écoulé

		console.log(clic + " clic sur un singe");


		if(clic!=0) { // si on a cliqué sur un singe

			initialiseJoueurs();

			initialisePnjs();

			pointsEnergie = 0;

			nbPointsObjet = 0;

			initialisePoints(); // appel de la fonction du fichier collision-objet.js

			initialiseCartes();

			context[0].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le premier canvas (avant d'afficher la carte)
			context[4].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des textes

			couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

			ajouteTexte(titreJeu, hauteurTitre, 10, hauteurCanvas-10); // appel de la fonction du fichier texte.js pour le titre du jeu

			dessineCarte(); // appel de la fonction de dessin de la carte (carte.js) sur le canvas[0]

			myReq = requestAnimationFrame(animeTout); // lance l'animation du joueur (fichier animation.js)

			// Lorsqu'une touche est appuyée, lance la fonction qui fait bouger le personnage
			document.onkeydown = persoBouge; // si on appuie sur une touche, appel de la fonction du fichier clavier.js

			ajouteTexte(titreInventaire, hauteurTitre, largeurCanvas-(3*tailleTuile)+20,20); // appel de la fonction du fichier texte.js pour le titre de l'inventaire
			ajouteTexte(nbPoints+ " points", hauteurTitre, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte (texte.js)

			compteTemps(); // appel de la fonction du fichier temps.js qui affiche et décompte celui-ci (temps.js)
			gereEnergie(); // affiche et décompte l'énergie et la vitesse (temps.js)
			chrono(); // on lance la fonction qui terminera le jeu (voir fichier temps.js)
		}

	}, tempsEcran); // la fonction s'exécute au bout du temps indiqué
}

function ecranFinJeu() { // fonction affichant un écran donnant les scores (appelée dans la fonction chrono du fichier temps.js)
	context[0].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface la carte sur le premier canvas
	context[1].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface les bulles de dialogues
	context[4].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface le canvas des textes

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
	ajouteTexte(texteFin, hauteurTitre1, tailleTuile*8 , tailleTuile*3); // on écrit que c'est la fin du jeu

	bulleTexte(pnj.texteQueteOk, pnj.posX2, pnj.posY2); // bulle de dialogue avec un texte

	canvas[4].addEventListener("click", clicRejouer, false);	// vérifie si on clique sur les pnjs à droite et lance la fonction clicRejouer

}

function clicRejouer() {
	if(xSourisCanvas>0 && xSourisCanvas<pnj.arriveeX && ySourisCanvas>0 && ySourisCanvas<tailleTuile*carte1.length) { // vérifie à quel endroit on a cliqué par rapport à l'image de choix du joueur
		clic=0;
		context[0].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le premier canvas
		context[1].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface les bulles de dialogues
		context[2].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le perso joueur
		context[3].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface les PNJs
		context[4].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des textes

		cancelAnimationFrame(myReq); // arrête l'animation qui permet l'affichage en mouvement des personnages

		ecranAccueil(); // réaffiche l'écran d'accueil
	}
}

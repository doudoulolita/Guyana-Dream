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

/** textes du jeu **/

let titreJeu = "Guyana-Dream";

let hauteurTitre1 = 25;

let titreInventaire = "Inventaire";

let hauteurTitre = 14;

let fonte = "px Arial";
let couleurTexte = "#cb923b";

/* les textes des PNJs sont dans leur fichier respectif */


/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) { // fonction écrivant un texte d'une taille donnée en paramètre aux coordonnées x et y
	context.font = tailleTexte+fonte ;
	context.fillStyle = couleurTexte;
	context.fillText(texte,x,y);
}

function bulleTexte(texte, x, y) { // fonction dessinant un cartouche ("bulle" simplifiée) avec un texte, à l'endroit indiqué lors de l'appel

	context.beginPath();
	context.fillStyle = 'rgb(255, 255, 255)'; // couleur du cartouche

	context.arc(x, y-tailleTuile, tailleTuile/2,  Math.PI/2, Math.PI+(Math.PI/2)); // cercle 1

	context.arc(x+(texte.length*6), y-tailleTuile, tailleTuile/2, Math.PI+(Math.PI/2), 2*Math.PI+(Math.PI/2)); // cercle 2
	context.fill(); // ça remplit les cercles et entre les deux

	context.closePath();

	ajouteTexte(texte, hauteurTitre, x, y-tailleTuile); // on écrit le texte
}

/***** fonction pour afficher le jeu *****/
function ecranJeu() {

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	ajouteTexte(titreJeu, hauteurTitre1, 0, hauteurTitre1);

	bulleTexte(titreInventaire, tailleTuile*2, hauteurCanvas);

}

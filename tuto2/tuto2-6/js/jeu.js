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

/***** fonction pour afficher le jeu *****/
function ecranJeu() {

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	dessineCarte(); // appel de la fonction de dessin de la carte (carte.js) sur le canvas

}

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

/***** fonction pour lancer les animations de joueur et des pnjs *****/

let myReq; // variable pour la fonction requestAnimationFrame qui permet l'animation


function animeTout() {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas du joueur

	animePerso(joueur, context);

	 myReq = requestAnimationFrame(animeTout);//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}


/***** fonction pour afficher le jeu *****/
function ecranJeu() {

	myReq = requestAnimationFrame(animeTout); // lance l'animation du joueur

	// Lorsqu'une touche est appuyée, lance la fonction qui fait bouger le personnage
	document.onkeydown = persoBouge; // si on appuie sur une touche, appel de la fonction du fichier clavier.js

}

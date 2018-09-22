/* Récupération du canvas pour pouvoir dessiner dessus */

// Récupére les canvas à partir de leur id
canvas1 = document.getElementById("tuiles");

canvas2 = document.getElementById("persos");

canvas3 = document.getElementById("pnjs");

canvas4 = document.getElementById("textes");

// Définit les dimensions du canvas
largeurCanvas = canvas1.width;
hauteurCanvas = canvas1.height;

context1 = canvas1.getContext('2d');

context2 = canvas2.getContext('2d');

context3 = canvas3.getContext('2d');

context4 = canvas4.getContext('2d');

let couleurfondCarte = "#5b6634"; // couleur de fond du jeu


/* function pour la couleur du fond */
function couleurFond(couleur, largeur, hauteur) {
	/* on remplit tout le canvas de couleur */
	context1.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context1.fillRect(0,0, largeur, hauteur); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context1.fill(); // on remplit !
}

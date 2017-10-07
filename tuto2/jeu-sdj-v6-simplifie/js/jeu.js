var couleurfondCarte = "#5b6634"; // couleur de fond du jeu

/* Récupération du canvas pour pouvoir dessiner dessus */


// Récupére les canvas à partir de leur id
canvas1 = document.getElementById("tuiles");

// Définit les dimensions du canvas
canvasLargeur = canvas1.width;
canvasHauteur = canvas1.height;

context1 = canvas1.getContext('2d');

canvas2 = document.getElementById("persos");
context2 = canvas2.getContext('2d');

canvas3 = document.getElementById("pnjs");
context3 = canvas3.getContext('2d');


/* function pour la couleur du fond */
function couleurFond(couleur) {
	/* on remplit tout le canvas de couleur */
	context1.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context1.fillRect(0,0, canvasLargeur, canvasHauteur); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur
	context1.fill(); // on remplit !
}

/* Récupération du canvas pour pouvoir dessiner dessus */

// Récupére les canvas à partir de leur id
let canvas1 = document.getElementById("tuiles");
context1 = canvas1.getContext('2d');

let canvas2 = document.getElementById("persos");
context2 = canvas2.getContext('2d');

// Définit les dimensions du canvas
largeurCanvas = canvas1.width;
hauteurCanvas = canvas1.height;

// couleur de fond du jeu
let couleurfondCarte = "#5b6634"; 

/* function pour la couleur du fond */
function couleurFond(couleur) {
	/* on remplit tout le canvas de couleur */
	context1.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context1.fillRect(0,0, largeurCanvas, hauteurCanvas); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context1.fill(); // on remplit !
}
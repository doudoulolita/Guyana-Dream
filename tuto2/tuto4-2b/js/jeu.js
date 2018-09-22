function recup2Canvas() {
	// Récupére les canvas à partir de leur id
	let canvas1 = document.getElementById('tuiles');
	context1 = canvas1.getContext('2d');

	let canvas2 = document.getElementById('persos');
	context2 = canvas2.getContext('2d');


	// Définit les dimensions du canvas
	largeurCanvas = canvas1.width;
	hauteurCanvas = canvas1.height;
}

let couleurfondCarte = "#5b6634"; // couleur de fond du jeu

/* function pour la couleur du fond */
function couleurFond(context, couleur) {
	/* on remplit tout le canvas de couleur */
	context.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context.fillRect(0,0, largeurCanvas, hauteurCanvas); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur
	context.fill(); // on remplit !
}



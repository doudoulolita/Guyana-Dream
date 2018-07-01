function recup2Canvas() {
	// Récupére les canvas à partir de leur id
	canvas1 = document.getElementById('tuiles');
	context1 = canvas1.getContext('2d');

	canvas2 = document.getElementById('persos');
	context2 = canvas2.getContext('2d');


	// Définit les dimensions du canvas
	largeurCanvas = canvas1.width;
	hauteurCanvas = canvas1.height;
}


recup2Canvas(); // appel de la fonction pour récupérer le canvas

/* on remplit tout le canvas de couleur */
context1.fillStyle="#5b6634"; // choix de la couleur (verte)
context1.fillRect(0,0, 192, 192); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur
context1.fill(); // on remplit !



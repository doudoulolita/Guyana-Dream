/* fonction gérant les changements de direction du personnage près des bords */
function bloqueBords() {
	// condition pour éviter que le perso ne dépasse sur les bords du canvas. On enlève la largeur du perso à droite et la hauteur du perso en bas sinon, il déborde du cadre.
	if (joueur.posX < 0) {
		joueur.posX = 1;
		numCarte=1;
		changeCarte();
	}
	if (joueur.posY < 0) {
		joueur.posY = 1;
	}
	if (joueur.posX > largeurCanvas - joueur.largeur - (3*tailleTuile)) {
		joueur.posX = largeurCanvas - joueur.largeur - (3*tailleTuile); // quand les bords sont atteints à l'horizontal, on inverse la vitesse
		numCarte = 2;
		changeCarte();
	}
	if (joueur.posY > hauteurCanvas - joueur.hauteur - tailleTuile) {
		joueur.posY = hauteurCanvas - joueur.hauteur - tailleTuile; // quand les bords sont atteints à la vertical, on inverse la vitesse
	}
}



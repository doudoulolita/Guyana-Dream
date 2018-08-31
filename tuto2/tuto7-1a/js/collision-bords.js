/* fonction gérant les changements de direction du personnage près des bords (appelée dans la fonction animePerso du fichier animation.js) */
function bloqueBords() {
	// condition pour éviter que le perso ne dépasse sur les bords du canvas. On enlève la largeur du perso à droite et la hauteur du perso en bas sinon, il déborde du cadre.
	if (joueur.posX < 0) { // si la position horizontale du joueur est inférieure à 0 (à gauche)
		joueur.posX = 1; // on fixe sa position
		numCarte=1; // on passe à la 1ère carte
		changeCarte(); // on change de carte
	}
	if (joueur.posY < 0) { // si la position verticale du joueur est inférieure à 0 (en haut)
		joueur.posY = 1; // on fixe sa position
	}
	if (joueur.posX > carte1[0].length*tailleTuile - joueur.largeur) { // si le joueur dépasse de la carte à droite
		joueur.posX = carte1[0].length*tailleTuile - joueur.largeur; // quand les bords sont atteints à l'horizontale, on fixe sa position
		numCarte = 2; // on passe à la deuxième carte
		changeCarte(); // on change de carte
	}
	if (joueur.posY > carte1.length*tailleTuile - joueur.hauteur) { // si le joueur est en bas de la carte
		joueur.posY = carte1.length*tailleTuile - joueur.hauteur; // quand les bords sont atteints à la verticale, on fixe sa position
	}
}



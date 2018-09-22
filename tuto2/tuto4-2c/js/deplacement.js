let arriveeX = imageX;

/*** fonction gérant le déplacement du personnage ***/
function deplacementPnj(perso) {
	perso.posX += perso.v; // le perso avance horizontalement selon la vitesse indiquée
}

/*** fonction où le personnage parcourt la distance depuis le point de départ et revient en arrière au niveau du point d'arrivée ***/
function changeDirectionPnj(perso, depart, arrivee) {
	if (perso.posX < depart) { // si le perso est à gauche du point de départ
		perso.v = Math.abs(perso.v); // rend la vitesse positive
		dir=1; // le perso regarde vers la gauche
	}

	if (perso.posX > arrivee - perso.largeur) { // si le perso dépasse le point d'arrivée
		perso.v=-Math.abs(perso.v); // rend la vitesse négative
		dir=2; // le perso regarde vers la droite
	}
}

let arriveeX = imageX;

/*** fonction gérant le déplacement du personnage ***/
function deplacementPnj() {
	pnjX += pnjV; // le perso avance horizontalement selon la vitesse indiquée
}

/*** fonction où le personnage parcourt la distance depuis le point de départ et revient en arrière ***/
function changeDirectionPnj() {
	if (pnjX < departX) {
		pnjV = Math.abs(pnjV);
		dir=1;
	}

	if (pnjX > arriveeX-largeurPnj) {
		pnjV=-Math.abs(pnjV);
		dir=2;
	}
}

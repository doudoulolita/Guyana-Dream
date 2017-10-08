/* fonction gérant les changements de direction du personnage près des bords */
function bloqueDeplacement() {
	// condition pour éviter que le perso ne dépasse sur les bords du canvas. On enlève la largeur du perso à droite et la hauteur du perso en bas sinon, il déborde du cadre.
	if (x < 0) {
		x = 1;
	}
	if (y < 0) {
		y = 1;
	}
	if (x > largeurCanvas - largeurPerso) {
		x = largeurCanvas - largeurPerso; // quand les bords sont atteints, on inverse la vitesse
	}
	if (y > hauteurCanvas - hauteurPerso) {
		y = hauteurCanvas - hauteurPerso; // quand les bords sont atteints, on inverse la vitesse
	}
}

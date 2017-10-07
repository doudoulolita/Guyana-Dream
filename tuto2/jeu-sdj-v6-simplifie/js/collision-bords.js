var minX=0;
var minY=0;

var maxX=canvasLargeur - largeurPerso;
var maxY=canvasHauteur - hauteurPerso;

/* fonction gérant les changements de direction du personnage près des bords */
function bloqueSortieCanvas(minX, minY, maxX, maxY) {

	// condition pour éviter que le perso ne dépasse sur les bords du canvas. On enlève la largeur du perso à droite et la hauteur du perso en bas sinon, il déborde du cadre.
	if (x < minX) {
		x = 1;
	}
	if (y < minY) {
		y = 1;
	}
	if (x > maxX) {
		x = maxX; // quand le bord droit est atteint, on stoppe le perso
	}
	if (y > maxY) {
		y = maxY; // quand le bord du bas sont atteints, on stoppe le perso
	}
}








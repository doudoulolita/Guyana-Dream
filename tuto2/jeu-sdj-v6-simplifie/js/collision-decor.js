// fonction permettant d'arrêter le personnage quand il arrive sur une tuile sur laquelle il n'a pas le droit d'être
function bloqueSurDecor(X1, Y1) {
	if (dir==dirDroite) {
		if (x+largeurPerso > X1 && x < X1+tailleTuile && y+hauteurPerso > Y1 && y < Y1+tailleTuile ) { x = X1-largeurPerso;}
	}
	if (dir==dirGauche) {
		if (x+largeurPerso > X1 && x < X1+tailleTuile && y+hauteurPerso > Y1 && y < Y1+tailleTuile ) { x = X1+tailleTuile;}
	}
	if (dir==dirHaut) {
		if (x+largeurPerso > X1 && x < X1+tailleTuile && y+hauteurPerso > Y1 && y < Y1+tailleTuile ) { y = Y1+tailleTuile;}
	}
	if (dir==dirBas) {
		if (x+largeurPerso > X1 && x < X1+tailleTuile && y+hauteurPerso > Y1 && y < Y1+tailleTuile ) { y = Y1-hauteurPerso;}
	}
}

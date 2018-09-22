/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePerso(x, y) {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	context.drawImage(joueur, 0, 0, largeurPerso, hauteurPerso,  x, y, largeurPerso, hauteurPerso);
}

/*** fonction gérant le déplacement du personnage ***/
function obliquePerso() {
	x += vx; // le perso avance horizontalement selon la vitesse indiquée
	y += vy;
}

/*** fonction remettant à gauche le personnage quand il touche le bord droit du canvas ***/
function rebondPerso() {
	if (x > largeurCanvas) {
		vx=-vx;
	}

	if (y > hauteurCanvas) {
		vy=-vy;
	}
	if (x < 0) {
		vx=-vx;
	}

	if (y < 0) {
		vy=-vy;
	}
}

/***** fonction pour animer le personnage *****/
function animePerso() {

	dessinePerso(x, y); // appel de la fonction qui dessine le personnage, en transformant le chiffre de la pose en entier

	obliquePerso();

	rebondPerso(); // appel de la fonction de déplacement du personnage

	requestAnimationFrame(animePerso); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}
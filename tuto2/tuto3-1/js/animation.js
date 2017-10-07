/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePerso(x, y) {
	ctx.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	ctx.drawImage(joueur, 0, 0, largeurPerso, hauteurPerso,  x, y, largeurPerso, hauteurPerso);
}

/*** fonction gérant le déplacement du personnage ***/
function deplacementPerso() {
	x += vx; // le perso avance horizontalement selon la vitesse indiquée
}

/*** fonction remettant à gauche le personnage quand il touche le bord droit du canvas ***/
function recommenceMouvement() {
	if (x > largeurCanvas) {
		x=0;
	}
}

/***** fonction pour animer le personnage *****/
function animePerso() {

	dessinePerso(x, y); // appel de la fonction qui dessine le personnage, en transformant le chiffre de la pose en entier

	deplacementPerso(); // appel de la fonction de déplacement du personnage  

	recommenceMouvement(); // appel de la fonction pour ramener le personnage à gauche du canvas

	requestAnimationFrame(animePerso); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}

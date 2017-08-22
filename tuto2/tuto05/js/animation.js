/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePerso(x, y, pose, dir) {
	ctx.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	ctx.drawImage(joueur, largeurPerso*pose, hauteurPerso*dir, largeurPerso, hauteurPerso,  x, y, largeurPerso, hauteurPerso);
}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePose() {
	pose += vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (pose >= nbPoses) pose -= (nbPoses-1); // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}

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

/***** fonction pour animer le personnage *****/
function animePerso() {
	dessinePerso(x, y, Math.floor(pose), dir); // appel de la fonction qui dessine le personnage, en transformant le chiffre de la pose en entier
	bloqueDeplacement();
	requestAnimationFrame(animePerso); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}
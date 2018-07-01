/*** fonction pour effacer le canvas et dessiner le PNJ ***/
function dessinePerso(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	context.drawImage(perso, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur);
}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePose(nbPoses, vPose) {
	pose += vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (pose >= nbPoses) pose -= (nbPoses-1); // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}

/***** fonction pour animer le PNJ *****/
function animePerso(perso) {

	dessinePerso(perso, context2, perso.posX, perso.posY, perso.largeur, perso.hauteur, Math.floor(pose), dir); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	changePose(nbPoses, vPose); // appel de la fonction qui passe d'une pose à l'autre pour simuler le mouvement

	deplacementPnj(perso); // appel de la fonction de déplacement du PNJ  

	changeDirectionPnj(perso, departX, arriveeX); // appel de la fonction pour faire aller le PNJ de droite à gauche et vice-versa

	requestAnimationFrame(function() { 
		animePerso(perso);
	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}

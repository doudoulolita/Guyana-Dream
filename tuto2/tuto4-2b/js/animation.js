/*** fonction pour effacer le canvas et dessiner le PNJ ***/
function dessinePerso(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	context.drawImage(perso, largeurPnj*pose, hauteurPnj*dir, largeurPnj, hauteurPnj,  x, y, largeurPnj, hauteurPnj);
}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePose(nbPoses, vPose) {
	pose += vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (pose >= nbPoses) pose -= (nbPoses-1); // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}

/***** fonction pour animer le PNJ *****/
function animePnj() {

	dessinePerso(pnj, context2, pnjX, pnjY, largeurPnj, hauteurPnj, Math.floor(pose), dir); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	changePose(nbPoses, vPose); // appel de la fonction qui passe d'une pose à l'autre pour simuler le mouvement

	deplacementPnj(); // appel de la fonction de déplacement du PNJ  

	changeDirectionPnj(); // appel de la fonction pour ramener le PNJ à gauche du canvas

	requestAnimationFrame(animePnj); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}

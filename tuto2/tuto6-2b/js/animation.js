/*** fonction pour effacer le canvas et dessiner le PNJ ***/
function dessinePerso(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	context.drawImage(perso, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur);
}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePose(perso, nbPoses, vPose) {
	perso.pose += perso.vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (perso.pose >= perso.nbPoses) {perso.pose -= (perso.nbPoses-1);} // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}

/***** fonction pour animer le PNJ *****/
function animePerso(perso) {

	dessinePerso(perso, context2, perso.posX, perso.posY, perso.largeur, perso.hauteur, Math.floor(perso.pose), dir); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	bloqueBords();

	bloqueTuiles();
	effaceTuiles();

	requestAnimationFrame(function() { 
		animePerso(perso);
	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}

/***** fonction pour animer le PNJ *****/
function animePnj(pnj) {

	dessinePerso(pnj, context3, pnj.posX2, pnj.posY2, pnj.largeur, pnj.hauteur, Math.floor(pnj.pose), dirPnj); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	deplacementPnj(pnj); // appel de la fonction de déplacement du PNJ 

	changePose(pnj, pnj.nbPoses, pnj.vPose);

	changeDirectionPnj(pnj, departX, arriveeX);

	rencontre(pnj); 

	requestAnimationFrame(function() { 
		animePnj(pnj);
	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}


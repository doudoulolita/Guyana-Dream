/*** fonction pour effacer le canvas et dessiner le PNJ ***/
function dessinePerso(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas
	context.drawImage(perso, perso.largeur*pose, perso.hauteur*dir, perso.largeur, perso.hauteur,  x, y, largeur, hauteur); // dessine le perso
}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePose(perso, nbPoses, vPose) {
	perso.pose += perso.vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (perso.pose >= perso.nbPoses) {perso.pose -= (perso.nbPoses-1);} // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}

/***** fonction pour animer le PNJ *****/
function animePerso(perso) {

	dessinePerso(perso, context[2], perso.posX, perso.posY, perso.largeur, perso.hauteur, Math.floor(perso.pose), dir); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	bloqueBords(); // appel de la fonction du fichier collision-bords.js

	bloqueTuiles(); // appel de la fonction du fichier collision-decor.js

	deplaceTuiles(); // appel de la fonction du fichier collision-objet.js

	requestAnimationFrame(function() { 
		animePerso(perso);
	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}

/***** fonction pour animer le PNJ *****/
function animePnj(pnj) {

	dessinePerso(pnj, context[3], pnj.posX2, pnj.posY2, pnj.largeur, pnj.hauteur, Math.floor(pnj.pose), dirPnj); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	deplacementPnj(pnj); // appel de la fonction de déplacement du PNJ 

	changePose(pnj, pnj.nbPoses, pnj.vPose);// appel de la fonction qui passe d'une pose à l'autre

	changeDirectionPnj(pnj, departX, arriveeX); // appel de la fonction fdu fichier deplacement.js

	rencontre(pnj); // appel de la fonction du fichier collision-pnj.js

	requestAnimationFrame(function() { 
		animePnj(pnj);
	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}


/*** fonction pour effacer le canvas et dessiner le PNJ ***/
function dessinePerso(joueur, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(joueur, joueur.largeur*pose, joueur.hauteur*dir, joueur.largeur, joueur.hauteur,  x, y, joueur.largeur, joueur.hauteur); // dessine le perso
}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePose(joueur, nbPoses, vPose) {
	joueur.pose += joueur.vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (joueur.pose >= joueur.nbPoses) {joueur.pose -= (joueur.nbPoses-1);} // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}

/***** fonction pour animer le PNJ *****/
function animePerso(joueur, context) {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas

	dessinePerso(joueur, context, joueur.posX, joueur.posY, joueur.largeur, joueur.hauteur, Math.floor(joueur.pose), dir); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	bloqueBords(); // appel de la fonction du fichier collision-bords.js

	bloqueTuiles(); // appel de la fonction du fichier collision-decor.js

	deplaceTuiles(); // appel de la fonction du fichier collision-objet.js

	requestAnimationFrame(function() { 
		animePerso(joueur, context);
	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}

/***** fonction pour animer le PNJ *****/
function animePnjs() {
	context[3].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas

	dessinePerso(pnj, context[3], pnj.posX2, pnj.posY2, pnj.largeur, pnj.hauteur, Math.floor(pnj.pose), dirPnj); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	deplacementPnj(pnj); // appel de la fonction de déplacement du PNJ 

	changePose(pnj, pnj.nbPoses, pnj.vPose);// appel de la fonction qui passe d'une pose à l'autre

	changeDirectionPnj(pnj, pnj.departX, pnj.arriveeX); // appel de la fonction fdu fichier deplacement.js

	dessinePerso(ennemi, context[3], ennemi.posX2, ennemi.posY2, ennemi.largeur, ennemi.hauteur, Math.floor(ennemi.pose), dirPnj); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	deplacementPnj(ennemi); // appel de la fonction de déplacement du PNJ 

	changePose(ennemi, ennemi.nbPoses, ennemi.vPose);// appel de la fonction qui passe d'une pose à l'autre

	changeDirectionPnj(ennemi, ennemi.departX, ennemi.arriveeX); // appel de la fonction fdu fichier deplacement.js

	rencontre(pnj,textePnj); // appel de la fonction du fichier collision-pnj.js

	rencontre(ennemi, texteEnnemi); // appel de la fonction du fichier collision-pnj.js

	requestAnimationFrame(function() { 
		animePnjs();
	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}


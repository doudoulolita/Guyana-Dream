/*** fonction pour effacer le canvas et dessiner le PNJ (appelée dans le fonction animePerso) ***/
function dessinePerso(joueur, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(joueur, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur); // dessine le perso
}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet (appelée dans le fichier clavier.js) ***/
function changePose(joueur, nbPoses, vPose) {
	joueur.pose += joueur.vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (joueur.pose >= joueur.nbPoses) {joueur.pose -= (joueur.nbPoses-1);} // si on dépasse le pnjbre maximum de pas (poses) sur une ligne, on revient au début.
}

/***** fonction pour animer le personnage joueur (appelée dans la fonction animeTout du fichier main.js) *****/
function animePerso(joueur, context) {
	dessinePerso(joueur, context, joueur.posX, joueur.posY, joueur.largeur, joueur.hauteur, Math.floor(joueur.pose), dir); // appel de la fonction qui dessine le joueur, en transformant le chiffre de la pose en entier

	bloqueBords(); // appel de la fonction du fichier collision-bords.js

	bloqueTuiles(); // appel de la fonction du fichier collision-decor.js

	deplaceTuiles(); // appel de la fonction du fichier collision-objet.js
}


/***** fonction pour animer un PNJ (appelée par la fonction animePnjs) *****/
function animePnj(pnjs, context, dir) {

	dessinePerso(pnjs, context, pnjs.posX2, pnjs.posY2, pnjs.largeur, pnjs.hauteur, Math.floor(pnjs.pose), dir); // appel de la fonction qui dessine le PNJ, en transformant le chiffre de la pose en entier

	changeDirectionPnj(); // appel de la fonction du fichier deplacement.js

	changeSensPnj(pnjs);

	deplacementPnj(pnjs); // appel de la fonction de déplacement du PNJ 

	changePose(pnjs, pnjs.nbPoses, pnjs.vPose);// appel de la fonction qui passe d'une pose à l'autre

	rencontre(pnjs, pnjs.texte); // appel de la fonction du fichier collision-pnj.js
}

/***** fonction pour animer les différents PNJs (appelée dans la fonction animeTout du fichier main.js) *****/
function animePnjs(context) {

	animePnj(pnj, context, pnjDir);

	animePnj(ennemi, context, ennemiDir);

}

var myReq;

/***** fonction pour lancer les animations *****/
function animeTout() {
	context[2].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas du joueur
	context[3].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des PNJs

	animePerso(joueur, context[2]);

	animePnjs(context[3]);

	 myReq = requestAnimationFrame(animeTout);//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}




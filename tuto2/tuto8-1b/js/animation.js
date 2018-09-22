let myReq; // variable pour la fonction requestAnimationFrame qui permet l'animation

let touche = "";

let touchesDeplace = ["37","38","39","40"]; // tableau des touches du pavé directionnel

function persoBouge(e) { // fonction qui sera appelée lors de l'évènement que constitue l'appui sur une touche (appelée dans la fonction ecranJeu du fichier ecrans.js)

	//déplacements du personnage en fonction des touches

	for (let i=0; i<touchesDeplace.length; i++) { // on parcourt le tableau des touches du pavé directionnel

		deplacement(joueur1, e, touchesDeplace[i]); // appel de la fonction de déplacement lors de l'appui sur les touches (fichier deplacement.js)
	}

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(joueur1, joueur1.nbPoses, joueur1.vPose); // appel de la fonction qui passe d'une pose à l'autre pour simuler le mouvement (fichier animation.js)
}

function deplacement(joueur, e, touche) { // fonction gérant le déplacement du joueur en fonction des touches de déplacement sur le clavier (appelée dans clavier.js)

	console.log(joueur1.vx);
	switch(touche) { // on va passer en revue les différentes possibilités de touche
		case "37": // Dans le cas de la touche gauche
			sens = 1; // donne le sens du personnage
			vitesse = -joueur1.vx; // vitesse négative pour aller à gauche
			direct = 2; // 3ème ligne de la spritesheet
			break;
		case "39": // touche droite
			sens = -1;
			vitesse = joueur1.vx; // vitesse positive pour aller à droite
			direct = 1; // 2ème ligne de la spritesheet
			break;
		case "38": // touche haut
			sens = 1;
			vitesse = -joueur1.vx; // vitesse négative pour aller en haut
			direct = 3; // 4ème ligne de la spritesheet
			break;
		case "40": // touche bas
			sens = -1;
			vitesse = joueur1.vx; // vitesse positive pour aller en bas
			direct = 0; // 1ère ligne de la spritesheet
			break;
	}

 	if(e.keyCode == touche) { // si la touche en paramètre est pressée
		
		if(touche==37 || touche==39) { joueur.posX += vitesse; dir = direct;} // changement de la coordonnée x et personnage avec le bon profil 
		if(touche==38 || touche==40) { joueur.posY += vitesse; dir = direct; } // changement de la coordonnée y et personnage de face ou de dos selon la touche
	} 

}

/*** fonction gérant le déplacement horizontal du PNJ (appelée dans le fichier animation.js) ***/
function deplacementPnj(pnj) {
	pnj.posX2 += pnj.v; // le perso avance horizontalement selon la vitesse indiquée

}

/*** fonction où le personnage parcourt la distance depuis le point de départ et revient en arrière au niveau du point d'arrivée (appelée dans le fichier animation.js) ***/
function changeSensPnj(pnjs) {
	if (pnjs.posX2 < pnjs.departX) { // si le perso est à gauche du point de départ
		pnjs.v = Math.abs(pnjs.v); // rend la vitesse positive

	}

	if (pnjs.posX2 > pnjs.arriveeX - pnjs.largeur) { // si le perso dépasse le point d'arrivée
		pnjs.v=-Math.abs(pnjs.v); // rend la vitesse négative

	}
}

/*** fonction où le personnage se retourne quand il parvient au point d'arrivée ou au point de départ (appelée dans le fichier animation.js) ***/
function changeDirectionPnj() {

	if (ennemi.posX2 < ennemi.departX) {

		ennemiDir=1; // le perso regarde vers la droite
	}

	if (pnj.posX2 < pnj.departX) {

		pnjDir=1; // le perso regarde vers la droite
	}


	if (ennemi.posX2 > ennemi.arriveeX - ennemi.largeur) {

		ennemiDir=2; // le perso regarde vers la droite
	}

	if (pnj.posX2 > pnj.arriveeX - pnj.largeur) {

		pnjDir=2; // le perso regarde vers la droite
	}
}

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
function animePerso(joueur1, context) {
	dessinePerso(joueur1, context, joueur1.posX, joueur1.posY, joueur1.largeur, joueur1.hauteur, Math.floor(joueur1.pose), dir); // appel de la fonction qui dessine le joueur, en transformant le chiffre de la pose en entier

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

/***** fonction pour lancer les animations *****/
function animeTout() {
	context[2].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas du joueur
	context[3].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des PNJs

	animePerso(joueur1, context[2]);

	animePnjs(context[3]);

	 myReq = requestAnimationFrame(animeTout);//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde
}




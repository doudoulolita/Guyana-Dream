/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePerso(x, y, pose, dir) {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	context.drawImage(joueur, largeurPerso*pose, hauteurPerso*dir, largeurPerso, hauteurPerso,  x, y, largeurPerso, hauteurPerso);
}

/*** fonction gérant la direction du déplacement du personnage ***/
function deplacementPerso() {
	x += vx; // le perso avance horizontalement selon la vitesse indiquée

	inverseDeplacement(); // si les bords sont  atteints, cette fonction inverse le déplacement
	changeDirectionBords(); // si les bords sont atteints, cette fonction change le sens du personnage
}

/* fonction gérant le changement de sens du personnage près de chaque bord */
function changeDirectionBords() {
	if (x >= largeurCanvas - (largeurPerso*1.5)) {
		dir =2; // on change la direction quand le perso s'approche du bord droit
	}
	if (x <= largeurPerso*0.5) {
		dir =1; // on change la direction quand le perso s'approche du bord gauche
	}
}

/* fonction gérant les changements de direction du personnage près des bords */
function inverseDeplacement() {
	// condition pour éviter que le perso ne dépasse sur les bords du canvas. On enlève la largeur du perso à droite sinon, il déborde du cadre.
	if (x > largeurCanvas - largeurPerso || x < 0) {
		vx *= -1; // quand les bords sont atteints, on inverse la vitesse
	}
}


/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePose() {
	pose += vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (pose >= nbPoses) pose -= (nbPoses-1); // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}


/***** fonction pour animer le personnage *****/
function animePerso() {
	dessinePerso(x, y, Math.floor(pose), dir); // appel de la fonction qui dessine le personnage, en transformant le chiffre de la pose en entier
	deplacementPerso(); // appel de la fonction de déplacement du personnage
	changePose(); // appel de la fonction d'animation du personnage    
	requestAnimationFrame(animePerso); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}

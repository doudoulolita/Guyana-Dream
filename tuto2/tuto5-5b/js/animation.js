/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePerso(x, y, pose, dir) {
	context2.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	context2.drawImage(joueur, largeurPerso*pose, hauteurPerso*dir, largeurPerso, hauteurPerso,  x, y, largeurPerso, hauteurPerso);
}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePose() {
	pose += vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (pose >= nbPoses) pose -= (nbPoses-1); // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}

/***** fonction pour animer le personnage *****/
function animePerso() {
	dessinePerso(x, y, Math.floor(pose), dir); // appel de la fonction qui dessine le personnage, en transformant le chiffre de la pose en entier
	bloqueBords();
	//si on a pas retourné false plus haut, on a le droit de se situer ici avec le personnage. On renvoie donc true.
	requestAnimationFrame(animePerso); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}

/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePerso(x, y, pose, dir) {
	context2.clearRect(0, 0, canvasLargeur, canvasHauteur);
	context2.drawImage(joueur, largeurPerso*pose, hauteurPerso*dir, largeurPerso, hauteurPerso,  x, y, largeurPerso, hauteurPerso);
}

/***** fonction permettant le rafraichissement des animations du personnage *****/
function animePerso() {
	dessinePerso(x, y, Math.floor(pose), dir); // appel de la fonction qui dessine le personnage, en transformant le chiffre de la pose en entier
	if(x==0 || y==0){// si on ne bouge pas
		pose=0;
	}

	requestAnimationFrame(animePerso); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}

function deplacementPerso() {
	haut = y-v;
	bas = y+v;
	gauche = x-v;
	droite= x+v;
}

function changePose() {
		pose++; // on ajoute une étape au pas du perso
		if (pose>nbPoses){pose=1;}// si on a fini toutes les étapes on revient au premier pas
}

function marchePerso() {
	deplacementPerso();
	changePose();
	bloqueSortieCanvas(minX, minY, maxX, maxY);
}



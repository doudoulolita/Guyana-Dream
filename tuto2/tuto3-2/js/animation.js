/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePerso(x, y) {
	context.clearRect(0, 0, largeurCanvas, hauteurCanvas);
	context.drawImage(joueur, 0, 0, largeurPerso, hauteurPerso,  x, y, largeurPerso, hauteurPerso);
}


/***** fonction pour animer le personnage *****/
function animePerso() {

	dessinePerso(x, y); // appel de la fonction qui dessine le personnage, en transformant le chiffre de la pose en entier

	requestAnimationFrame(animePerso); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}

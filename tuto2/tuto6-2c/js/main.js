

// La fonction qui initialise le tout
function init() {
	/* variables */
	cartes = [carte1, carte2];

	numCarte = 1;
	
	/* appel des fonctions */

	recupCanvas(); // appel de la fonction de récupération des canvas dans jeu.js

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	dessineCarte(); // dessin de la carte

	ajouteTexte(titreJeu, 20, 10 , hauteurCanvas-10);

	animePerso(joueur);

	animePnj(pnj);

	// Lorsqu'une touche est appuyée, lance une fonction
	document.onkeydown = persoBouge;

	ajouteTexte(titreInventaire, 14, largeurCanvas-(3*tailleTuile)+20,20);

	ajouteTexte(nbPoints+ " points", 12, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte.

	comptePoints();	

	compteTemps();

	gereEnergie();

	chrono(); // on lance la fonction qui termine le jeu

}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

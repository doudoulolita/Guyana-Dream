

// La fonction qui initialise le tout
function init() {
	/* variables */
	cartes = [carte1, carte2]; // les cartes sont dans le fichier carte.js

	numCarte = 1; // première carte au début du jeu

	/* appel des fonctions */

	recupCanvas(); // appel de la fonction de récupération des canvas dans jeu.js

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	canvas[4].addEventListener("click", clicCanvas, false);	// vérifie si on clique sur un des singes (fonction dans choix-perso.js)

	dessineJoueurs(); // appel de la fonction dessinant les joueurs du fichier choix-perso.js

	dessineCarte(); // appel de la fonction de dessin de la carte (carte.js)

	ajouteTexte(titreJeu, 20, 10 , hauteurCanvas-10); // appel de la fonction du fichier texte.js pour le titre du jeu

	animePnj(pnj); // appel de la fonction d'animation du pnj (fichier animation.js)

	// Lorsqu'une touche est appuyée, lance une fonction
	document.onkeydown = persoBouge; // si on appuie sur une touche, appel de la fonction du fichier clavier.js

	ajouteTexte(titreInventaire, hauteurTitre, largeurCanvas-(3*tailleTuile)+20,20); // appel de la fonction du fichier texte.js pour le titre de l'inventaire

	ajouteTexte(nbPoints+ " points", 12, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte (texte.js)

	comptePoints();	// appel de la fonction du fichier collision-objet.js pour compter les poins qu'apportent les objets

	compteTemps(); // appel de la fonction du fichier temps.js qui affiche et décompte celui-ci (temps.js)

	gereEnergie(); // affiche et décompte l'énergie et la vitesse (temps.js)

	chrono(); // on lance la fonction qui termine le jeu (voir temps.js)
}

/***** lorsque la fenêtre est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };

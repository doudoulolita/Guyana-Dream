

// La fonction qui initialise le tout
function init() {
	/* variables */
	cartes = [carte1, carte2]; // les cartes sont dans le fichier carte.js

	numCarte = 1; // première carte au début du jeu

	clic=0;

	/* appel des fonctions */

	recupCanvas(); // appel de la fonction de récupération des canvas dans jeu.js

	ecranAccueil();

	ecranJeu();

	chrono(); // on lance la fonction qui terminera le jeu (voir temps.js)
}

/***** lorsque la fenêtre est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };

// La fonction qui initialise le tout
function init() {

	couleurFond(couleurfondCarte, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond (dans jeu.js)
	dessineCarte(); // dessin de la carte dans le fichier carte.js

	animePerso(); // fonction déplaçant et animant le joueur dans animation.js

	// Lorsqu'une touche est appuyée, lance une fonction
	document.onkeydown = persoBouge;

	ajouteTexte(titreJeu, 20, 10 , hauteurCanvas-10);
	ajouteTexte(titreInventaire, 14, largeurCanvas-(3*tailleTuile)+20,20);

	compteTemps(); // fonction définie dans le fichier temps.js
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

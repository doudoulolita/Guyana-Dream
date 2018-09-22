// La fonction qui initialise le tout
function init() {

	couleurFond(couleurfondCarte); // appel de la fonction qui colorie le fond (dans jeu.js)
	dessineCarte(); // dessin de la carte dans le fichier carte.js

	animePerso(); // fonction déplaçant et animant le joueur dans animation.js

	// Lorsqu'une touche est appuyée, lance une fonction définie dans le fichier clavier.js
	document.onkeydown = persoBouge;

	ajouteTexte(texte1, 20, 10 , hauteurCanvas-10);
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

// La fonction qui initialise le tout
function init() {

	couleurFond(couleurfondCarte); // appel de la fonction qui colorie le fond (dans jeu.js)
	dessineCarte(); // dessin de la carte dans le fichier carte.js

	afficheTuileInterdite(numTuile1, posXTuile, posYTuile); // appel de la fonction affichant une tuile à un endroit du canvas, en fonction des coordonnées placées en variables plus haut.

	afficheTuileInterdite(numTuile2, posXTuile2, posYTuile2); // nouvel appel fonction pour afficher une autre tuile à un endroit du canvas, en fonction d'autres coordonnées placées en variables plus haut.

	animePerso(); // fonction déplaçant et animant le joueur dans animation.js

	// Lorsqu'une touche est appuyée, lance une fonction définie dans le fichier clavier.js
	document.onkeydown = persoBouge;
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

// La fonction qui initialise le tout
function init() {
	afficheImage(posXTuile, posYTuile); // appel de la fonction affichant l'image à un endroit du canvas, en fonction des coordonnées placées en variables plus haut.

	afficheImage(posXTuile2, posYTuile2); // nouvel appel fonction pour afficher une autre image à un endroit du canvas, en fonction d'autres coordonnées placées en variables plus haut.

	animePerso(); // fonction déplaçant et animant le joueur dans animation.js

	// Lorsqu'une touche est appuyée, lance une fonction définie dans le fichier clavier.js
	document.onkeydown = persoBouge;
}

window.onload = init;

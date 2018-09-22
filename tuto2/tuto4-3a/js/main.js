 
// La fonction qui initialise le tout
function init() {

	afficheImage(imageX, imageY); // appel de la fonction affichant l'image à un endroit du canvas, en fonction de la largeur future des tuiles du jeu.

	animePerso(); // fonction déplaçant et animant le joueur dans animation.js

	// Lorsqu'une touche est appuyée, lance une fonction définie dans le fichier clavier.js
	document.onkeydown = persoBouge;
}

window.onload = init; // lance la fonction init lorsque la page est chargée

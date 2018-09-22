// La fonction qui initialise le tout
function init() {

	recup2Canvas(); // appel de la fonction pour récupérer les 2 canvas dans jeu.js

	couleurFond(context1, couleurfondCarte); // appel de la fonction qui remplit le canvas de couleur

	afficheImage(context1, imageX, imageY); // appel de la fonction affichant l'image des fougères à un endroit du canvas 1, en fonction de sa largeur et de sa hauteur (dans image.js)

	animePerso(pnj); // fonction déplaçant et animant le PNJ dans animation.js
}

/***** lorsque l'image est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };

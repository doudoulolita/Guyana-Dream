// La fonction qui initialise le tout
function init() {

	recup2Canvas(); // appel de la fonction pour récupérer le canvas

	couleurFond(context1, couleurfondCarte); // appel de la fonction qui remplit le canvas 1 de couleur

	afficheImage(context2,largeurImage, hauteurImage*2); // appel de la fonction affichant l'image à endroit précis du canvas 2, en fonction de la largeur future des tuiles du jeu.
}

/***** lorsque l'image est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };

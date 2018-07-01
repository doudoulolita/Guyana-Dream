// La fonction qui initialise le tout
function init() {

	recup2Canvas(); // appel de la fonction pour récupérer le canvas

	couleurFond(context1, couleurfondCarte); // appel de la fonction qui remplit le canvas de couleur

	afficheImage(context1, imageX, imageY); // appel de la fonction affichant l'image des fougères à un endroit du canvas 1, en fonction de sa largeur et de sa hauteur.

	// Fonction permettant l'animation et le déplacement du PNJ, sur le canvas 2
	animePnj();
}

/***** lorsque l'image est chargée, la fonction init() est appelée *****/
window.onload = function() { init() };

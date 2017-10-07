// La fonction qui initialise le tout
function init() {

	recupCanvas('tuiles'); // récupération du canvas des tuiles
	canvas.width="192";
	couleurFond(couleurfondCarte);
	dessineCarte(); // dessin de la carte
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

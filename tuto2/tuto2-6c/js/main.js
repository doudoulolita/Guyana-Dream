// La fonction qui initialise le tout
function init() {

	recupCanvas(); // récupération du canvas des tuiles
	couleurFond(couleurfondCarte); // appel de la fonction qui colorie le fond
	dessineCarte(); // dessin de la carte
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

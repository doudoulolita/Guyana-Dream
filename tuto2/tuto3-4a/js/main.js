// La fonction qui initialise le tout
function init() {

	recupCanvas(); // appel de la fonction pour récupérer le canvas

	// Lorsqu'une touche est appuyée, lance la fonction PersoBouge()
	animePerso();
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

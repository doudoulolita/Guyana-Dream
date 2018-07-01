// La fonction qui initialise le tout
function init() {

	recupCanvas(); // appel de la fonction pour récupérer le canvas

	afficheDirections();

	// Lorsqu'une touche est appuyée, lance la fonction PersoBouge()
	document.onkeydown = affichePosesPerso;
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

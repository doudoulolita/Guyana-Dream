// La fonction qui initialise le tout
function init() {

	recupCanvas(); // récupération du canvas

	animePerso();

	document.onkeydown = persoBouge; // animation du personnage
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

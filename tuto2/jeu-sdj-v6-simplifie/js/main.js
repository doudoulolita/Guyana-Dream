// La fonction qui initialise le tout
function init() {

	couleurFond(couleurfondCarte);
	dessineCarte(); // dessin de la carte
	// Lorsqu'une touche est appuyée, lance une fonction
	animePerso(); 
	document.onkeydown = touchesClavier;
	
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/

window.onload = init;

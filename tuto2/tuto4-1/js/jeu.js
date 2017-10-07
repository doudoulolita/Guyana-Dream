/** Récupération du canvas **/
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

largeurCanvas = canvas.width; // récupère la largeur du canvas
hauteurCanvas = canvas.height; // récupère la hauteur du canvas

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/

 
// La fonction qui initialise le tout
function init() {
	animePerso(); 

	// Lorsqu'une touche est appuyée, lance la fonction PersoBouge()
	document.onkeydown = persoBouge;

}

window.onload = init;

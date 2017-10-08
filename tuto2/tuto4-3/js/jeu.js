/* Récupération du canvas pour pouvoir dessiner dessus */


// Récupére les canvas à partir de leur id
canvas1 = document.getElementById("tuiles");

canvas2 = document.getElementById("persos");



// Définit les dimensions du canvas
largeurCanvas = canvas1.width;
hauteurCanvas = canvas1.height;

context1 = canvas1.getContext('2d');

context2 = canvas2.getContext('2d');

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/

 
// La fonction qui initialise le tout
function init() {
	animePerso(); 

	// Lorsqu'une touche est appuyée, lance une fonction
	document.onkeydown = persoBouge;

}

window.onload = init;

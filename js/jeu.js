/* variables */

// on définit la couleur de fond de la carte
var couleurfondCarte ="#5b6634";

// indique quelle image utiliser pour créer la carte
var cheminTileset = "tilesets/tileset2.png";

// indique la taille de chaque tuile
var tailleTuile = 32; // largeur de la tuile

/* données changeantes */

// indique quel fichier utiliser pour avoir la tableau des éléments de la carte
var fichierCarte = "maps/map.json" // dans la carte json sont indiqués à quel endroit se trouveront les tuiles sur les canvas

var numNiveau = 1;

var canvas = "";//canvas[0] contient le premier canvas et canvas[6] le cinquième
var context = []; // initialise les contextes

var canvasLargeur = 0;
var canvasHauteur = 0;

/* récupération des canvas et des contexts */

function recupCanvas() {
	// récupère tous les canvas sur lesquels on va dessiner
	canvas = document.querySelectorAll('canvas');//canvas[0] contient le premier canvas et canvas[6] le cinquième

	// Largeur et hauteur du canvas 1 (les canvas commencent à 0)
	canvasLargeur = canvas[0].width;
	canvasHauteur = canvas[0].height;

	// récupération des contexts qui permettent de dessiner sur les canvas
	for (i=0; i<canvas.length; i++) {//pourquoi faire une boucle ? car plus tard, nous rajouterons encore des canvas par dessus! on n'aura donc pas besoin de réadapter le code
		context[i] = canvas[i].getContext('2d');//context[0] contient le context du premier canvas et context[6] celui du septième
	}
}

/* fonction pour la couleur de fond */

// on créée une fonction pour dessiner le fond de la carte dans une couleur unie
function couleurFond(couleur) {
	context[0].fillStyle=couleur;	
	context[0].fillRect(0,0, canvasLargeur, canvasHauteur);
	context[0].fill();
}


var cheminTileset = "tileset-mini1.png"; // chemin de l'image servant de tileset
var LargeurTuile = 32; // largeur de la tuile

var tileset = new Image(); // crée une nouvelle image
tileset.src = cheminTileset;// donne le chemin de l'image dont la varaible est décalrée plus haut.

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
var carte1 = [
[ 1,  1,  1,  1,  1,  1],
[ 2,  2,  2,  2,  2,  2],
[ 1,  1,  4,  1,  1,  1],
[ 1,  1,  1,  1,  1,  1],
[ 1,  1,  3,  1,  4,  1],
[ 2,  2,  2,  2,  2,  2],
];


var nbColonnesTileset = tileset.width/LargeurTuile;//nombre de tuiles sur la largeur du tileset 
var nbLignesTilesets = tileset.height/LargeurTuile;//nombre de tuiles sur la hauteur du tileset

function calculTileset(num) {
	ligneTileset = Math.ceil(num/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

	colonneTileset = num - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile 
}

function dessineUneTuile(num, posX, posY) {
	ctx.drawImage(tileset, (colonneTileset-1)*LargeurTuile, (ligneTileset-1)*LargeurTuile, LargeurTuile, LargeurTuile, posX, posY, LargeurTuile, LargeurTuile);//on dessine la tuile à l'endroit voulu
}

function dessineTuiles(num, posX, posY) {//en paramètre de la fonction : numéro de la tuile à dessiner,  coordonnées où on va la dessiner et context pour choisir sur quel canvas nous allons la dessiner

	calculTileset(num);
	dessineUneTuile(num, posX, posY);

}

function dessineLigneCarte(ligne) {
		for(var i=0; i<carte1[ligne].length; i++) {//map[j] représente maintenant une ligne de la carte	
			dessineTuiles(carte1[ligne][i], LargeurTuile*i, LargeurTuile*ligne)// carte[j][i] représente le numéro de la tuile de la j ème ligne et de la i ème colonne qu'on positionne en ajoutant une largeur de tuile à chaque fois en abcisse et une largeur de tuile à chaque fois en ordonnée
		}
}

/* fonction permettant de dessiner une à une chaque ligne de la map */
function dessineCarte() {
	canvas.width="192";
	couleurFond(couleur);
	dessineLigneCarte(0);
	dessineLigneCarte(1);
	dessineLigneCarte(2);
	dessineLigneCarte(3);
	dessineLigneCarte(4);
	dessineLigneCarte(5);
}

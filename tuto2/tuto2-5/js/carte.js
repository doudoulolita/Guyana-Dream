var cheminTileset = "tileset-mini.png"; // chemin de l'image servant de tileset
var tailleTuile = 32; // largeur de la tuile

var tileset = new Image(); // crée une nouvelle image
tileset.src = cheminTileset;// donne le chemin de l'image dont la varaible est décalrée plus haut.

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
var carte = [ 1,  1,  1,  3,  1,  7];

var nbColonnesTileset = tileset.width/tailleTuile;//nombre de tuiles sur la largeur du tileset 
var nbLignesTilesets = tileset.height/tailleTuile;//nombre de tuiles sur la hauteur du tileset

function calculTileset(num) {
	ligneTileset = Math.ceil(num/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

	colonneTileset = num - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile 
}

function dessineTuiles(num, posX, posY) {//en paramètre de la fonction : numéro de la tuile à dessiner,  coordonnées où on va la dessiner et context pour choisir sur quel canvas nous allons la dessiner

	calculTileset(num); // on appelle la fonction de calcul

	context.drawImage(tileset, (colonneTileset-1)*tailleTuile, (ligneTileset-1)*tailleTuile, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile);//on dessine la tuile à l'endroit voulu
}

function dessineLigneCarte() {
	for(var i=0; i<carte.length; i++) {//map[j] représente maintenant une ligne de la carte	
		dessineTuiles(carte[i], tailleTuile*i, 0);// carte[i] donne le numéro de la tuile du tableau carte, positionné en augmentant d'une valeur "tailletuile" à chaque itération, à la postion verticale 0
	}
}

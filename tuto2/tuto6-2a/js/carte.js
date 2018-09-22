let cheminTileset = ""; // chemin de l'image servant de tileset
let tailleTuile = 32; // largeur de la tuile

let tileset = new Image(); // crée une nouvelle image
cheminTileset = "tilesets/tileset2.png"; // chemin de l'image servant de tileset
tileset.src = cheminTileset;// donne le chemin de l'image dont la variable est déclarée plus haut.

let cartes = [];

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
let carte1 = [
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 14,  2,  2,  2,  2,  2,  2,  2,  2,  5,  5,  5],
		[ 1,  1,  4,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  11, 12, 1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  7,  1,  1,  8,  1,  1,  1,  1, 10,  1,  1,  1,  1,  15, 16, 1,  1,  5,  5,  5],
		[ 2,  2,  2,  6,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  8,  1,  5,  5,  5],
		[ 1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1, 10,  1,  1,  1, 11, 12,  1,  1,  1, 13,  2,  2,  6,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1, 10,  1,  1,  1, 15, 16,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1, 10,  1,  1,  1,  1,  3,  1,  1,  1,  1,  1,  1, 10,  1,  1,  4,  1,  1,  5,  5,  5],
		[ 1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
	];



let nbColonnesTileset = tileset.width/tailleTuile;//nombre de tuiles sur la largeur du tileset 
let nbLignesTilesets = tileset.height/tailleTuile;//nombre de tuiles sur la hauteur du tileset

function calculTileset(num) {
	ligneTileset = Math.ceil(num/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

	colonneTileset = num - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile 
}

function dessineUneTuile(num, posX, posY) {
	context1.drawImage(tileset, (colonneTileset-1)*tailleTuile, (ligneTileset-1)*tailleTuile, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile);//on dessine la tuile à l'endroit voulu
}

function dessineTuiles(num, posX, posY) {//en paramètre de la fonction : numéro de la tuile à dessiner,  coordonnées où on va la dessiner et context pour choisir sur quel canvas nous allons la dessiner
	calculTileset(num);
	dessineUneTuile(num, posX, posY);
}

function dessineCarte() {
	for (let j=0; j<cartes[numCarte-1].length; j++) {//map représente toute la carte
		for(let i=0; i<cartes[numCarte-1][j].length; i++) {//map[j] représente maintenant une ligne de la carte	
			dessineTuiles(cartes[numCarte-1][j][i], tailleTuile*i, tailleTuile*j)// carte[j][i] représente le numéro de la tuile de la j ème ligne et de la i ème colonne qu'on positionne en ajoutant une largeur de tuile à chaque fois en abcisse et une largeur de tuile à chaque fois en ordonnée
		}
	}
}

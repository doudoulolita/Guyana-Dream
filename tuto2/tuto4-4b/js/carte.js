let cheminTileset = ""; // chemin de l'image servant de tileset

let tileset = new Image(); // crée une nouvelle image
cheminTileset = "tileset-mini.png"; // chemin de l'image servant de tileset
tileset.src = cheminTileset;// donne le chemin de l'image dont la varaible est décalrée plus haut.

let tailleTuile = 32; // largeur de la tuile

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
let carte = [
[ 1,  1,  1,  1,  1,  1],
[ 2,  2,  2,  2,  2,  2],
[ 1,  1,  4,  1,  1,  1],
[ 1,  1,  1,  1,  1,  1],
[ 1,  1,  3,  1,  7,  1],
[ 2,  2,  2,  6,  1,  1],
];

let nbColonnesTileset = tileset.width/tailleTuile;//nombre de tuiles sur la largeur du tileset 
let nbLignesTilesets = tileset.height/tailleTuile;//nombre de tuiles sur la hauteur du tileset

let ligne = 0;
let colonne = 0;

function calculTileset(num) {
	ligneTileset = Math.ceil(num/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

	colonneTileset = num - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile 
}

function dessineUneTuile(num, posX, posY) {
	context1.drawImage(tileset, (colonneTileset-1)*tailleTuile, (ligneTileset-1)*tailleTuile, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile);//on dessine la tuile à l'endroit voulu
}

function dessineTuiles(num, posX, posY) {//en paramètre de la fonction : numéro de la tuile à dessiner,  coordonnées où on va la dessiner
	calculTileset(num);
	dessineUneTuile(num, posX, posY);
}

function dessineCarte() {
	for (let j=ligne; j<carte.length; j++) {//On parcourt chaque ligne de la carte
		for(let i=colonne; i<carte[j].length; i++) {//on parcourt chaque numéro de la ligne (soit les colonnes de la carte)
			dessineTuiles(carte[j][i], tailleTuile*i, tailleTuile*j)// carte[j][i] représente le numéro de la tuile de la j ème ligne et de la i ème colonne qu'on positionne en ajoutant une largeur de tuile à chaque fois en abcisse et une largeur de tuile à chaque fois en ordonnée
		}
	}
}


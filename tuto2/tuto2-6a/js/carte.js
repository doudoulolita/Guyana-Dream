let tileset = new Image(); // crée une nouvelle image

let cheminTileset = "tileset-mini1.png"; // chemin de l'image servant de tileset
tileset.src = cheminTileset;// donne le chemin de l'image dont la variable est déclarée plus haut.

let tailleTuile = 32; // largeur de la tuile

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
let carte = [
[ 1,  1,  1,  3,  1,  7],
[ 2,  2,  2,  2,  2,  2],
[ 1,  1,  4,  1,  1,  1],
[ 1,  1,  1,  1,  1,  1],
[ 1,  1,  3,  1,  4,  1],
[ 2,  2,  2,  2,  2,  2],
];

let nbColonnesTileset = tileset.width/tailleTuile;//nombre de tuiles sur la largeur du tileset 
let nbLignesTilesets = tileset.height/tailleTuile;//nombre de tuiles sur la hauteur du tileset

let colonne = 0; // la première case d'une ligne est sur la colonne 0

function calculTileset(num) {
	ligneTileset = Math.ceil(num/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

	colonneTileset = num - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile 
}

function dessineUneTuile(num, posX, posY) {
	context.drawImage(tileset, (colonneTileset-1)*tailleTuile, (ligneTileset-1)*tailleTuile, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile);//on dessine la tuile à l'endroit voulu
}

function dessineTuiles(num, posX, posY) {//en paramètre de la fonction : numéro de la tuile à dessiner,  coordonnées où on va la dessiner et context pour choisir sur quel canvas nous allons la dessiner

	calculTileset(num);
	dessineUneTuile(num, posX, posY);

}

function dessineLigneCarte(ligne) {
		for(let i=colonne; i<carte[ligne].length; i++) {//pour chaque tuile de la ligne
			dessineTuiles(carte[ligne][i], tailleTuile*i, tailleTuile*ligne)// carte[j][i] représente le numéro de la tuile de la j ème ligne et de la i ème colonne qu'on positionne en ajoutant une largeur de tuile à chaque fois en abcisse et une largeur de tuile à chaque fois en ordonnée
		}
}

/* fonction permettant de dessiner une à une chaque ligne de la map */
function dessineCarte() {
	dessineLigneCarte(0);
	dessineLigneCarte(1);
	dessineLigneCarte(2);
	dessineLigneCarte(3);
	dessineLigneCarte(4);
	dessineLigneCarte(5);
}

dessineCarte(); // dessin de la carte
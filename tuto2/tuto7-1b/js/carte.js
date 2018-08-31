var cheminTileset = ""; // initialise le chemin de l'image servant de tileset
var tailleTuile = 32; // largeur de la tuile

var tileset = new Image(); // crée une nouvelle image
cheminTileset = "tilesets/tileset2.png"; // chemin de l'image servant de tileset
tileset.src = cheminTileset;// donne le chemin de l'image dont la variable est déclarée plus haut.

var cartes = []; // initialise le tableau des cartes

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
var carte1 = [
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		[ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 14,  2,  2,  2,  2,  2,  2,  2,  2],
		[ 1,  1,  1,  1,  1,  1,  1,  4,  4,  4,  4,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4,  1, 10,  1,  1,  1,  1,  11, 12, 1,  1],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  8,  4,  1, 10,  1,  1,  1,  1,  15, 16, 1,  1],
		[ 2,  2,  2,  6,  1,  1,  1,  4,  4,  4,  1,  1, 10,  1,  1,  1,  1,  1,  1,  8,  1],
		[ 1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1],
		[ 1,  1,  1, 10,  1,  1,  1, 11, 12,  1,  1,  1, 13,  2,  2,  6,  1,  1,  1,  1,  1],
		[ 1,  1,  1, 10,  1,  1,  1, 15, 16,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1],
		[ 1,  1,  1, 10,  1,  1,  1,  1,  3,  1,  1,  1,  1,  7,  1, 10,  1,  1,  4,  1,  1],
		[ 1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1],
	];

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
var carte2 = [
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		[ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 14,  2,  2,  2,  2,  2,  2,  2,  2],
		[ 1,  3,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1, 21,  1],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  7,  1,  1, 10,  1,  1, 19, 20,  1,  1,  1,  1],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1, 23, 24,  1,  1,  1,  1],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1],
		[ 1,  1,  1,  1,  1,  1,  1, 19, 20,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1],
		[ 1, 19, 20,  1,  1,  1,  1, 23, 24,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1],
		[ 1, 23, 24,  1,  1,  1,  1,  1,  3,  1,  1,  1, 10,  1,  1,  1,  1,  8,  1,  1,  1],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1]
	];

var nbColonnesTileset = tileset.width/tailleTuile;//nombre de tuiles sur la largeur du tileset 
var nbLignesTilesets = tileset.height/tailleTuile;//nombre de tuiles sur la hauteur du tileset

function calculTileset(num) { // calcule la postion de la tuile en fonction de son numéro sur le tileset (appelée dans la fonction dessineTuiles)
	ligneTileset = Math.ceil(num/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

	colonneTileset = num - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile 
}

/* Dessin d'une tuile (appelée dans la fonction dessineTuiles) */
function dessineUneTuile(num, posX, posY) {
	context[0].drawImage(tileset, (colonneTileset-1)*tailleTuile, (ligneTileset-1)*tailleTuile, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile);//on dessine la tuile à l'endroit voulu
}

/* Dessine les tuiles en fonction de leur numéro et de leur position après calcul (appelée dans la fonction dessineCarte) */
function dessineTuiles(num, posX, posY) {//en paramètre de la fonction : numéro de la tuile à dessiner et  coordonnées où on va la dessiner
	calculTileset(num); //appel de la fonction qui calcule où se trouve une tuile en fonction de son numéro
	dessineUneTuile(num, posX, posY); // appel de la fonction qui dessine une tuile
}

/* fonction parcourant le tableau de la carte pour dessiner les tuiles (appelée dans la fonction changeCarte et dans le fichier ecran.js) */
function dessineCarte() {
	for (var j=0; j<cartes[numCarte-1].length; j++) {//cartes[numCarte-1] représente toute la carte
		for(var i=0; i<cartes[numCarte-1][j].length; i++) {//cartes[numCarte-1][j] représente maintenant une ligne de la carte	
			dessineTuiles(cartes[numCarte-1][j][i], tailleTuile*i, tailleTuile*j)// cartes[numCarte-1][j][i] représente le numéro de la tuile de la j ème ligne et de la i ème colonne qu'on positionne en ajoutant une largeur de tuile à chaque fois en abcisse et une largeur de tuile à chaque fois en ordonnée
		}
	}
}

/* fonction gérant le dessin d'une carte en fonction de son numéro dans le tableau des cartes (appelée dans collision-bords.js) */
function changeCarte() {
		context[0].clearRect(0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // efface le premier canvas		
		couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
		dessineCarte(numCarte); // dessine la carte en fonction de son numéro dans le tableau des cartes
		if (collision === 1) { // s'il y a eu collision avec le pnj
			bulleTexte(textePnj, pnj.posX2, pnj.posY2); // affiche le texte dans sa bulle
		}
}

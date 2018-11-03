var couleurfondCarte = "#5b6634"; // couleur de fond du jeu

/* fonction pour la couleur du fond (appelée dans le fichier ecran.js) */
function couleurFond(couleur, x, y, largeur, hauteur) { 
	/* on remplit tout le canvas de couleur */
	context.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context.fillRect(x, y, largeur, hauteur); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context.fill(); // on remplit !
}

/** Création de la carte **/

let tailleTuile = 32; // largeur de la tuile

let tileset = new Image(); // crée une nouvelle image
cheminTileset = "tileset-mini1.png"; // chemin de l'image servant de tileset
tileset.src = cheminTileset;// donne le chemin de l'image dont la variable est déclarée plus haut.

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
let carte1 = [ 1,  1,  1,  1,  2,  1];

/*** Fonctions pour dessiner la carte ***/

/* Dessine les tuiles en fonction de leur numéro et de leur position après calcul (appelée dans la fonction dessineCarte) */
function dessineTuiles(num, posX, posY) {//en paramètre de la fonction : numéro de la tuile à dessiner et  coordonnées où on va la dessiner
	let nbColonnesTileset = tileset.width/tailleTuile;//nombre de tuiles sur la largeur du tileset 

	ligneTileset = Math.ceil(num/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

	colonneTileset = num - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile
 
	context.drawImage(tileset, (colonneTileset-1)*tailleTuile, (ligneTileset-1)*tailleTuile, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile);//on dessine la tuile à l'endroit voulu
}

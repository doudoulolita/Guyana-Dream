var couleurfondCarte = "#5b6634"; // couleur de fond du jeu

/* fonction pour la couleur du fond (appelée dans le fichier ecran.js) */
function couleurFond(couleur, x, y, largeur, hauteur) { 
	/* on remplit tout le canvas de couleur */
	context[0].fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context[0].fillRect(x, y, largeur, hauteur); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context[0].fill(); // on remplit !
}

/** Création de la carte **/

let cheminTileset = ""; // initialise le chemin de l'image servant de tileset
let tailleTuile = 32; // largeur de la tuile

let tileset = new Image(); // crée une nouvelle image
cheminTileset = "tilesets/tileset2.png"; // chemin de l'image servant de tileset
tileset.src = cheminTileset;// donne le chemin de l'image dont la variable est déclarée plus haut.

/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
let carte1 = [
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


/* variables lorsqu'il y a plusieurs cartes */
let numCarte = 1; // première carte au début du jeu

let cartes = [carte1]; // initialise le tableau des cartes avec la carte1

/*** Fonctions pour dessiner la carte ***/

/* Dessine les tuiles en fonction de leur numéro et de leur position après calcul (appelée dans la fonction dessineCarte) */
function dessineTuiles(num, posX, posY) {//en paramètre de la fonction : numéro de la tuile à dessiner et  coordonnées où on va la dessiner
	let nbColonnesTileset = tileset.width/tailleTuile;//nombre de tuiles sur la largeur du tileset 

	ligneTileset = Math.ceil(num/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

	colonneTileset = num - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile
 
	context[0].drawImage(tileset, (colonneTileset-1)*tailleTuile, (ligneTileset-1)*tailleTuile, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile);//on dessine la tuile à l'endroit voulu
}

/* fonction parcourant le tableau de la carte pour dessiner les tuiles (appelée dans la fonction changeCarte et dans le fichier ecran.js) */
function dessineCarte() {
	for (j=0; j<cartes[numCarte-1].length; j++) {//On parcourt chaque ligne de la carte
		for(i=0; i<cartes[numCarte-1][j].length; i++) {//on parcourt chaque numéro de la ligne (soit les colonnes de la carte)
			dessineTuiles(cartes[numCarte-1][j][i], tailleTuile*i, tailleTuile*j)// cartes[numCarte-1][j][i] représente le numéro de la tuile de la j ème ligne et de la i ème colonne qu'on positionne en ajoutant une largeur de tuile à chaque fois en abcisse et une largeur de tuile à chaque fois en ordonnée
		}
	}
}


/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
let carte2 = [
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

function ajouteCarte() { // ajoute la carte 2 au tableau des cartes - appelée dans le fichier ecrans.js
	cartes.push(carte2);
}

/* fonction gérant le dessin d'une carte en fonction de son numéro dans le tableau des cartes (appelée dans collision-bords.js) */
function changeCarte(numCarte) {	
		context[0].clearRect(0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // efface le premier canvas		
		couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
		dessineCarte(numCarte); // dessine la carte en fonction de son numéro dans le tableau des cartes
		if (collision === 1) { // s'il y a eu collision avec le pnj
			bulleTexte(textePnj, pnj.posX2, pnj.posY2); // affiche le texte dans sa bulle
		}
}

/** Gestion des collisions avec des tuiles de la carte ***/

/* fonction gérant les changements de direction du personnage près des bords (appelée dans la fonction animePerso du fichier animation.js) */
function bloqueBords() {
	// condition pour éviter que le perso ne dépasse sur les bords du canvas. On enlève la largeur du perso à droite et la hauteur du perso en bas sinon, il déborde du cadre.
	if (joueur.posX < 0) { // si la position horizontale du joueur est inférieure à 0 (à gauche)
		joueur.posX = 1; // on fixe sa position
		numCarte=1; // on passe à la 1ère carte
		changeCarte(1); // on change de carte
	}
	if (joueur.posY < 0) { // si la position verticale du joueur est inférieure à 0 (en haut)
		joueur.posY = 1; // on fixe sa position
	}
	if (joueur.posX > carte1[0].length*tailleTuile - joueur.largeur) { // si le joueur dépasse de la carte à droite
		joueur.posX = carte1[0].length*tailleTuile - joueur.largeur; // quand les bords sont atteints à l'horizontale, on fixe sa position
		numCarte = 2; // on passe à la deuxième carte
		changeCarte(1); // on change de carte
	}
	if (joueur.posY > carte1.length*tailleTuile - joueur.hauteur) { // si le joueur est en bas de la carte
		joueur.posY = carte1.length*tailleTuile - joueur.hauteur; // quand les bords sont atteints à la verticale, on fixe sa position
	}
}

/* Pour chaque carte, on donne les numéros des tuiles qui bloquent le joueur '(arbres, par ex) */

let tuilesInterdites = [ 4, 11, 12, 15, 16, 19, 20, 23, 24 ]; // toutes les tuiles où on n'a pas le droit d'être sont répertoriées dans ce tableau

function bloque(posXTuile, posYTuile) { 

	// vérification de la position du personnage par rapport à la tuile interdite et changement de la position du joueur pour le bloquer (appelée dans la fonction bloqueTuiles) 

	if (joueur.posX + joueur.largeur > posXTuile && joueur.posX - tailleTuile < posXTuile && joueur.posY + joueur.hauteur > posYTuile && joueur.posY - tailleTuile < posYTuile) { // si les coordonnées du joueur sont situés au bord de la tuile interdite

		switch(dir) {
			case 1:
				joueur.posX -= 1; // on ajoute sens à x pour qu'il se décale horizontalement et sorte de la tuile 
				break;
			case 2:
				joueur.posX += 1; // on ajoute sens à x pour qu'il se décale horizontalement et sorte de la tuile 
				break;

	 		case 0: 
				joueur.posY -= 1; // on enlève 1 à y pour qu'il se décale verticalement et sorte de la tuile 
				break;
			case 3:
				joueur.posY += 1; // on ajoute sens à y pour qu'il se décale verticalementement et sorte de la tuile 
				break;
		}
	}
}

function bloqueTuiles() { // on va parcourir les cartes pour vérifier si on touche une tuile interdite (appelée dans la fonction animePerso du fichier animation.js)
	for (j=0; j<cartes[numCarte-1].length; j++) {//cartes[numCarte-1] représente toute la carte
		for(i=0; i<cartes[numCarte-1][j].length; i++) {//cartes[numCarte-1][j] représente maintenant une ligne de la carte	
			for (k=0; k<tuilesInterdites.length; k++) { // parcourt le tableau des tuiles interdites
				if (cartes[numCarte-1][j][i]== tuilesInterdites[k]) {bloque(tailleTuile*i, tailleTuile*j); } // si le numéro de la tuile est dans le tableau, on appelle la fonction de blocage
			} 
		}
	}
}

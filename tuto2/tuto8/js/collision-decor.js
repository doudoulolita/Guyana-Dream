/* Pour chaque carte, on donne les numéros des tuiles qui bloquent le joueur '(arbres, par ex) */

let tuilesInterdites = [ 4, 11, 12, 15, 16, 19, 20, 23, 24 ]; // toutes les tuiles où on n'a pas le droit d'être sont répertoriées dans ce tableau

let numTuileInterdite = 0; // numéro de la tuile interdite en fonction de sa place dans le tableau tuilesInterdites

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
	for (j=ligne; j<cartes[numCarte-1].length; j++) {//cartes[numCarte-1] représente toute la carte
		for(i=colonne; i<cartes[numCarte-1][j].length; i++) {//cartes[numCarte-1][j] représente maintenant une ligne de la carte	
			for (k=numTuileInterdite; k<tuilesInterdites.length; k++) { // parcourt le tableau des tuiles interdites
				if (cartes[numCarte-1][j][i]== tuilesInterdites[k]) {bloque(tailleTuile*i, tailleTuile*j); } // si le numéro de la tuile est dans le tableau, on appelle la fonction de blocage
			} 
		}
	}
}

/* Pour chaque carte, on donne les numéros des tuiles qui bloquent le joueur '(arbres, par ex) */

let tuilesInterdites = [
				[ 4, 11, 12, 15, 16], 
				[ 4, 19, 20, 23, 24]
			]; 

function bloque(posXTuile, posYTuile) {

	// vérification de la position du personnage par rapport à la tuile interdite

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

function bloqueTuiles() { // on va parcourir les cartes pour vérifier qi on touche une tuile interdite
	for (let j=0; j<cartes[numCarte-1].length; j++) {//cartes[numCarte-1] représente toute la carte
		for(let i=0; i<cartes[numCarte-1][j].length; i++) {//cartes[numCarte-1][j] représente maintenant une ligne de la carte	
			for (k=0; k<tuilesInterdites[numCarte-1].length; k++) { // parcourt le tableau des tuiles interdites
				if (cartes[numCarte-1][j][i]== tuilesInterdites[numCarte-1][k]) {bloque(tailleTuile*i, tailleTuile*j); } // si le numéro de la tuile est dans le tableau, on appelle la fonction de blocage
			} 
		}
	}
}

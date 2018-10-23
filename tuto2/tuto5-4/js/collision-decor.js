let tuilesInterdites = [4 , 11, 12, 15, 16]; // toutes les tuiles où on n'a pas le droit d'être sont répertoriées dans ce tableau

function bloque(posXTuile, posYTuile) {

	// vérification de la position du personnage par rapport à la tuile interdite, changement de coordonnées suivant la direction pour qu'il ne reste pas bloqué

	if (x + largeurPerso > posXTuile && x - tailleTuile < posXTuile && y + hauteurPerso > posYTuile && y - tailleTuile < posYTuile) {
		switch(dir) {
			case 1:
				x -= 1; // on ajoute sens à x pour qu'il se décale horizontalement et sorte de la tuile 
				break;
			case 2:
				x += 1; // on ajoute sens à x pour qu'il se décale horizontalement et sorte de la tuile 
				break;

	 		case 0: 
				y -= 1; // on enlève 1 à y pour qu'il se décale verticalement et sorte de la tuile 
				break;
			case 3:
				y += 1; // on ajoute sens à x pour qu'il se décale horizontalement et sorte de la tuile 
				break;
		}
	}
}

function bloqueTuiles() { // fonction appelée dans le fichier deplacements.js
	for (j=0; j<carte1.length; j++) {//On parcourt chaque ligne de la carte
		for(i=0; i<carte1[j].length; i++) {//on parcourt chaque numéro de la ligne (soit les colonnes de la carte)
			for (k=0; k<tuilesInterdites.length; k++) {// on parcourt le tableau des tuiles interdites
				if (carte1[j][i]== tuilesInterdites[k]) { bloque(tailleTuile*i, tailleTuile*j); }
			} 
		}
	}
}

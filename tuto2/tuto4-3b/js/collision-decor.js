function bloque(posXTuile, posYTuile) {

	// vérification de la position du personnage par rapport à la tuile interdite, changement de coordonnées suivant la direction pour qu'il ne reste pas bloqué

	if (x + largeurPerso > posXTuile && x - largeurImage < posXTuile && y + hauteurPerso > posYTuile && y - hauteurImage < posYTuile) {
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

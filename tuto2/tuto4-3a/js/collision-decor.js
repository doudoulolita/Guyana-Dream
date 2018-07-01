function bloque(touche) {
	if(touche==37 || touche==39) {

		if (x + largeurPerso > posXTuile && x - largeurImage < posXTuile && y + hauteurPerso > posYTuile && y - hauteurImage < posYTuile) {
			x = x + sens; // on ajoute sens à x pour qu'il se décale horizontalement et sorte de la tuile interdite
		}

		else { 
			x = x + vitesse; dir = direct;
		} // changement de la coordonnée x et personnage avec le bon profil
	}

	if(touche==38 || touche==40) {
		if (x + largeurPerso > posXTuile && x - largeurImage < posXTuile && y + hauteurPerso > posYTuile && y - hauteurImage < posYTuile) {
			y = y + sens; // on ajoute sens à y pour qu'il se décale verticalement et sorte de la tuile interdite
		}

		else { 
			y = y + vitesse; dir = direct;
		} // changement de la coordonnée y et personnage de face ou de dos selon la touche

	}
}

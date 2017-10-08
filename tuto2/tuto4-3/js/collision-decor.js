var touche = "";

function deplacementX(e, touche) {

	switch(touche) {
		case "37":
			sens = 1;
			vitesse = -vx;
			direct = 2;
			break;
		case "39":
			sens = -1;
			vitesse = vx;
			direct = 1;
			break;
	}

 	if(e.keyCode == touche) { // touche gauche : 
		if (x > posXTuile-largeurPerso && x < posXTuile+largeurImage && y > posYTuile-hauteurPerso && y < posYTuile+hauteurImage) {
			x = x + sens; // on ajoute sens à x pour qu'il se décale horizontalement et sorte de la tuile interdite
		}

		else { 
			x = x + vitesse; dir = direct;
		} // changement de la coordonnée x et personnage avec le bon profil
	}
}

function deplacementY(e, touche) {

	switch(touche) {
		case "38":
			sens = 1;
			vitesse = -vx;
			direct = 3;
			break;
		case "40":
			sens = -1;
			vitesse = vx;
			direct = 0;
			break;
	}

 	if(e.keyCode == touche) { 
		if (x > posXTuile-largeurPerso && x < posXTuile+largeurImage && y > posYTuile-hauteurPerso && y < posYTuile+hauteurImage) {
			y = y + sens; // on ajoute sens à y pour qu'il se décale verticalement et sorte de la tuile interdite
		}

		else { 
			y = y + vitesse; dir = direct;
		} // changement de la coordonnée y et personnage de face ou de dos selon la touche
	}
}




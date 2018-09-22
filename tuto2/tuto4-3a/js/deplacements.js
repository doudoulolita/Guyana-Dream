function deplacement(e, touche) {
	switch(touche) {
		case "37":
			sens = 1;
			vitesse = -vx;
			direct = 2;
			break;
		case "38":
			sens = 1;
			vitesse = -vx;
			direct = 3;
			break;
		case "39":
			sens = -1;
			vitesse = vx;
			direct = 1;
			break;
		case "40":
			sens = -1;
			vitesse = vx;
			direct = 0;
			break;
	}

 	if(e.keyCode == touche) {
		bloque(touche); // fonction définie dans le fichier collision-decor.js
	}
}






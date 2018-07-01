function deplacement(e, touche) {

	switch(touche) {
		case "37": // touche gauche
			sens = 1;
			vitesse = -vx; // vitesse négative pour aller à gauche
			direct = 2; // 3ème ligne de la spritesheet
			break;
		case "39": // touche droite
			sens = -1;
			vitesse = vx; // vitesse positive pour aller à droite
			direct = 1; // 2ème ligne de la spritesheet
			break;
		case "38": // touche haut
			sens = 1;
			vitesse = -vx;
			direct = 3; // 4ème ligne de la spritesheet
			break;
		case "40": // touche bas
			sens = -1;
			vitesse = vx;
			direct = 0; // 1ère ligne de la spritesheet
			break;
	}

 	if(e.keyCode == touche) { // si la touche en paramètre est pressée
		
		if(touche==37 || touche==39) { x += vitesse; dir = direct;} // changement de la coordonnée x et personnage avec le bon profil 
		if(touche==38 || touche==40) { y += vitesse; dir = direct; } // changement de la coordonnée y et personnage de face ou de dos selon la touche
	} 

}


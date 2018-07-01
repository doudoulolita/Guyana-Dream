function deplacement(joueur, e, touche) { // fonction gérant le déplacement du joueur en fonction des touches de déplacement sur le clavier

	switch(touche) { // on va passer en revue les différentes possibilités de touche
		case "37": // Dans le cas de la touche gauche
			sens = 1; // donne le sens du personnage
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
			vitesse = -vx; // vitesse négative pour aller en haut
			direct = 3; // 4ème ligne de la spritesheet
			break;
		case "40": // touche bas
			sens = -1;
			vitesse = vx; // vitesse positive pour aller en bas
			direct = 0; // 1ère ligne de la spritesheet
			break;
	}

 	if(e.keyCode == touche) { // si la touche en paramètre est pressée
		
		if(touche==37 || touche==39) { joueur.posX += vitesse; dir = direct;} // changement de la coordonnée x et personnage avec le bon profil 
		if(touche==38 || touche==40) { joueur.posY += vitesse; dir = direct; } // changement de la coordonnée y et personnage de face ou de dos selon la touche
	} 

}


var arriveeX = 4*tailleTuile; // le pnj va aller du bord du canvas jusqu'à cette position puis repartir en sens inverse

/*** fonction gérant le déplacement du personnage ***/
function deplacementPnj(pnj) {
	pnj.posX2 += pnj.v; // le perso avance horizontalement selon la vitesse indiquée
}

/*** fonction où le personnage parcourt la distance depuis le point de départ et revient en arrière au niveau du point d'arrivée ***/
function changeDirectionPnj(pnj, depart, arrivee) {
	if (pnj.posX2 < depart) { // si le perso est à gauche du point de départ
		pnj.v = Math.abs(pnj.v); // rend la vitesse positive
		dirPnj=1; // le perso regarde vers la gauche
	}

	if (pnj.posX2 > arrivee - pnj.largeur) { // si le perso dépasse le point d'arrivée
		pnj.v=-Math.abs(pnj.v); // rend la vitesse négative
		dirPnj=2; // le perso regarde vers la droite
	}
}


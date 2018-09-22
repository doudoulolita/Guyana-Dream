let collision = 0; // avant toute collision avec le pnj

function rencontre(pnj) { // fonction gérant la collision avec le pnj

	// vérification de la position du personnage par rapport à la tuile interdite, changement de coordonnées suivant la direction pour qu'il ne reste pas bloqué

	if (joueur.posX + joueur.largeur > pnj.posX2 && joueur.posX - tailleTuile < pnj.posX2 && joueur.posY + joueur.hauteur > pnj.posY2 && joueur.posY - tailleTuile < pnj.posY2) {

		collision = 1; // permettra de savoir ensuite qu'on a touché le pnj

		bulleTexte(textePnj, pnj.posX2, pnj.posY2); // affiche une "bulle" de dialogue

		switch(dir) { // on va évaluer la direction du personnage joueur
			case 1: 
				joueur.posX -= 1; // on enlève 1 à la position posX du joueur pour qu'il se décale horizontalement par rapport au pnj
				pnj.v=0; // on arrête le déplacement du pnj en mettant sa vitesse à 0
				dirPnj=0; // on le fait regarder de face
				break;
			case 2:
				joueur.posX += 1; // on ajoute 1 à la position posX du joueur pour qu'il se décale horizontalement par rapport au pnj
				pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				dirPnj=0; // on le fait regarder de face
				break;

	 		case 0: 
				joueur.posY -= 1; // on enlève 1 à la position posY du joueur pour qu'il se décale verticalement par rapport au pnj
				pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				dirPnj=0; // on le fait regarder de face
				break;
			case 3:
				joueur.posY += 1; // on ajoute 1 à la position posY du joueur pour qu'il se décale verticalementement par rapport au pnj
				pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				dirPnj=0; // on le fait regarder de face
				break;
		}
	}
}
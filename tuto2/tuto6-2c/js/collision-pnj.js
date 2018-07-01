var collision = 0;

function rencontre(pnj) {

	// vérification de la position du personnage par rapport à la tuile interdite, changement de coordonnées suivant la direction pour qu'il ne reste pas bloqué

	if (joueur.posX + joueur.largeur > pnj.posX2 && joueur.posX - tailleTuile < pnj.posX2 && joueur.posY + joueur.hauteur > pnj.posY2 && joueur.posY - tailleTuile < pnj.posY2) {

		collision = 1;
		bulleTexte(textePnj, pnj.posX2, pnj.posY2);

		switch(dir) {
			case 1:
				joueur.posX -= 1; // on enlève 1 à la position posX du joueur pour qu'il se décale horizontalement par rapport au pnj
				pnj.v=0; // on arrête le déplacement du pnj en mettant sa vitesse à 0
				dirPnj=0;
				break;
			case 2:
				joueur.posX += 1; // on ajoute 1 à la position posX du joueur pour qu'il se décale horizontalement par rapport au pnj
				pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				dirPnj=0;
				break;

	 		case 0: 
				joueur.posY -= 1; // on enlève 1 à la position posY du joueur pour qu'il se décale verticalement par rapport au pnj
				pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				dirPnj=0;
				break;
			case 3:
				joueur.posY += 1; // on ajoute 1 à la position posY du joueur pour qu'il se décale verticalementement par rapport au pnj
				pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				dirPnj=0;
				break;
		}
	}
}

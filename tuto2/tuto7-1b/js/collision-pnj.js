let collision = 0; // avant toute collision avec le pnj

function rondDegrade(x, y) { // fonction dessinant un rond dégradé (sera appelée dans la fonction rencontre)

  // Créer un dégradé
  let radgrad = context[1].createRadialGradient(x-20, y, 10, x-20+7, y+5, 30);
  radgrad.addColorStop(0, '#F4F201');
  radgrad.addColorStop(0.8, '#E4C700');
  radgrad.addColorStop(1, 'rgba(228, 199, 0, 0)');
  
  // dessiner des formes
  context[1].fillStyle = radgrad;
  context[1].fillRect(x-20-joueur.largeur, y-joueur.largeur, 150, 150);
}

/***** fonction pour effacer le rond au bout d'un moment (sera appelée dans la fonction rencontre) *****/
function supprimeRond() {
	setTimeout(function() { // cette fonction se lancera quand le temps décidé sera écoulé

  		context[1].clearRect(0,0, 768, 384);
  		context[4].clearRect(0,0, 768, 384);

	}, 2000); // la fonction s'exécute au bout du temps indiqué.
}

function rencontre(pnj, textePnj) { // fonction gérant la collision avec le pnj (appelée dans le fichier animation.js)

	// vérification de la position du personnage par rapport à la tuile interdite, changement de coordonnées suivant la direction pour qu'il ne reste pas bloqué

	if (joueur.posX + joueur.largeur > pnj.posX2 && joueur.posX - tailleTuile < pnj.posX2 && joueur.posY + joueur.hauteur > pnj.posY2 && joueur.posY - tailleTuile < pnj.posY2) {
		console.log(pnj.name);

			if (pnj.collision == 0) {
				bulleTexte(pnj.texte, pnj.posX2, pnj.posY2); // affiche une "bulle" de dialogue
				if (pnj==ennemi) {
					pointsEnergie -= 3; // les points d'énergie diminuent quand on touche l'ennemi
				}

			}

			if (pnj==ennemi && pnj.collision == 0) { 

				rondDegrade(joueur.posX, joueur.posY); // crée un rond dégradé

				context[2].globalAlpha = 0.7; // diminue l'opacité du perso
				supprimeRond() ; // supprime le rond au bout d'un certain temps.
			} 


			pnj.collision += 1; // permettra de savoir ensuite qu'on a touché le pnj

			console.log(pnj.collision+" - pnj !");

		switch(dir) { // on va évaluer la direction du personnage joueur
			case 1: 
				joueur.posX -= 1; // on enlève 1 à la position posX du joueur pour qu'il se décale horizontalement par rapport au pnj
				// pnj.v=0; // on arrête le déplacement du pnj en mettant sa vitesse à 0
				// dirPnj=0; // on le fait regarder de face
				break;
			case 2:
				joueur.posX += 1; // on ajoute 1 à la position posX du joueur pour qu'il se décale horizontalement par rapport au pnj
				// pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				 // dirPnj=0; // on le fait regarder de face
				break;

	 		case 0: 
				joueur.posY -= 1; // on enlève 1 à la position posY du joueur pour qu'il se décale verticalement par rapport au pnj
				// pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				 // dirPnj=0; // on le fait regarder de face
				break;
			case 3:
				joueur.posY += 1; // on ajoute 1 à la position posY du joueur pour qu'il se décale verticalementement par rapport au pnj
				// pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				 // dirPnj=0; // on le fait regarder de face
				break;
		}


	}
}

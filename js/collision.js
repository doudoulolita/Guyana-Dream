/* le perso ne doit pas passer sur (ni sous) les arbres, ceux-ci doivent l'empêcher de passer. On vérifie donc si le perso a le droit ou non d'aller sur une case  */
function autorisationBouger(newPosX, newPosY, nomCarte) {

	//on regarde si avec la position de coordonnées (newPosX, newPosY) on n'est pas sur une mauvaise case
	var centrePersoX = newPosX+(persoLargeur/2);//on crée un carré virtuel de coté 32 (taille de la tuile et largeur du perso) et de centre (centrePersoX, centrePersoY)
	var centrePersoY = newPosY+(persoHauteur-(tailleTuile/2));
 
	var nbTuilesurLigneCanvas = canvasLargeur/tailleTuile // nombre de tuiles disposables sur une ligne de canvas
	var tile = Math.ceil(centrePersoX/tailleTuile) + (nbTuilesurLigneCanvas*Math.floor(centrePersoY/tailleTuile));//on enregistre le numéro de la tuile par rapport à la map sur laquelle se trouve le perso
	var ligne = Math.ceil(tile/nbTuilesurLigneCanvas);//on cherche sur quelle ligne se trouve le perso
	var colonne = tile-((ligne-1)*nbTuilesurLigneCanvas);//on cherche sur quelle colonne se trouve le perso

	var l = [ligne-2,ligne-2,ligne-2,ligne-1,ligne-1,ligne-1,ligne,ligne,ligne];//on enregistre les 9 cases autour du carré jaune
	var c = [colonne-2,colonne-1,colonne,colonne-2,colonne-1,colonne,colonne-2,colonne-1,colonne];//ces 9 cases ont pour coordonnées (l[i];c[i]) mais attention, ces coordonnées ne sont pas en pixels! Ces coordonnées représentent le nombre de cases à partir du haut et de la droite
	for (var i=0; i<l.length; i++) {
		var centreCarreX = (c[i]*tailleTuile)+(tailleTuile/2), centreCarreY = (l[i]*tailleTuile)+(tailleTuile/2) ;//on cherche le centre de chaque carré autour du carré jaune afin de pouvoir vérifier plus facilement si on le touche				
		if (centrePersoX+(tailleTuile/2)>centreCarreX-(tailleTuile/2) && centrePersoX-(tailleTuile/2)<centreCarreX+(tailleTuile/2) && centrePersoY+(tailleTuile/2)>centreCarreY-(tailleTuile/2) && centrePersoY-(tailleTuile/2)<centreCarreY+(tailleTuile/2)) {//si le carré jaune touche une case autour…

			if(nomCarte[l[i]]!=undefined){ // ceci permet d'éviter un bug en bord de canvas
				if (niveau.innerHTML==1){ // on teste la carte de niveau 1
					nomCarte=donneesCarte.carte1;


					changeCarte(posChangeMapX, posChangeMapY, 1);

					for(j=0; j<tuileInterdite.length; j++) {

						if (nomCarte[l[i]][c[i]]==tuileInterdite[j]) {//…et si on n'a pas l’autorisation de marcher sur la case car on n'est pas sur une tuile vide
						return false ;//on arrête tout, on n'a pas le droit de se trouver ici avec le bonhomme
						}
					}	
				}
				if (niveau.innerHTML==2){ // on teste la carte de niveau 2
					nomCarte=donneesCarte.carte2;

					changeCarte(posChangeMapX2, posChangeMapY2, 2);

					for(j=0; j<tuileInterdite.length; j++) {

						if (nomCarte[l[i]][c[i]]==tuileInterdite[j]) {//…et si on n'a pas l’autorisation de marcher sur la case car on n'est pas sur une tuile vide
							return false ;//on arrête tout, on n'a pas le droit de se trouver ici avec le bonhomme
						}
					}	
				}				
			}
			else {return false ;}
		}
	}
	return true ;//si on a pas retourné false plus haut, on a le droit de se situer ici avec le personnage. On renvoie donc true.
}

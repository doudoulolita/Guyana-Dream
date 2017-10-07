/* permet de dessiner le perso sur le canvas en fonction de sa direction, du pas qu'il fait (pendant la marche) et du nom de la carte */
function dessinePerso(numPerso, direction, step, nomCarte) {

		touchesClavier();

		attrapeObjet();

		if (directionX!=0 || directionY!=0) {//si on se déplace
		nbrFrame++;
		if (nbrFrame>2) {//si 2 frames ont passé depuis le dernier changement d'étape du pas
			step++;//on rajoute une étape au pas du personnage
			nbrFrame = 0;//on remet à 0 le compteur de frame
		}
		if (step>stepMax) {step=1;}//si on a fini toutes les étapes du pas du personnage, on recommence. (on ne remet pas à 0 car 0 est l'étape ou on ne bouge pas. Et quand on marche, il n'y a jamais d'étape ou l'on ne bouge pas!)
	} else {//on ne bouge pas
		step=0;//on remet l'étape du pas à 0, ce qui correspond à la position immobile
	}
	persoLargeur= tableauPersos[numPerso-1][1];
	persoHauteur= tableauPersos[numPerso-1][2];

	context[1].clearRect(0,0,canvasLargeur,canvasHauteur);//on efface le second canvas
	context[1].drawImage(perso, step*persoLargeur, direction*persoHauteur, persoLargeur, persoHauteur, posX, posY, persoLargeur, persoHauteur);//on dessine le personnage
	
	if (directionX != 0 || directionY != 0) {//si on bouge
		if (autorisationBouger(posX+directionX*1, posY, nomCarte)) {//si au prochain déplacement horizontal, on n'est pas sur une mauvaise case
			posX += 1*directionX;//on change sa position horizontale
		}
		if (autorisationBouger(posX, posY+directionY*1, nomCarte)) {//si au prochain déplacement vertical, on n'est pas sur une mauvaise case
			posY += 1*directionY;//on change sa position verticale
		}
	}
	requestAnimationFrame(function() { 
		dessinePerso(numPerso, dir,step, nomCarte);
	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde

}

window.requestAnimationFrame = (function(){//on crée la fonction pour gérer l'animation
	return window.requestAnimationFrame || // La forme standardisée
	window.webkitRequestAnimationFrame  || // Pour Chrome et Safari
	window.mozRequestAnimationFrame     || // Pour Firefox
	window.oRequestAnimationFrame       || // Pour Opera
	window.msRequestAnimationFrame      || // Pour Internet Explorer
	function(callback) {                   // Pour les élèves du dernier rang
		window.setTimeout(callback, 1000 / 60);
	};
})();


// fonction qui gère les touches de clavier, ici les flèches du pavé directionnel
function touchesClavier() {
	document.onkeydown = function(e) { // quand on appuie sur la touche
		if (!canvasHasFocus) return;
		e.preventDefault();
		switch(e.keyCode) {
			case 37://code pour la gauche
				if (directionX!=-1 && directionY==0) {dir = 2;}//Si on ne se dirige vers nulle part, on oriente le perso
				directionX = -1;
			break;
			case 38://code pour le haut
				if (directionX==0 && directionY!=-1) {dir = 3;}//Si on ne se dirige vers nulle part, on oriente le perso
				directionY = -1;
			break;
			case 39://code pour la droite
				if (directionX!=1 && directionY==0) {dir = 1;}//Si on ne se dirige vers nulle part, on oriente le perso
				directionX = 1;
			break;
			case 40://code pour le bas
				if (directionX==0 && directionY!=1) {dir = 0;}//Si on ne se dirige vers nulle part, on oriente le perso
				directionY = 1;
			break;
			
		}
	},		
	
	document.onkeyup = function(e) { // quand on relache la touche
		if (!canvasHasFocus) return;
		e.preventDefault();
		switch(e.keyCode) {
			case 37://quand on arrête d'appuyer sur la gauche
				if (directionY!=0) {//si on se dirige vers le bas ou le haut
					if (directionY==-1) {//si on se dirige vers le haut
						dir=3;//on retourne le bonhomme vers le haut
					} else { dir=0; }//sinon, on le retourne de nouveau vers le bas
				}
				directionX = 0;//on arrête de se déplacer horizontalement
			break;
			case 38://quand on arrête d'appuyer sur le haut
				if (directionX!=0) {//si on se dirige vers la droite ou la gauche
					if (directionX==-1) {//si on se dirige vers la gauche
						dir=2;//on redirige le bonhomme vers la gauche
					} else { dir=1; }//sinon, on redirige le bonhomme vers la droite
				}
				directionY = 0;//on arrête de se déplacer verticalement
			break;
			case 39://quand on arrête d'appuyer sur la droite
				if (directionY!=0) {//si on se dirige vers le bas ou le haut
					if (directionY==-1) {//si on se dirige vers le haut
						dir=3;//on redirige le bonhomme vers le haut
					} else { dir=2; }//sinon, on redirige le bonhomme vers la gauche
				}
				directionX = 0;//on arrête de se déplacer horizontalement
			break;
			case 40://quand on arrête d'appuyer sur le bas
				if (directionX!=0) {//si on se dirige vers la droite ou la gauche
					if (directionX==-1) {//si on se dirige vers la gauche
						dir=2;//on redirige le bonhomme vers la gauche
					} else { dir=1; }//sinon, on redirige le bonhomme vers la droite
				}
				directionY = 0;//on arrête de se déplacer verticalement
			break;
			
		}
	}

}

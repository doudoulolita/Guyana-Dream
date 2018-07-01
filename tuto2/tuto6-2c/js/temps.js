var tempsJeu = 80000;
var intervalleTemps = 2000;

var nbPointsMax = 0;
var pointsEnergie = nbPointsMax;

var gain=0;

function compteTemps() {
	ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*9);

	setInterval(function() {
		context[4].clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*8, tailleTuile*2.5, tailleTuile*1.5);

		tempsJeu -= intervalleTemps;

		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*9);

	}, intervalleTemps);	
}


function gereEnergie() {
	pointsEnergie = nbPointsMax + Math.floor(Math.random() * Math.floor(nbPointsMax/2));
	ajouteTexte("Energie : " + pointsEnergie, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 20);
	ajouteTexte("Vitesse : " + Math.round(vx*20), 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 40);

	setInterval(function() {
		context[4].clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*10, tailleTuile*2.5, tailleTuile*2);
		ajouteTexte("Energie : " + pointsEnergie, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 20);

		pointsEnergie -= 1; // on perd un point d'énergie au fil du temps
		vx *= 0.95; // on perd de la vitesse quand on perd de l'énergie	
		ajouteTexte("Vitesse : " + Math.round(vx*20), 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 40);

		gagne();

	}, intervalleTemps);	
}


function gagne() {
	if (nbPoints == 16 && pointsEnergie >= 0) { // si on a le bon nombre de points et que l'énergie est positive
	
		couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
		ajouteTexte(texteFin, 50, tailleTuile*8 , tailleTuile*3); // on écrit que c'est la fin du jeu
		ajouteTexte(texteGagne, 50, tailleTuile*8 , tailleTuile*5); // on écrit qu'on a gagné
		
		textePnj = textePnjGagne;

		bulleTexte(textePnj, pnj.posX2, pnj.posY2);
		
		pointsEnergie -= 0;
		tempsJeu -= 0;

		gain = 1;
			
	}
}

function perd() {
		if (nbPoints < 16 || pointsEnergie <= 0) {
			ajouteTexte(textePerd, 50, tailleTuile*8 , tailleTuile*5);

			textePnj = textePnjPerd;

			bulleTexte(textePnj, pnj.posX2, pnj.posY2);

			pointsEnergie -= 0;
			tempsJeu -= 0;


		} // si au bout du temps imparti, on n'a pas le nombre de points ou si l'énergie est négative, on écrit qu'on a perdu			

}

/***** fonction pour chronométrer le jeu *****/
function chrono() {
	setTimeout(function() {

		context[1].clearRect(0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas);	// efface la carte sur le premier canvas

		context[1].clearRect(pnj.posX2, pnj.posY2-(tailleTuile*1.5), textePnj.length*12, tailleTuile);	// efface le texte de dialogue avec le Pnj

		pointsEnergie -= 0;
		tempsJeu -= 0;

		couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté

		ajouteTexte(texteFin, 50, tailleTuile*8 , tailleTuile*3); // on indique que c'est la fin du jeu

		joueur.posX= 0 ; joueur.posY= 0; dir=0; vx=0; // on place le joueur en haut à gauche, regardant de face

		pnj.posX2= 0 ; pnj.posY2= departY; dirPnj=0; pnj.v=0; // on place le pnj un peu plus bas à gauche, regardant de face

		if (gain != 1) {
			perd();
		}


	}, tempsJeu); // la fonction s'exécute au bout du temps indiqué.
}



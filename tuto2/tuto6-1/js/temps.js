let tempsJeu = 70000;
let intervalleTemps = 2000;

function compteTemps() {
		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*9);

	setInterval(function() {
		context3.clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*8, tailleTuile*2.5, tailleTuile*1.5);

		tempsJeu -= intervalleTemps;

		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*9);

	}, intervalleTemps);	
}


function gereEnergie() {
	ajouteTexte("Energie : " + pointsEnergie, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 20);
	ajouteTexte("Vitesse : " + Math.round(vx*20), 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 40);

	setInterval(function() {
		context3.clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*10, tailleTuile*2.5, tailleTuile*2);
		ajouteTexte("Energie : " + pointsEnergie, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 20);

		pointsEnergie -= 1; // on perd un point d'énergie au fil du temps
		vx *= 0.95; // on perd de la vitesse quand on perd de l'énergie	
		ajouteTexte("Vitesse : " + Math.round(vx*20), 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 40);

		gagne();
	}, intervalleTemps);	
}


function gagne() {
	if (nbPoints == 16 && pointsEnergie > 0) { // si ona le bon nombre de points et que l'énergie est positive
		couleurFond(couleurfondCarte, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
		ajouteTexte("Fin du jeu", 50, tailleTuile*7 , tailleTuile*3); // on écrit que c'est la fin du jeu
		ajouteTexte("Gagné !", 50, tailleTuile*7 , tailleTuile*5); // on écrit que'on a gagné	
	}
}

/***** fonction pour chronométrer le jeu *****/
function chrono() {
	setTimeout(function() {
		couleurFond(couleurfondCarte, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté

		ajouteTexte("Fin du jeu", 50, tailleTuile*7 , tailleTuile*3); // on indique que c'est la fin du jeu

		x= 0 ; y= 0; dir=0; vx=0; // on place le joueur en haut à gauche, regardant de face

		if (nbPoints < 16 || pointsEnergie <= 0) {ajouteTexte("Perdu !", 50, tailleTuile*7 , tailleTuile*5);} // si au bout du temps imparti, on n'a pas le nombre de points ou si l'énergie est négative, on écrit qu'on a perdu

	}, tempsJeu); // la fonction s'exécute au bout du temps indiqué.
}



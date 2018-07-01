var tempsJeu = 30000;
var intervalleTemps = 2000;

var pointsEnergie = 8;

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
	}, intervalleTemps);	
}

/***** fonction pour chronométrer le jeu *****/
function chrono() {
	setTimeout(function() {
		couleurFond(couleurfondCarte, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
		ajouteTexte("Fin du jeu", 50, tailleTuile*7 , tailleTuile*3); // on indique que c'est la fin du jeu
		x= 0 ; y= 0; dir=0; vx=0; // on place le joueur en haut à gauche, regardant de face
		pointsEnergie += 0;
		tempsJeu += 0;	
	}, tempsJeu); // la fonction s'exécute au bout du temps indiqué.
}



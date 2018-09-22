let tempsJeu = 80000; // temps au bout du quel on lancera la fonction chrono()

let intervalleTemps = 2000; // intervalle de temps pour appeler la fonction qui affiche la vitesse et l'énergie et celle qui affiche le temps

let pointsEnergie = nbPointsMax; // initialise les points d'énergie

let gain=0; // initialise le gain (si on gagne, on aura 1)

function compteTemps() { 
	ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10); // affiche le temps qui reste

	setInterval(function() { // cette fonction est appelée régulièrement
		context[4].clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*9.5, tailleTuile*2.5, 12*2); // efface le texte déjà affiché

		tempsJeu -= intervalleTemps; // soustrait l'intervalle de temps décidé en variable

		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10); // affiche le temps qui reste

	}, intervalleTemps); // indique à quel intervalle on appelle la fonction	
}


function gereEnergie() {
	pointsEnergie = nbPointsMax + Math.floor(Math.random() * Math.floor(nbPointsMax/2)); // calcule l'énergie en fonction du nombre d'objets et ajoute un nombre aléatoire au résultat
	ajouteTexte("Energie : " + pointsEnergie, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 20); // affiche l'énergie
	ajouteTexte("Vitesse : " + Math.round(vx*20), 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 40); // affiche la vitesse

	setInterval(function() { // cette fonction est appelée régulièrement
		context[4].clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*10, tailleTuile*2.5, tailleTuile*2); // efface le texte déjà affiché
		ajouteTexte("Energie : " + pointsEnergie, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 20); // affiche la nouvelle énergie

		pointsEnergie -= 1; // on perd un point d'énergie au fil du temps
		vx *= endurance; // on perd de la vitesse quand on perd de l'énergie	
		ajouteTexte("Vitesse : " + Math.round(vx*20), 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 40); // affiche la nouvelle vitesse

		gagne(); // appel la fonction qui vérifie si on gagne et affiche le bon message

	}, intervalleTemps); // indique à quel intervalle on appelle la fonction
}


function gagne() { // fonction si on gagne
	if (nbPoints == nbPointsMax && pointsEnergie >= 0) { // si on a le bon nombre de points et que l'énergie est positive
	
		couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
		ajouteTexte(texteFin, 50, tailleTuile*8 , tailleTuile*3); // on écrit que c'est la fin du jeu
		ajouteTexte(texteGagne, 50, tailleTuile*8 , tailleTuile*5); // on écrit qu'on a gagné
		
		textePnj = textePnjGagne; // change le texte du PNJ dans sa bulle

		bulleTexte(textePnj, pnj.posX2, pnj.posY2); // affiche la bulle du PNJ
		
		pointsEnergie -= 0; // stoppe le décompte de l'énergie (ne marche pas)
		tempsJeu -= 0; // stoppe le décompte du temps (ne marche pas)

		gain = 1; // donne un point de gain pour qu'on sache qu'on a gagné avant de lancer la fonction chrono()
	}
}

function perd() { // fonction si on perd
	if (nbPoints < nbPointsMax || pointsEnergie < 0) { // si on n'a pas le bon nombre de points ou que l'énergie est négative

		ajouteTexte(textePerd, 50, tailleTuile*8 , tailleTuile*5); // alors on écrit qu'on a perdu

		textePnj = textePnjPerd; // change le texte du PNJ dans la bulle de dialogue

		bulleTexte(textePnj, pnj.posX2, pnj.posY2); // affiche la bulle du PNJ

		pointsEnergie -= 0; // stoppe le décompte de l'énergie (ne marche pas)
		tempsJeu -= 0; // stoppe le décompte du temps (ne marche pas)
	} 
}

/***** fonction pour chronométrer le jeu *****/
function chrono() {
	setTimeout(function() { // cette fonction se lancera quand le temps décidé sera écoulé

		context[1].clearRect(0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas);	// efface la carte sur le premier canvas

		context[1].clearRect(pnj.posX2, pnj.posY2-(tailleTuile*1.5), textePnj.length*12, tailleTuile);	// efface le texte de dialogue avec le Pnj

		pointsEnergie -= 0; // stoppe le décompte de l'énergie (ne marche pas)
		tempsJeu -= 0; // stoppe le décompte du temps (ne marche pas)

		couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté

		ajouteTexte(texteFin, 50, tailleTuile*8 , tailleTuile*3); // on indique que c'est la fin du jeu

		joueur.posX= 0 ; joueur.posY= 0; dir=0; vx=0; // on place le joueur en haut à gauche, regardant de face

		pnj.posX2= 0 ; pnj.posY2= departY; dirPnj=0; pnj.v=0; // on place le pnj un peu plus bas à gauche, regardant de face

		if (gain != 1) { // si on n'a pas déjà gagné avant la fin du temps imparti
			perd(); // alors on lance la fonction qui indique qu'on a perdu
		}

	}, tempsJeu); // la fonction s'exécute au bout du temps indiqué.
}



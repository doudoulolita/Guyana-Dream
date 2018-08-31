var tempsJeu = 10000; // temps au bout du quel on lancera la fonction chrono()

var intervalleTemps = 2000; // intervalle de temps pour appeler la fonction qui affiche la vitesse et l'énergie et celle qui affiche le temps

var nbPointsMax = 0; // initialise le nombre de points qu'on pourra obtenir au maximum

var pointsEnergie = nbPointsMax; // initialise les points d'énergie

var gain=0; // initialise le gain (si on gagne, on aura 1)

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


function gagne() { // fonction si on gagne (appelée par la fonction gereEnergie)
	if (nbPoints == nbPointsMax && pointsEnergie >= 0) { // si on a le bon nombre de points et que l'énergie est positive

		pointsEnergie += 0; // stoppe le décompte de l'énergie (ne marche pas)
		tempsJeu += 0; // stoppe le décompte du temps (ne marche pas)

		ecranFinJeu();

		joueur.posX= 0 ; joueur.posY= 0; dir=0; vx=0; // on place le joueur en haut à gauche, regardant de face

		pnj.posX2= 0 ; pnj.posY2= pnj.departY; dirPnj=1; pnj.v=0; // on place le pnj un peu plus bas à gauche, regardant de côté

		ennemi.posX2= 0 ; ennemi.posY2= ennemi.departY+tailleTuile; ennemi.dir=1; ennemi.v=0; // on place le pnj un peu plus bas à gauche, regardant de face

		texteResultat=texteGagne; // on écrit qu'on a gagné

		ajouteTexte(texteResultat, 50, tailleTuile*8 , tailleTuile*5);
		
		bulleTexte(pnj.texteGagne, pnj.posX2, pnj.posY2);

		bulleTexte(ennemi.texteFin, ennemi.posX2, ennemi.posY2);
		
		gain = 1; // donne un point de gain pour qu'on sache qu'on a gagné avant de lancer la fonction chrono()
	}

}

function perd() { // fonction si on perd (appelée dans la fonction chrono)
	if (nbPoints < nbPointsMax || pointsEnergie < 0) { // si on n'a pas le bon nombre de points ou que l'énergie est négative

		pointsEnergie += 0; // stoppe le décompte de l'énergie (ne marche pas)
		tempsJeu += 0; // stoppe le décompte du temps (ne marche pas)

		ecranFinJeu(); // fonction dans le fichier ecrans.js 

		joueur.posX= 0 ; joueur.posY= 0; dir=0; vx=0; // on place le joueur en haut à gauche, regardant de face

		pnj.posX2= 0 ; pnj.posY2= pnj.departY; pnj.dir=1; pnj.v=0; // on place le pnj un peu plus bas à gauche, regardant de côté

		ennemi.posX2= 0 ; ennemi.posY2= ennemi.departY+tailleTuile; ennemi.dir=1; ennemi.v=0; // on place le pnj un peu plus bas à gauche, regardant de face

		texteResultat = textePerd; // alors on écrit qu'on a perdu

		ajouteTexte(texteResultat, 50, tailleTuile*8 , tailleTuile*5);

		bulleTexte(pnj.textePerd, pnj.posX2, pnj.posY2);

		bulleTexte(ennemi.texteFin, ennemi.posX2, ennemi.posY2);
	
	} 
}

/***** fonction pour chronométrer le jeu *****/
function chrono() {
	setTimeout(function() { // cette fonction se lancera quand le temps décidé sera écoulé (appelée dans le fichier main.js)

		ecranFinJeu(); // fonction dans le fichier ecrans.js 

		pointsEnergie -= 0; // stoppe le décompte de l'énergie (ne marche pas)
		tempsJeu -= 0; // stoppe le décompte du temps (ne marche pas)

		joueur.posX= 0 ; joueur.posY= 0; dir=0; vx=0; // on place le joueur en haut à gauche, regardant de face

		pnj.posX2= 0 ; pnj.posY2= pnj.departY; dirPnj=1; pnj.v=0; // on place le pnj un peu plus bas à gauche, regardant de côté

		ennemi.posX2= 0 ; ennemi.posY2= ennemi.departY+tailleTuile; dirPnj=1; ennemi.v=0; // on place le pnj un peu plus bas à gauche, regardant de face

		if (gain != 1) { // si on n'a pas déjà gagné avant la fin du temps imparti

			perd(); // alors on lance la fonction qui indique qu'on a perdu
		}

	}, tempsJeu); // la fonction s'exécute au bout du temps indiqué.
}



var tempsEcran= 3000;

/**** Le jeu se décline en 3 écrans : 

	- l'écran d'accueil montre les images des joueurs possibles. On doit cliquer sur un de ces joueurs
	- l'écran de jeu efface le tout puis affiche la carte, le personnage choisi et les PNJs
	- l'écran de fin efface le tout puis affiche les scores et le résultat du jeu (gagné ou perdu)

 ****/

function ecranAccueil() { // fonction pour afficher les images permettant de choisir le joueur parmi 3 (appelée dans le fichier main.js)
	nbPointsMax = 0;
	pointsEnergie = nbPointsMax; // initialise les points d'énergie
	gain=0; // initialise le gain (si on gagne, on aura 1)
	tempsJeu = 80000; // décompte du temps
	nbPoints = 0; // le nombre de points augmentera quand on récupèrera des objets
	nbPointsObjet =0; // nombre de points pour un objet (quand il y a plusieurs fois le même sur la carte)
	vx = joueur.vx; // vitesse de déplacement du personnage

	pnj.v = 0.5; // vitesse du pnj réintialisée
	ennemi.v = 0.5; // vitesse de l'ennemi réinitialisée

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	ajouteTexte(titreJeu, hauteurTitre1, largeurCanvas/4 , hauteurCanvas/2); // appel de la fonction du fichier texte.js pour le titre du jeu

	dessineJoueurs(context[2]); // appel de la fonction dessinant les joueurs du fichier choix-perso.js

	canvas[4].addEventListener("click", clicCanvas, false);	// vérifie si on clique sur un des singes (fonction dans choix-perso.js)
}

/***** fonction pour afficher le jeu après le choix du joueur (appelée dans le fichier main.js) *****/
function ecranJeu() {

	setTimeout(function() { // cette fonction se lancera quand le temps décidé sera écoulé

		console.log(clic + " clic sur un singe");

		if(clic!=0) { // si on a cliqué sur un singe
			nbPointsMax = 0;
			pointsEnergie = nbPointsMax; // initialise les points d'énergie
			gain=0; // initialise le gain (si on gagne, on aura 1)
			tempsJeu = 80000; // décompte du temps
			nbPoints = 0; // le nombre de points augmentera quand on récupèrera des objets
			nbPointsObjet =0; // nombre de points pour un objet (quand il y a plusieurs fois le même sur la carte)
			vx = joueur.vx; // vitesse de déplacement du personnage

			pnj.v = 0.5; // vitesse du pnj réintialisée
			ennemi.v = 0.5; // vitesse de l'ennemi réinitialisée

			/* on redonne la position de l'ennemi maintenant que l'image est créée */
			ennemi.posX2 = ennemi.departX; 
			ennemi.posY2 = ennemi.departY;

			context[0].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le premier canvas (avant d'afficher la carte)
			context[4].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des textes

			couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

			ajouteTexte(titreJeu, hauteurTitre, 10, hauteurCanvas-10); // appel de la fonction du fichier texte.js pour le titre du jeu

			dessineCarte(); // appel de la fonction de dessin de la carte (carte.js) sur le canvas[0]

			myReq = requestAnimationFrame(animeTout); // lance l'animation du joueur (fichier animation.js)

			// Lorsqu'une touche est appuyée, lance la fonction qui fait bouger le personnage
			document.onkeydown = persoBouge; // si on appuie sur une touche, appel de la fonction du fichier clavier.js

			ajouteTexte(titreInventaire, hauteurTitre, largeurCanvas-(3*tailleTuile)+20,20); // appel de la fonction du fichier texte.js pour le titre de l'inventaire
			ajouteTexte(nbPoints+ " points", 12, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte (texte.js)
			comptePoints();	// appel de la fonction du fichier collision-objet.js pour compter les poins qu'apportent les objets
			compteTemps(); // appel de la fonction du fichier temps.js qui affiche et décompte celui-ci (temps.js)
			gereEnergie(); // affiche et décompte l'énergie et la vitesse (temps.js)
			chrono(); // on lance la fonction qui terminera le jeu (voir fichier temps.js)
		}

	}, tempsEcran); // la fonction s'exécute au bout du temps indiqué
}

function ecranFinJeu() { // fonction affichant un écran donnant les scores (appelée dans la fonction chrono du fichier temps.js)
	context[0].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface la carte sur le premier canvas
	context[1].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface les bulles de dialogues
	context[4].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface le canvas des textes

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
	ajouteTexte(texteFin, 50, tailleTuile*8 , tailleTuile*3); // on écrit que c'est la fin du jeu

	bulleTexte(pnj.texteQueteOk, pnj.posX2, pnj.posY2); // bulle de dialogue avec un texte

	canvas[4].addEventListener("click", clicRejouer, false);	// vérifie si on clique sur les pnjs à droite et lance la fonction clicRejouer
}

function clicRejouer() {
	if(xSourisCanvas>0 && xSourisCanvas<pnj.arriveeX && ySourisCanvas>0 && ySourisCanvas<tailleTuile*carte1.length) { // vérifie à quel endroit on a cliqué par rapport à l'image de choix du joueur
		clic=0;
		context[0].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le premier canvas
		context[1].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface les bulles de dialogues
		context[2].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le perso joueur
		context[3].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface les PNJs
		context[4].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des textes

		cancelAnimationFrame(myReq); // arrête l'animation qui permet l'affichage en mouvement des personnages
	
		ecranAccueil(); // réaffiche l'écran d'accueil
	}
}
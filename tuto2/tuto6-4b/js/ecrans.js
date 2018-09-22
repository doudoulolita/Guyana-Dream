let tempsEcran= 3000;

function ecranAccueil() {

	context[0].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le premier canvas	

	couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

	ajouteTexte(titreJeu, hauteurTitre1, largeurCanvas/4 , hauteurCanvas/2); // appel de la fonction du fichier texte.js pour le titre du jeu

	dessineJoueurs(); // appel de la fonction dessinant les joueurs du fichier choix-perso.js

	canvas[4].addEventListener("click", clicCanvas, false);	// vérifie si on clique sur un des singes (fonction dans choix-perso.js)

}

/***** fonction pour chronométrer le jeu *****/
function ecranJeu() {

	setTimeout(function() { // cette fonction se lancera quand le temps décidé sera écoulé

	console.log(clic);



		if(clic==1) { // si on a cliqué sur un singe

			context[0].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le premier canvas

			context[4].clearRect(0, 0, largeurCanvas, hauteurCanvas); // efface le canvas des textes

			couleurFond(couleurfondCarte, 0, 0, largeurCanvas, hauteurCanvas); // appel de la fonction qui colorie le fond dans jeu.js

			ajouteTexte(titreJeu, hauteurTitre, 10, hauteurCanvas-10); // appel de la fonction du fichier texte.js pour le titre du jeu

			dessineCarte(); // appel de la fonction de dessin de la carte (carte.js)

			animePnjs(); // appel de la fonction d'animation du pnj (fichier animation.js)

			// Lorsqu'une touche est appuyée, lance une fonction
			document.onkeydown = persoBouge; // si on appuie sur une touche, appel de la fonction du fichier clavier.js

			ajouteTexte(titreInventaire, hauteurTitre, largeurCanvas-(3*tailleTuile)+20,20); // appel de la fonction du fichier texte.js pour le titre de l'inventaire

			ajouteTexte(nbPoints+ " points", 12, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte (texte.js)

			comptePoints();	// appel de la fonction du fichier collision-objet.js pour compter les poins qu'apportent les objets

			compteTemps(); // appel de la fonction du fichier temps.js qui affiche et décompte celui-ci (temps.js)

			gereEnergie(); // affiche et décompte l'énergie et la vitesse (temps.js)


		}

	}, tempsEcran); // la fonction s'exécute au bout du temps indiqué
}

function ecranFinJeu() {

	context[0].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface la carte sur le premier canvas
	context[1].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface les bulles de dialogues
	context[4].clearRect(0, 0, cartes[0].length *tailleTuile, cartes.length*tailleTuile); // efface le canvas des textes


	couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
	ajouteTexte(texteFin, 50, tailleTuile*8 , tailleTuile*3); // on écrit que c'est la fin du jeu



}

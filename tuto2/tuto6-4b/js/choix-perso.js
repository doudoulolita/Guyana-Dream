/*** fonction pour effacer le canvas et dessiner le joueur ***/
function dessineJoueur(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(perso, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur);
}

/* fonction dessinant les joueurs sur le côté droit */
function dessineJoueurs() {
	emplacementTexte= tailleTuile*cartes[0][0].length/2;
	ajouteTexte(texteChoixPerso, hauteurTitre, emplacementTexte, 20); // texte en haut du canvas avec l'instruction
	for (i=joueurs.length-1; i>=0; i--) { // parcourt le tableau des joueurs
		dessineJoueur(joueurs[i], context[4], tailleTuile*(cartes[0][0].length/2+i), tailleTuile*7.5, joueurs[i].largeur, joueurs[i].hauteur, Math.floor(joueurs[i].pose), dirJoueur);
	}

}

// clic sur le canvas
function clicCanvas(e){	
	// position de la souris / document
	xSourisDocument = e.pageX; 
    	ySourisDocument = e.pageY;
	// position du canvas / document
	canvas.offsetLeft = 191;
	canvas.offsetTop = 85;
	xCanvas = canvas.offsetLeft;
	yCanvas = canvas.offsetTop;
	console.log('Clic document = '+ xSourisDocument+'-'+ySourisDocument+'\n');
	// position du clic / canvas
	xSourisCanvas = xSourisDocument - xCanvas;
	ySourisCanvas = ySourisDocument - yCanvas;
	// affiche les coordonnées du clic dans la console web du navigateur
	console.log('Clic canvas = '+xSourisCanvas+'-'+ySourisCanvas+'\n');
	// appelle la fonction du clic sur le joueur
	clicJoueur();
}


function clicJoueur() {
	for (i=0; i<joueurs.length; i++) { // parcourt le tableau des joueurs
		if(xSourisCanvas>tailleTuile*(cartes[0][0].length/2+i) && xSourisCanvas<tailleTuile*(cartes[0][0].length/2+i)+largeurJoueurMax && ySourisCanvas>tailleTuile*6.5 && ySourisCanvas<tailleTuile*7.5+hauteurJoueurMax) { // vérifie à quel endroit on a cliqué par rapport à l'image de choix du joueur
			console.log(joueurs[i].name); // affiche le nom du joueur choisi dans la console web du navigateur
			joueur.spritesheet=joueurs[i].spritesheet;
			// donne au personnage joueur les caractéristiques du perso cliqué
			joueur.src = joueur.spritesheet;
			joueur.largeur = joueurs[i].largeur;
			joueur.hauteur = joueurs[i].hauteur;
			joueur.vx = joueurs[i].vx;
			joueur.endurance = joueurs[i].endurance;
			animePerso(joueur, context[2]); // lance l'animation du joueur (fichier animation.js)
			context[4].clearRect(0,0, tailleTuile*carte1[0].length, tailleTuile);	// efface le texte d'instruction disant de cliquer sur le perso
			clic=1;
			return clic;
		}
	}
}

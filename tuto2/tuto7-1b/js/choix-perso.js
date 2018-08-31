
/*** fonction pour effacer le canvas et dessiner le joueur (appelée dans la fonction dessineJoueurs) ***/
function dessineJoueur(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(perso, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur);
}

/* fonction dessinant les joueurs sur l'écran d'accueil (appelée dans la fonction ecranAcuueil du fichier ecrans.js) */
function dessineJoueurs(context) {
	emplacementTexte= tailleTuile*cartes[0][0].length/2;
	ajouteTexte(texteChoixPerso, hauteurTitre, emplacementTexte, 20); // texte en haut du canvas avec l'instruction
	for (i=joueurs.length-1; i>=0; i--) { // parcourt le tableau des joueurs
		dessineJoueur(joueurs[i], context, tailleTuile*(cartes[0][0].length/2+i), tailleTuile*7.5, joueurs[i].largeur, joueurs[i].hauteur, Math.floor(joueurs[i].pose), dirJoueur);
	}

}

// clic sur le canvas (appelée dans la fonction ecranAcuueil du fichier ecrans.js)
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
	clicJoueur(context[2]);
}


function clicJoueur(context) { // détermine si le clic de la souris est sur une des images de choix de joueur (appelée dans la fonction clicCanvas)
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
			tileset.onload = ecranJeu(); // appel de la fonction du fichier ecrans.js une fois l'image de décor chargée
			context.clearRect(0,0, tailleTuile*carte1[0].length, tailleTuile);	// efface le texte d'instruction disant de cliquer sur le perso
			clic=1;
			return clic;
		}
	}
}

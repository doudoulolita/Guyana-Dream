/*** Création de l'image du joueur 1 ***/

var joueur1 = new Image(); // crée une nouvelle image
var joueur2 = new Image(); // crée une nouvelle image

joueurs = [joueur1, joueur2]; // tableau repertoriant les joueurs

joueur1.spritesheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet
joueur1.src = joueur1.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 1
joueur1.name = 'joueur1';

/* largeur et hauteur du perso */
joueur1.largeur = 32;
joueur1.hauteur = 32;

joueur1.vx =2; //vitesse initiale du joueur 1
joueur1.endurance = 0.97; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

// initialisation de la pose
joueur1.pose = 0;

/*** Création de l'image du joueur 2 ***/

joueur2.spritesheet="sprites/joueur2.png"; //chemin de l'image servant de spritesheet
joueur2.src = joueur2.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 2
joueur2.name = 'joueur2';

/* largeur et hauteur du perso */
joueur2.largeur = 32;
joueur2.hauteur = 48;

joueur2.vx =3; //vitesse initiale du joueur 2
joueur2.endurance = 0.94; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

// initialisation de la pose
joueur2.pose = 0;

// initialisation de la direction
var dirJoueur = 0;

largeurJoueurMax = joueurs[1].largeur; // on indique quel joueur a la largeur la plus grande (ici n'importe lequel)
hauteurJoueurMax = joueurs[1].hauteur; // on indique quel joueur a la hauteur la plus grande (ici joueur2)

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
	canvas.offsetLeft = 210;
	canvas.offsetTop = 137;
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

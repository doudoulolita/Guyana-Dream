/***** Initialisation des variables globales du personnage *****/

/*** Création de l'image du joueur ***/

let joueur1 = new Image(); // crée une nouvelle image

/*** Caractéristiques du joueur 1 ***/

joueur1.spritesheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet
joueur1.src = joueur1.spritesheet; // donne le chemin de l'image servant de spritesheet

/** Tableau des joueurs **/

let joueurs = [joueur1]; // tableau repertoriant les joueurs.

let numjoueur = 0; // numéro du joueur dans le tableau des joueurs

/* position initiale du perso */
let departJoueurX = 0; // position de départ au milieu de l'écran en largeur
let departJoueurY = tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

/* position de départ du joueur */
joueur1.posX = departJoueurX;
joueur1.posY = departJoueurY;

/* nombre et vitesse de changement de poses de la spritesheet */
joueur1.nbPoses = 5; // nombre de poses sur la spritesheet, en largeur
joueur1.vPose =  0.3; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

endurance = joueur1.endurance; // endurance du personnage. Plus elle est haute, moins la vitesse diminue au fil du temps

/* les joueurs possibles sont dans le fichier joueurs.js */

/*** Création des images des joueurs ***/

// nom du joueur 1
joueur1.name = 'joueur1';

/* largeur et hauteur du perso */
joueur1.largeur = 32;
joueur1.hauteur = 32;

let dir = 0; // intialisation de la direction du joueur

joueur1.vx =2; //vitesse initiale du joueur 1

// initialisation de la pose
joueur1.pose = 0;

joueur1.endurance = 0.97; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

largeurJoueurMax = joueurs[0].largeur; // on indique quel joueur a la largeur la plus grande (ici n'importe lequel)
hauteurJoueurMax = joueurs[0].hauteur; // on indique quel joueur a la hauteur la plus grande (ici joueur1 tant qu'on n'en a pas d'autres)

let clic = 0; // on n'a pas encore cliqué sur le canvas, la variable clic est donc à 0. Elle servira à savoir si on cliqué sur un singe en début de jeu

/*** Caractéristiques du joueur 2 ***/

let joueur2 = new Image(); // crée une nouvelle image 

joueur2.spritesheet="sprites/joueur2.png"; //chemin de l'image servant de spritesheet
joueur2.src = joueur2.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 2
joueur2.name = 'joueur2';

/* largeur et hauteur du perso */
joueur2.largeur = 32;
joueur2.hauteur = 48;

joueur2.vx =3; //vitesse initiale du joueur 2

// initialisation de la pose
joueur2.pose = 0;

joueur2.endurance = 0.94; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

joueurs.push(joueur2);

hauteurJoueurMax = joueurs[1].hauteur; // c'est maintenant ce joueur qui a la hauteur la plus grande

/*** Caractéristiques du joueur 3 ***/
let joueur3 = new Image(); // crée une nouvelle image

joueur3.spritesheet="sprites/joueur3.png"; //chemin de l'image servant de spritesheet
joueur3.src = joueur3.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 2
joueur3.name = 'joueur3';

/* largeur et hauteur du perso */
joueur3.largeur = 32;
joueur3.hauteur = 40;

joueur3.vx =4; //vitesse initiale du joueur 2

// initialisation de la pose
joueur3.pose = 0;

joueur3.endurance = 0.90; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

joueurs.push(joueur3);

/*** fonction pour dessiner le joueur (appelée dans la fonction dessineJoueurs) ***/
function dessineJoueur(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(perso, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur);
}

/* fonction dessinant les joueurs sur l'écran d'accueil (appelée dans la fonction ecranAcuueil du fichier ecrans.js) */
function dessineJoueurs(context) {
	emplacementTexte= tailleTuile*cartes[0][0].length/2;
	ajouteTexte(texteChoixPerso, hauteurTitre, emplacementTexte, 20); // texte en haut du canvas avec l'instruction
	for (let i=joueurs.length-1; i>=0; i--) { // parcourt le tableau des joueurs
		dessineJoueur(joueurs[i], context, tailleTuile*(cartes[0][0].length/2+i), tailleTuile*7.5, joueurs[i].largeur, joueurs[i].hauteur, Math.floor(joueurs[i].pose), dir);
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
	for (let i=numjoueur; i<joueurs.length; i++) { // parcourt le tableau des joueurs, en tenant compte de leur numéro (emplacement) dans le tableau
		if(xSourisCanvas>tailleTuile*(cartes[0][0].length/2+i) && xSourisCanvas<tailleTuile*(cartes[0][0].length/2+i)+largeurJoueurMax && ySourisCanvas>tailleTuile*6.5 && ySourisCanvas<tailleTuile*7.5+hauteurJoueurMax) { // vérifie à quel endroit on a cliqué par rapport à l'image de choix du joueur
			console.log(joueurs[i].name); // affiche le nom du joueur choisi dans la console web du navigateur
			joueur1.spritesheet=joueurs[i].spritesheet;
			// donne au personnage joueur les caractéristiques du perso cliqué
			joueur1.src = joueurs[i].spritesheet;
			joueur1.largeur = joueurs[i].largeur;
			joueur1.hauteur = joueurs[i].hauteur;
			joueur1.vx = joueurs[i].vx;
			joueur1.endurance = joueurs[i].endurance;
			tileset.onload = ecranJeu(); // appel de la fonction du fichier ecrans.js une fois l'image de décor chargée
			context.clearRect(0,0, tailleTuile*carte1[0].length, tailleTuile);	// efface le texte d'instruction disant de cliquer sur le perso
			clic=1;
			return clic;
		}
	}
}

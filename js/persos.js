/*** Création des images des joueurs ***/

let joueur = new Image(); // crée une nouvelle image

/*** Caractéristiques du joueur 1 ***/

joueur.spritesheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet
joueur.src = joueur.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 1
joueur.name = 'joueur1';

/* largeur et hauteur du perso */
joueur.largeur = 32;
joueur.hauteur = 32;

let dir = 0; // intialisation de la direction du joueur

joueur.vx =2; //vitesse initiale du joueur 1

// initialisation de la pose
joueur.pose = 0;

joueur.endurance = 0.97; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

/***** Initialisation des variables globales du personnage *****/

/* position initiale du perso */
let departJoueurX = 0; // position de départ au milieu de l'écran en largeur
let departJoueurY = tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

/* position de départ du joueur */
joueur.posX = departJoueurX;
joueur.posY = departJoueurY;

/* nombre et vitesse de changement de poses de la spritesheet */
joueur.nbPoses = 5; // nombre de poses sur la spritesheet, en largeur
joueur.vPose =  0.3; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

endurance = joueur.endurance; // endurance du personnage. Plus elle est haute, moins la vitesse diminue au fil du temps

/*** fonction pour dessiner le perso  ***/
function dessinePerso(joueur, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(joueur, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur); // dessine une des poses du perso à la position x, y
}

let touche = "";

let touchesDeplace = ["37","38","39","40"]; // tableau des touches du pavé directionnel

function deplacement(joueur, e, touche) { // fonction gérant le déplacement du joueur en fonction des touches de déplacement sur le clavier (appelée dans clavier.js)

	switch(touche) { // on va passer en revue les différentes possibilités de touche
		case "37": // Dans le cas de la touche gauche
			sens = 1; // donne le sens du personnage
			vitesse = -vx; // vitesse négative pour aller à gauche
			direct = 2; // 3ème ligne de la spritesheet
			break;
		case "39": // touche droite
			sens = -1;
			vitesse = vx; // vitesse positive pour aller à droite
			direct = 1; // 2ème ligne de la spritesheet
			break;
		case "38": // touche haut
			sens = 1;
			vitesse = -vx; // vitesse négative pour aller en haut
			direct = 3; // 4ème ligne de la spritesheet
			break;
		case "40": // touche bas
			sens = -1;
			vitesse = vx; // vitesse positive pour aller en bas
			direct = 0; // 1ère ligne de la spritesheet
			break;
	}

 	if(e.keyCode == touche) { // si la touche en paramètre est pressée
		
		if(touche==37 || touche==39) { joueur.posX += vitesse; dir = direct;} // changement de la coordonnée x et personnage avec le bon profil 
		if(touche==38 || touche==40) { joueur.posY += vitesse; dir = direct; } // changement de la coordonnée y et personnage de face ou de dos selon la touche
	} 

}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet (appelée dans le fichier clavier.js) ***/
function changePose(joueur, nbPoses, vPose) {
	joueur.pose += joueur.vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (joueur.pose >= joueur.nbPoses) {joueur.pose -= (joueur.nbPoses-1);} // si on dépasse le pnjbre maximum de pas (poses) sur une ligne, on revient au début.
}

function persoBouge(e) { // fonction qui sera appelée lors de l'évènement que constitue l'appui sur une touche (appelée dans la fonction ecranJeu du fichier ecrans.js)

	//déplacements du personnage en fonction des touches

	for (let i=0; i<touchesDeplace.length; i++) { // on parcourt le tableau des touches du pavé directionnel

		deplacement(joueur, e, touchesDeplace[i]); // appel de la fonction de déplacement lors de l'appui sur les touches (fichier deplacement.js)
	}

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(joueur, joueur.nbPoses, joueur.vPose); // appel de la fonction qui passe d'une pose à l'autre pour simuler le mouvement (fichier animation.js)
}


/***** fonction pour animer le personnage joueur (appelée dans la fonction animeTout du fichier main.js) *****/
function animePerso(joueur, context) {
	dessinePerso(joueur, context, joueur.posX, joueur.posY, joueur.largeur, joueur.hauteur, Math.floor(joueur.pose), dir); // appel de la fonction qui dessine le joueur, en transformant le chiffre de la pose en entier

	bloqueBords(); // appel de la fonction du fichier collision-bords.js

	bloqueTuiles(); // appel de la fonction du fichier collision-decor.js

	deplaceTuiles(); // appel de la fonction du fichier collision-objet.js
}

/** Tableau des joueurs **/

let joueurs = [joueur]; // tableau repertoriant les joueurs.

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

/*** fonction pour dessiner le joueur sur l'écran d'accueil (appelée dans la fonction dessineJoueurs) ***/
function dessineJoueur(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(perso, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur);
}

/* fonction dessinant les joueurs sur l'écran d'accueil (appelée dans la fonction ecranAccueil du fichier ecrans.js) */
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
	canvas.offsetLeft = 212;
	canvas.offsetTop = 138;
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
	for (let i=0; i<joueurs.length; i++) { // parcourt le tableau des joueurs, en tenant compte de leur numéro (emplacement) dans le tableau
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

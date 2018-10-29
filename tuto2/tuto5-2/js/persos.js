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

/*** fonction pour dessiner le perso  ***/
function dessinePerso(joueur, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(joueur, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur); // dessine une des poses du perso à la position x, y
}

let touche = "";

let touchesDeplace = ["37","38","39","40"]; // tableau des touches du pavé directionnel

function deplacement(joueur, e, touche) { // fonction gérant le déplacement du joueur en fonction des touches de déplacement sur le clavier (appelée dans clavier.js)

 	if(e.keyCode == touche) { // si la touche en paramètre est pressée

		switch(touche) { // on va passer en revue les différentes possibilités de touche
			case "37": // Dans le cas de la touche gauche
				sens = 1; // donne le sens du personnage
				joueur.posX -= joueur.vx; // vitesse négative pour aller à gauche
				dir = 2; // 3ème ligne de la spritesheet
				break;
			case "38": // touche haut
				sens = 1;
				joueur.posY -= joueur.vx; // vitesse négative pour aller en haut
				dir = 3; // 4ème ligne de la spritesheet
				break;
			case "39": // touche droite
				sens = -1;
				joueur.posX += joueur.vx; // vitesse positive pour aller à droite
				dir = 1; // 2ème ligne de la spritesheet
				break;

			case "40": // touche bas
				sens = -1;
				joueur.posY += joueur.vx; // vitesse positive pour aller en bas
				dir = 0; // 1ère ligne de la spritesheet
				break;
		}
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

	bloqueBords(); // appel de la fonction du fichier carte.js

	bloqueTuiles(); // appel de la fonction du fichier carte.js

	deplaceTuiles(); // appel de la fonction du fichier collision-objet.js
}

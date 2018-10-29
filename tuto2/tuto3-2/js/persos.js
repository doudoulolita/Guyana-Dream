/*** Création des images des joueurs ***/

let joueur = new Image(); // crée une nouvelle image

/*** Caractéristiques du joueur 1 ***/

joueur.spritesheet="joueur1.png"; //chemin de l'image servant de spritesheet
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
let departJoueurY = joueur.largeur*2; // position de départ au milieu de l'écran en hauteur

/* position de départ du joueur */
joueur.posX = departJoueurX;
joueur.posY = departJoueurY;



/*** fonction pour dessiner le perso  ***/
function dessinePerso(joueur, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(joueur, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur); // dessine une des poses du perso à la position x, y
}

let touche = "";

let touchesDeplace = ["37","38","39","40"]; // tableau des touches du pavé directionnel

function deplacement(joueur, e, touche) { // fonction gérant le déplacement du joueur en fonction des touches de déplacement sur le clavier

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

function persoBouge(e) { // fonction qui sera appelée lors de l'évènement que constitue l'appui sur une touche (appelée dans la fonction ecranJeu du fichier ecrans.js)

	//déplacements du personnage en fonction des touches

	for (let i=0; i<touchesDeplace.length; i++) { // on parcourt le tableau des touches du pavé directionnel

		deplacement(joueur, e, touchesDeplace[i]); // appel de la fonction de déplacement lors de l'appui sur les touches (fichier deplacement.js)
	}

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

}


/***** fonction pour animer le personnage joueur (appelée dans la fonction animeTout du fichier main.js) *****/
function animePerso(joueur, context) {
	dessinePerso(joueur, context, joueur.posX, joueur.posY, joueur.largeur, joueur.hauteur, Math.floor(joueur.pose), dir); // appel de la fonction qui dessine le joueur, en transformant le chiffre de la pose en entier
}

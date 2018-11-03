/*** Création des images des images ***/

let image = new Image(); // crée une nouvelle image

/*** Caractéristiques du image 1 ***/

image.spritesheet="pnj1-droite.png"; //chemin de l'image servant de spritesheet
image.src = image.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du image 1
image.name = 'image1';

/* largeur et hauteur du perso */
image.largeur = 32;
image.hauteur = 32;

let dir = 0; // intialisation de la direction du image

image.vx =2; //vitesse initiale du image 1

// initialisation de la pose
image.pose = 0;

/***** Initialisation des variables globales du personnage *****/

/* position initiale du perso */
let departimageX = 0; // position de départ au milieu de l'écran en largeur
let departimageY = image.largeur*2; // position de départ au milieu de l'écran en hauteur

/* position de départ du image */
image.posX = departimageX;
image.posY = departimageY;


/*** fonction pour dessiner le perso  ***/
function dessinePerso(image, context, x, y, largeur, hauteur) {
	context.drawImage(image, 0, 0, largeur, hauteur,  x, y, largeur, hauteur); // dessine une des poses du perso à la position x, y
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

		deplacement(image, e, touchesDeplace[i]); // appel de la fonction de déplacement lors de l'appui sur les touches (fichier deplacement.js)
	}

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

}

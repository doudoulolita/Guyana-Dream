/***** Initialisation des variables globales du personnage *****/

/* position initiale du perso */
let departJoueurX = 0, // position de départ au milieu de l'écran en largeur
    departJoueurY = tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

/*** Création de l'image du joueur ***/
let joueur = new Image(); // crée une nouvelle image

joueur.spritesheet = ""; // intialise le nom de la spritesheet

joueur = joueurs[0]; // initalise le joueur en prenant le premier du tableau des joueurs

joueur.src = joueur.spritesheet; // donne le chemin de l'image servant de spritesheet

/* largeur et hauteur du perso */
joueur.largeur = joueur.largeur;
joueur.hauteur = joueur.hauteur;

/* position de départ du joueur */
joueur.posX = departJoueurX;
joueur.posY = departJoueurY;

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
joueur.pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
joueur.nbPoses = 5, // nombre de poses sur la spritesheet, en largeur
joueur.vPose =  0.3; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

let dir = 0;

vx = joueur.vx; // vitesse de déplacement du personnage

endurance = joueur.endurance; // endurance du personnage. Plus elle est haute, moins la vitesse diminue au fil du temps

/* les différents joueurs possibles sont dans le fichier joueurs.js */

/***** Initialisation des variables globales du personnage *****/

/* position initiale du perso */
var departJoueurX = 0, // position de départ au milieu de l'écran en largeur
    departJoueurY = tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

var dir=0; // la direction 0 correspond à la première ligne de la spritesheet, donc de face

/*** Création de l'image du joueur ***/
var joueur = new Image(); // crée une nouvelle image

joueur.spritesheet = ""; // intialise le nom de la spritesheet

joueur = joueurs[joueurs.length-1]; // initalise le joueur en prenant le dernier du tableau des joueurs

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

vx = joueur.vx; // vitesse de déplacement du personnage

endurance = joueur.endurance; // endurance du personnage. Plus elle est haute, moins la vitesse diminue au fil du temps


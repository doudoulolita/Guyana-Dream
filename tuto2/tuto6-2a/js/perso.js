/***** Initialisation des variables globales du personnage *****/

var spriteSheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet

/* position initiale du perso */
var departJoueurX = 0, // position de départ au milieu de l'écran en largeur
    departJoueurY = tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

var dir=1; // la direction 1 correspond à la deuxième ligne de la spritesheet, donc le profil droit

var vx = 2; // vitesse de déplacement du personnage

/*** Création de l'image du joueur ***/
var joueur = new Image(); // crée une nouvelle image
joueur.src = spriteSheet; // donne le chemin de l'image servant de spritesheet

/* largeur et hauteur du perso */
joueur.largeur = 32
joueur.hauteur = 32

joueur.posX = departJoueurX;
joueur.posY = departJoueurY;

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
joueur.pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
joueur.nbPoses = 5, // nombre de poses sur la spritesheet, en largeur
joueur.vPose =  0.3; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

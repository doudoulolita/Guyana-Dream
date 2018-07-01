/***** Initialisation des variables globales du personnage non joueur *****/
var spriteSheetPnj="pnj1.png"; //chemin de l'image servant de spritesheet

/* largeur et hauteur du pnj */
var largeurPnj = 48,
    hauteurPnj = 32;

/* position initiale du pnj */
var departX= 0;
var departY= imageY;

var pnjX = departX, // position de départ du pnj
    pnjY = departY; // position de départ du pnj en hauteur

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
var pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
    nbPoses = 5, // nombre de poses sur la spritesheet, en largeur
    vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

var dir=1; // la direction 1 correspond à la deuxième ligne de la spritesheet, donc le profil droit

var pnjV = 1; // vitesse de déplacement du pnj

/*** Création de l'image du pnj ***/
var pnj = new Image(); // crée une nouvelle image
pnj.src = spriteSheetPnj; // donne le chemin de l'image servant de spritesheet

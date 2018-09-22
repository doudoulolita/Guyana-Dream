/***** Initialisation des variables globales du personnage non joueur *****/
var spriteSheetPnj="sprites/pnj1.png"; //chemin de l'image servant de spritesheet

/* position initiale du pnj */
var departX= 0;
var departY= 5* tailleTuile;



var dirPnj=1; // la direction 1 correspond à la deuxième ligne de la spritesheet, donc le profil droit

/*** Création de l'image du pnj ***/
var pnj = new Image(); // crée une nouvelle image
pnj.src = spriteSheetPnj; // donne le chemin de l'image servant de spritesheet

/* largeur et hauteur du pnj */
pnj.largeur = 48,
pnj.hauteur = 32;

pnj.posX2 = departX;
pnj.posY2 = departY;

pnj.v = 2;

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
pnj.pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
pnj.nbPoses = 5, // nombre de poses sur la spritesheet, en largeur
pnj.vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

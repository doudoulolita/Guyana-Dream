/*** Création de l'image du pnj ***/
let pnj = new Image(); // crée une nouvelle image

/***** Initialisation des variables globales du personnage non joueur *****/
let spriteSheetPnj="pnj1.png"; //chemin de l'image servant de spritesheet
pnj.src = spriteSheetPnj; // donne le chemin de l'image servant de spritesheet

/* largeur et hauteur du pnj */
let largeurPnj = 48;
let hauteurPnj = 32;

/* position initiale du pnj */
let departX= 0;
let departY= imageY;

/* initialisation de la position du pnj */
let pnjX = departX; 
let pnjY = departY; 

let dir=1; // la direction 1 correspond à la deuxième ligne de la spritesheet, donc le profil droit

let pnjV = 1; // vitesse de déplacement du pnj

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
let pose = 1; // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
let nbPoses = 5; // nombre de poses sur la spritesheet, en largeur
let vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement
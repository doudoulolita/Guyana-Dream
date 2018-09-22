/***** Initialisation des variables globales du personnage non joueur *****/
let spriteSheetEnnemi="sprites/ennemi1.png"; //chemin de l'image servant de spritesheet

/*** Création de l'image du ennemi ***/
let ennemi = new Image(); // crée une nouvelle image
ennemi.src = spriteSheetEnnemi; // donne le chemin de l'image servant de spritesheet

ennemi.name = "jaguar";

/* largeur et hauteur du ennemi */
ennemi.largeur = 72,
ennemi.hauteur = 64;

/* position initiale du ennemi */
ennemi.departX= 9*tailleTuile;
ennemi.departY= 7* tailleTuile;

ennemi.arriveeX=20* tailleTuile;

/* on redonne la position du ennemi maintenant que l'image est créée */
ennemi.posX2 = ennemi.departX; 
ennemi.posY2 = ennemi.departY;

/* vitesse du ennemi */
ennemi.v = 0.5;

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
ennemi.pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
ennemi.nbPoses = 4, // nombre de poses sur la spritesheet, en largeur
ennemi.vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement


ennemi.collision = 0;

ennemi.texte = "Tu ne passes pas !";

ennemi.texteFin = "Reviens me voir !";

ennemiDir = 1;

/***** Initialisation des variables globales du personnage *****/

var sprite="pnj1-droite.png"; //chemin de l'image servant de spritesheet

/* largeur et hauteur du perso */
var largeurPerso = 32,
    hauteurPerso = 32;

/* position initiale du perso */
var x = 0, // position de départ sur l'axe x, tout à gauche
    y= hauteurPerso; // position de départ sur l'axe y

var vx = 1; // vitesse de déplacement du personnage
var vy = 0.5;

/*** Création de l'image du joueur ***/
var joueur = new Image(); // crée une nouvelle image
joueur.src = sprite; // donne le chemin de l'image servant de spritesheet


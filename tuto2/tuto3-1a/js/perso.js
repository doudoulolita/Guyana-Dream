/*** Création de l'image du joueur ***/
let joueur = new Image(); // crée une nouvelle image

/***** Initialisation des variables globales du personnage *****/

let sprite="pnj1-droite.png"; //chemin de l'image servant de spritesheet

joueur.src = sprite; // donne le chemin de l'image servant de spritesheet

/* largeur et hauteur du perso */
let largeurPerso = 32;
let hauteurPerso = 32;

/* position initiale du perso */
let x = 0; // position de départ au milieu de l'écran en largeur
let y= hauteurPerso; // position de départ au milieu de l'écran en hauteur

let vx = 2; // vitesse de déplacement du personnage


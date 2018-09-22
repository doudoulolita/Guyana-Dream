/*** Création de l'image du joueur ***/
let joueur = new Image(); // crée une nouvelle image

/***** Initialisation des variables globales du personnage *****/

let sprite="joueur1.png"; //chemin de l'image servant de spritesheet
joueur.src = sprite; // donne le chemin de l'image servant de spritesheet

/* largeur et hauteur du perso */
let largeurPerso = 32;
let hauteurPerso = 32;

/* position initiale du perso */
let x = 0; // position de départ au milieu de l'écran en largeur
let y= hauteurPerso; // position de départ au milieu de l'écran en hauteur

let dir = 0; // direction dans laquelle regarde le perso (ici ligne 1 de la spritesheet)
let pose = 1; // 1ère position de la marche (ici colonne 2 de la spritesheet, la colonne 1 étant l'immobilité)



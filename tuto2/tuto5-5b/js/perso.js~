/***** Initialisation des variables globales du personnage *****/

let spriteSheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet

/* largeur et hauteur du perso */
let largeurPerso = 32,
    hauteurPerso = 32;

/* position initiale du perso */
let x = 0, // position de départ au milieu de l'écran en largeur
    y= tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
let pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
    nbPoses = 5, // nombre de poses sur la spritesheet, en largeur
    vPose =  0.3; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement


let dir=1; // la direction 1 correspond à la deuxième ligne de la spritesheet, donc le profil droit

let vx = 2; // vitesse de déplacement du personnage

/*** Création de l'image du joueur ***/
let joueur = new Image(); // crée une nouvelle image
joueur.src = spriteSheet; // donne le chemin de l'image servant de spritesheet




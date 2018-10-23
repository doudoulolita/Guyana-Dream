/*** Création des images des joueurs ***/

let joueur = new Image(); // crée une nouvelle image

joueur.spritesheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet
joueur.src = joueur.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 1
joueur.name = 'joueur1';

/* largeur et hauteur du perso */
joueur.largeur = 32;
joueur.hauteur = 32;

joueur.vx =2; //vitesse initiale du joueur 1
joueur.endurance = 0.97; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

// initialisation de la pose
joueur.pose = 0;

/***** Initialisation des variables globales du personnage *****/

/* position initiale du perso */
let departJoueurX = 0; // position de départ au milieu de l'écran en largeur
let departJoueurY = tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

/* position de départ du joueur */
joueur.posX = departJoueurX;
joueur.posY = departJoueurY;

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
joueur.nbPoses = 5; // nombre de poses sur la spritesheet, en largeur
joueur.vPose =  0.3; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

let dir = 0;

endurance = joueur.endurance; // endurance du personnage. Plus elle est haute, moins la vitesse diminue au fil du temps

/* les différents joueurs possibles */

let joueur2 = new Image(); // crée une nouvelle image

/*** Création de l'image du joueur 2 ***/

joueur2.spritesheet="sprites/joueur2.png"; //chemin de l'image servant de spritesheet
joueur2.src = joueur2.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 2
joueur2.name = 'joueur2';

/* largeur et hauteur du perso */
joueur2.largeur = 32;
joueur2.hauteur = 48;

joueur2.vx =3; //vitesse initiale du joueur 2
joueur2.endurance = 0.94; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

// initialisation de la pose
joueur2.pose = 0;

/** Tableau des joueurs **/

let joueurs = [joueur, joueur2]; // tableau repertoriant les joueurs

largeurJoueurMax = joueurs[1].largeur; // on indique quel joueur a la largeur la plus grande (ici n'importe lequel)
hauteurJoueurMax = joueurs[1].hauteur; // on indique quel joueur a la hauteur la plus grande (ici joueur2)

/*** Création des images des joueurs ***/

let joueur = new Image(); // crée une nouvelle image

/***** Initialisation des variables globales du personnage *****/

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

/* position initiale du perso */
let departJoueurX = 0; // position de départ au milieu de l'écran en largeur
let departJoueurY = tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

/* position de départ du joueur */
joueur.posX = departJoueurX;
joueur.posY = departJoueurY;

/* nombre et vitesse de changement de poses de la spritesheet */
joueur.nbPoses = 5; // nombre de poses sur la spritesheet, en largeur
joueur.vPose =  0.3; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

let dir = 0; // initialisation de la direction du joueur

endurance = joueur.endurance; // endurance du personnage. Plus elle est haute, moins la vitesse diminue au fil du temps

/** Tableau des joueurs **/

let joueurs = [joueur]; // tableau repertoriant les joueurs. On met d'abord le premier et on ajoutera les autres ensuite

let clic = 0; // on n'a pas encore cliqué sur le canvas, la variable clic est donc à 0. Elle servira à savoir si on cliqué sur un singe en début de jeu

/*** Caractéristiques du joueur 2 ***/

let joueur2 = new Image(); // crée une nouvelle image 

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

joueurs.push(joueur2); // ajoute ce joueur au tableau des joueurs

hauteurJoueurMax = joueurs[1].hauteur; // c'est maintenant ce joueur qui a la hauteur la plus grande

/*** Caractéristiques du joueur 3 ***/
let joueur3 = new Image(); // crée une nouvelle image

joueur3.spritesheet="sprites/joueur3.png"; //chemin de l'image servant de spritesheet
joueur3.src = joueur3.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 3
joueur3.name = 'joueur3';

/* largeur et hauteur du perso */
joueur3.largeur = 32;
joueur3.hauteur = 40;

joueur3.vx =4; //vitesse initiale du joueur 3
joueur3.endurance = 0.90; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

// initialisation de la pose
joueur3.pose = 0;

joueurs.push(joueur3); // ajoute ce joueur au tableau des joueurs

largeurJoueurMax = joueurs[0].largeur; // on indique quel joueur a la largeur la plus grande (ici n'importe lequel)
hauteurJoueurMax = joueurs[1].hauteur; // on indique quel joueur a la hauteur la plus grande (ici joueur2)

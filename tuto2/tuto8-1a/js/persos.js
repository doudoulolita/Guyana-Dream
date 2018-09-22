/*** Création des images des joueurs ***/

let joueur1 = new Image(); // crée une nouvelle image

/*** Caractéristiques du joueur 1 ***/

joueur1.spritesheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet
joueur1.src = joueur1.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 1
joueur1.name = 'joueur1';

/* largeur et hauteur du perso */
joueur1.largeur = 32;
joueur1.hauteur = 32;

let dir = 0; // intialisation de la direction du joueur

joueur1.vx =2; //vitesse initiale du joueur 1

// initialisation de la pose
joueur1.pose = 0;

joueur1.endurance = 0.97; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

/** Tableau des joueurs **/

let joueurs = [joueur1]; // tableau repertoriant les joueurs.

let numjoueur = 0; // numéro du joueur dans le tableau des joueurs

largeurJoueurMax = joueurs[0].largeur; // on indique quel joueur a la largeur la plus grande (ici n'importe lequel)
hauteurJoueurMax = joueurs[0].hauteur; // on indique quel joueur a la hauteur la plus grande (ici joueur1 tant qu'on n'en a pas d'autres)

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

// initialisation de la pose
joueur2.pose = 0;

joueur2.endurance = 0.94; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

joueurs.push(joueur2);

hauteurJoueurMax = joueurs[1].hauteur; // c'est maintenant ce joueur qui a la hauteur la plus grande

/*** Caractéristiques du joueur 3 ***/
let joueur3 = new Image(); // crée une nouvelle image

joueur3.spritesheet="sprites/joueur3.png"; //chemin de l'image servant de spritesheet
joueur3.src = joueur3.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 2
joueur3.name = 'joueur3';

/* largeur et hauteur du perso */
joueur3.largeur = 32;
joueur3.hauteur = 40;

joueur3.vx =4; //vitesse initiale du joueur 2

// initialisation de la pose
joueur3.pose = 0;

joueur3.endurance = 0.90; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

joueurs.push(joueur3);



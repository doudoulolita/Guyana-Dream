/*** Création de l'image du joueur 1 ***/

let joueur1 = new Image(); // crée une nouvelle image
let joueur2 = new Image(); // crée une nouvelle image
let joueur3 = new Image(); // crée une nouvelle image

let joueurs = [joueur1, joueur2, joueur3]; // tableau repertoriant les joueurs

joueur1.spritesheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet
joueur1.src = joueur1.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 1
joueur1.name = 'joueur1';

/* largeur et hauteur du perso */
joueur1.largeur = 32;
joueur1.hauteur = 32;

joueur1.vx =2; //vitesse initiale du joueur 1
joueur1.endurance = 0.97; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

// initialisation de la pose
joueur1.pose = 0;

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

/*** Création de l'image du joueur 3 ***/

joueur3.spritesheet="sprites/joueur3.png"; //chemin de l'image servant de spritesheet
joueur3.src = joueur3.spritesheet; // donne le chemin de l'image servant de spritesheet

// nom du joueur 2
joueur3.name = 'joueur3';

/* largeur et hauteur du perso */
joueur3.largeur = 32;
joueur3.hauteur = 40;

joueur3.vx =4; //vitesse initiale du joueur 2
joueur3.endurance = 0.90; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

// initialisation de la pose
joueur3.pose = 0;

// initialisation de la direction
let dirJoueur = 0;

largeurJoueurMax = joueurs[1].largeur; // on indique quel joueur a la largeur la plus grande (ici n'importe lequel)
hauteurJoueurMax = joueurs[1].hauteur; // on indique quel joueur a la hauteur la plus grande (ici joueur2)

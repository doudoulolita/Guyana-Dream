/*** Création de l'image du joueur 1 ***/

let joueur1 = new Image(); // crée une nouvelle image
joueur1.spritesheet="sprites/joueur1.png"; //chemin de l'image servant de spritesheet
joueur1.src = joueur1.spritesheet; // donne le chemin de l'image servant de spritesheet

joueur1.name = 'joueur1';

/* largeur et hauteur du perso */
joueur1.largeur = 32;
joueur1.hauteur = 32;

joueur1.vx =2; //vitesse initiale du joueur 1
joueur1.endurance = 0.95; // il perd de la vitesse suivant son endurance. Si elle est élévée, il perd moins de vitesse

joueur1.pose = 1;

/*** Création de l'image du joueur 2 ***/

let joueur2 = new Image(); // crée une nouvelle image
joueur2.spritesheet="sprites/joueur2.png"; //chemin de l'image servant de spritesheet
joueur2.src = joueur2.spritesheet; // donne le chemin de l'image servant de spritesheet

joueur2.name = 'joueur2';

/* largeur et hauteur du perso */
joueur2.largeur = 32;
joueur2.hauteur = 48;

joueur2.vx =3;
joueur2.endurance = 0.92;

joueur2.pose = 1;
let dirJoueur = 0;

joueurs = [joueur1, joueur2];

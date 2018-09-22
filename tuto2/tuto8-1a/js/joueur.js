/***** Initialisation des variables globales du personnage *****/

/*** Création de l'image générale du joueur ***/
let joueur = new Image(); // crée une nouvelle image

joueur = joueurs[0]; // initialise le joueur en prenant le premier du tableau des joueurs

/* position initiale du perso */
let departJoueurX = 0; // position de départ au milieu de l'écran en largeur
let departJoueurY = tailleTuile -(tailleTuile/2); // position de départ au milieu de l'écran en hauteur

/* position de départ du joueur */
joueur.posX = departJoueurX;
joueur.posY = departJoueurY;

/* nombre et vitesse de changement de poses de la spritesheet */
joueur.nbPoses = 5; // nombre de poses sur la spritesheet, en largeur
joueur.vPose =  0.3; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

endurance = joueur.endurance; // endurance du personnage. Plus elle est haute, moins la vitesse diminue au fil du temps

/* les joueurs possibles sont dans le fichier joueurs.js */

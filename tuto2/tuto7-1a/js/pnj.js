/***** Initialisation des variables globales du personnage non joueur *****/
let spriteSheetPnj="sprites/pnj1.png"; //chemin de l'image servant de spritesheet

/*** Création de l'image du pnj ***/
let pnj = new Image(); // crée une nouvelle image
pnj.src = spriteSheetPnj; // donne le chemin de l'image servant de spritesheet

pnj.name = "ara";

/* largeur et hauteur du pnj */
pnj.largeur = 48,
pnj.hauteur = 32;

/* position initiale du pnj */
pnj.departX= 0;
pnj.departY= 5* tailleTuile;

pnj.arriveeX= 4* tailleTuile;

/* on redonne la position du pnj maintenant que l'image est créée */
pnj.posX2 = pnj.departX; 
pnj.posY2 = pnj.departY;

/* vitesse du pnj */
pnj.v = 0.5;

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
pnj.pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
pnj.nbPoses = 5, // nombre de poses sur la spritesheet, en largeur
pnj.vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

pnjDir = 1;

pnj.collision = 0;

pnj.texte = "Trouve les fleurs !";


pnj.texteQueteOk = "Tu as trouvé les fleurs !";

pnj.texteGagne = "Bravo ! Super classe !";

pnj.textePerd = "Dommage... Rejoue !";

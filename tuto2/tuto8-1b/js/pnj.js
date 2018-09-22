/*** Création de l'image du pnj ***/
let pnj = new Image(); // crée une nouvelle image

/***** Initialisation des variables globales du personnage non joueur *****/
let spriteSheetPnj="sprites/pnj1.png"; //chemin de l'image servant de spritesheet
pnj.src = spriteSheetPnj; // donne le chemin de l'image servant de spritesheet

pnj.name = "ara";

/* largeur et hauteur du pnj */
pnj.largeur = 48;
pnj.hauteur = 32;

/* position initiale du pnj */
pnj.departX= 0;
pnj.departY= 5* tailleTuile;

/* on redonne la position du pnj maintenant que l'image est créée */
pnj.posX2 = pnj.departX; 
pnj.posY2 = pnj.departY;

let pnjDir = 1; // initialisation de la direction du personnage

/* vitesse du pnj */
pnj.v = 0.5;

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
pnj.pose = 1; // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
pnj.nbPoses = 5; // nombre de poses sur la spritesheet, en largeur
pnj.vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

pnj.arriveeX= 4* tailleTuile;

pnj.collision = 0;

pnj.texte = "Trouve les fleurs !";
pnj.texteQueteOk = "Tu as trouvé les fleurs !";
pnj.texteGagne = "Bravo ! Super classe !";
pnj.textePerd = "Dommage... Rejoue !";

let collision = 0; // avant toute collision avec le pnj


/*** Création de l'image du ennemi ***/
let ennemi = new Image(); // crée une nouvelle image

/***** Initialisation des variables globales du personnage non joueur *****/
let spriteSheetEnnemi="sprites/ennemi1.png"; //chemin de l'image servant de spritesheet
ennemi.src = spriteSheetEnnemi; // donne le chemin de l'image servant de spritesheet

ennemi.name = "jaguar";

/* largeur et hauteur du ennemi */
ennemi.largeur = 72,
ennemi.hauteur = 64;

/* position initiale du ennemi */
ennemi.departX= 9*tailleTuile;
ennemi.departY= 7* tailleTuile;

/* on redonne la position de l'ennemi maintenant que l'image est créée */
ennemi.posX2 = ennemi.departX; 
ennemi.posY2 = ennemi.departY;

ennemiDir = 1;

/* vitesse de l'ennemi */
ennemi.v = 0.5;

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
ennemi.pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
ennemi.nbPoses = 4, // nombre de poses sur la spritesheet, en largeur
ennemi.vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement

ennemi.arriveeX=20* tailleTuile;

ennemi.collision = 0;

ennemi.texte = "Tu ne passes pas !";
ennemi.texteFin = "Reviens me voir !";

function rondDegrade(x, y) { // fonction dessinant un rond dégradé (sera appelée dans la fonction rencontre)

	// Créer un dégradé
	let radgrad = context[1].createRadialGradient(x-20, y, 10, x-20+7, y+5, 30);
	radgrad.addColorStop(0, '#F4F201');
	radgrad.addColorStop(0.8, '#E4C700');
	radgrad.addColorStop(1, 'rgba(228, 199, 0, 0)');
	  
	// dessiner des formes
	context[1].fillStyle = radgrad;
	context[1].fillRect(x-20-joueur1.largeur, y-joueur1.largeur, 150, 150);
}

/***** fonction pour effacer le rond au bout d'un moment (sera appelée dans la fonction rencontre) *****/
function supprimeRond() {
	setTimeout(function() { // cette fonction se lancera quand le temps décidé sera écoulé

  		context[1].clearRect(0,0, carte1[0].length*tailleTuile, carte1.length*tailleTuile);
  		context[4].clearRect(0,0, carte1[0].length*tailleTuile, carte1.length*tailleTuile);

	}, 2000); // la fonction s'exécute au bout du temps indiqué.
}

function rencontre(pnj, textePnj) { // fonction gérant la collision avec le pnj (appelée dans le fichier animation.js)

	// vérification de la position du personnage par rapport à la tuile interdite, changement de coordonnées suivant la direction pour qu'il ne reste pas bloqué

	if (joueur1.posX + joueur1.largeur > pnj.posX2 && joueur1.posX - tailleTuile < pnj.posX2 && joueur1.posY + joueur1.hauteur > pnj.posY2 && joueur1.posY - tailleTuile < pnj.posY2) {
		console.log(pnj.name);

			if (pnj.collision == 0) {
				bulleTexte(pnj.texte, pnj.posX2, pnj.posY2); // affiche une "bulle" de dialogue
				if (pnj==ennemi) {
					pointsEnergie -= 3; // les points d'énergie diminuent quand on touche l'ennemi
				}

			}

			if (pnj==ennemi && pnj.collision == 0) { 

				rondDegrade(joueur1.posX, joueur1.posY); // crée un rond dégradé

				context[2].globalAlpha = 0.7; // diminue l'opacité du perso
				supprimeRond() ; // supprime le rond au bout d'un certain temps.
			} 


			pnj.collision += 1; // permettra de savoir ensuite qu'on a touché le pnj

			console.log(pnj.collision+" - pnj !");

		switch(dir) { // on va évaluer la direction du personnage joueur
			case 1: 
				joueur1.posX -= 1; // on enlève 1 à la position posX du joueur pour qu'il se décale horizontalement par rapport au pnj
				// pnj.v=0; // on arrête le déplacement du pnj en mettant sa vitesse à 0
				// dirPnj=0; // on le fait regarder de face
				break;
			case 2:
				joueur1.posX += 1; // on ajoute 1 à la position posX du joueur pour qu'il se décale horizontalement par rapport au pnj
				// pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				 // dirPnj=0; // on le fait regarder de face
				break;

	 		case 0: 
				joueur1.posY -= 1; // on enlève 1 à la position posY du joueur pour qu'il se décale verticalement par rapport au pnj
				// pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				 // dirPnj=0; // on le fait regarder de face
				break;
			case 3:
				joueur1.posY += 1; // on ajoute 1 à la position posY du joueur pour qu'il se décale verticalementement par rapport au pnj
				// pnj.v=0; //on arrête le déplacement du pnj en mettant sa vitesse à 0
				 // dirPnj=0; // on le fait regarder de face
				break;
		}


	}
}

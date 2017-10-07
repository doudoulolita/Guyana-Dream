/***** Initialisation des variables globales du personnage *****/

var spriteSheet=dossierPersos+"pnj1.png"; //chemin de l'image servant de spritesheet

/* largeur et hauteur du perso */
var largeurPnj = 48,
    hauteurPnj = 32;

/* position initiale du perso */
var pnjX = 0, pnjY = 6*tailleTuile;//position du PNJ au début du jeu	

/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
var pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
    nbPoses = 5, // nombre de poses sur la spritesheet, en largeur
    vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement


var dirPnj=1; // la direction 1 correspond à la deuxième ligne de la spritesheet, donc le profil droit

var vx = 2; // vitesse de déplacement du personnage

/*** Création de l'image du joueur ***/
var pnj = new Image(); // crée une nouvelle image
pnj.src = spriteSheet; // donne le chemin de l'image servant de spritesheet


/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePnj(x, y, pose, dir) {
	context[2].clearRect(0, 0, canvasLargeur, canvasHauteur);
	context[2].drawImage(pnj, largeurPnj*pose, hauteurPnj*dirPnj, largeurPnj, hauteurPnj,  pnjX,pnjY, largeurPnj, hauteurPnj);
}

/*** fonction gérant la direction du déplacement du personnage ***/
function deplacementPnj() {
	pnjX += vx; // le perso avance horizontalement selon la vitesse indiquée

	inverseDeplacementPnj(); // si les bords sont  atteints, cette fonction inverse le déplacement
	changeDirectionBordsPnj(); // si les bords sont atteints, cette fonction change le sens du personnage
}

/* fonction gérant le changement de sens du personnage près de chaque bord */
function changeDirectionBordsPnj() {
	if (pnjX >= canvasLargeur - (largeurPnj*1.5)) {
		dirPnj =2; // on change la direction quand le perso s'approche du bord droit
	}
	if (pnjX <= largeurPnj*0.5) {
		dirPnj =1; // on change la direction quand le perso s'approche du bord gauche
	}
}

/* fonction gérant les changements de direction du personnage près des bords */
function inverseDeplacementPnj() {
	// condition pour éviter que le perso ne dépasse sur les bords du canvas. On enlève la largeur du perso à droite sinon, il déborde du cadre.
	if (pnjX > canvasLargeur - largeurPnj || pnjX < 0) {
		vx *= -1; // quand les bords sont atteints, on inverse la vitesse
	}
}


/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePosePnj() {
	pose += vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (pose >= nbPoses) pose -= (nbPoses-1); // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}


/***** fonction pour animer le personnage *****/
function animePnj() {
	dessinePnj(pnjX, pnjY, Math.floor(pose), dir); // appel de la fonction qui dessine le personnage, en transformant le chiffre de la pose en entier
	deplacementPnj(); // appel de la fonction de déplacement du personnage
	changePosePnj(); // appel de la fonction d'animation du personnage    
	requestAnimationFrame(animePnj); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}

/***** Initialisation des variables globales du personnage *****/

var tableauPnjs = [
	["pnj1", 48, 32, 30, 5*tailleTuile, 20],
	["pnj2", 48, 32, 30, 7*tailleTuile, 20]
]; //Le tableau donne les noms de nos personnages

function nomPnj(numPnj) {
	pnjStyle = tableauPnjs[numPnj][0];
	pnjNom=pnjStyle + (numPnj+1).toString();
	pnj=eval(pnjNom);
	pnj = new Image(); // crée une nouvelle image
}

/*** Création de l'image du joueur ***/


var dossierPnj="sprites/"; // dans notre jeu, les fichiers concerment les persos sont rangés dans ce dossier
var extensionPnj=".png"; // dans notre jeu, tous les fichiers des persos finissent par 2 et sont des png


/* initialisation, nombre et vitesse de changement de poses de la spritesheet */
var pose = 1, // la pose 0 (ou frame 0) n'est pas comptée car elle correspond à l'immobilité.
    nbPoses = 5, // nombre de poses sur la spritesheet, en largeur
    vPose =  0.15; //valeur permettant de passer à la pose suivante dans la spritesheet plus ou moins rapidement


var dirPnj=1; // la direction 1 correspond à la deuxième ligne de la spritesheet, donc le profil droit


function cheminPnj(numPnj) {
	spriteSheetPnj = dossierPnj+"pnj"+(numPnj+1)+extensionPnj;
	prechargerImages(spriteSheetPnj);
}

function coordsPerso(numPnj) {
	/* largeur et hauteur du perso */
	largeurPnj = tableauPnjs[numPnj][1],
	hauteurPnj = tableauPnjs[numPnj][2];

	/* position initiale du perso */
	pnjX = tableauPnjs[numPnj][3];
	pnjY = tableauPnjs[numPnj][4];//position du PNJ au début du jeu	
}


/*** fonction gérant la direction du déplacement du personnage ***/
function deplacementPnj(numPnj) {

	vx=tableauPnjs[numPnj][5];
	pnjX += vx; // le perso avance horizontalement selon la vitesse indiquée


	changeDirectionBordsPnj(numPnj);
	inverseDeplacementPnj(numPnj);

}

/* fonction gérant le changement de sens du personnage près de chaque bord */
function changeDirectionBordsPnj(numPnj) {
	if (pnjX >= canvasLargeur - (largeurPnj*1.5)) {
		dirPnj =2; // on change la direction quand le perso s'approche du bord droit
	}
	if (pnjX <= largeurPnj*0.5) {
		dirPnj =1; // on change la direction quand le perso s'approche du bord gauche
	}
}

/* fonction gérant les changements de direction du personnage près des bords */
function inverseDeplacementPnj(numPnj) {
	// condition pour éviter que le perso ne dépasse sur les bords du canvas. On enlève la largeur du perso à droite sinon, il déborde du cadre.
	if (pnjX > canvasLargeur - largeurPnj || pnjX < 0) {
		vx *= -1; // quand les bords sont atteints, on inverse la vitesse
	}
}


/*** fonction pour effacer le canvas et dessiner le personnage ***/
function dessinePnj(numPnj, pnjY, pose, dir, ctx) {

	spriteSheetPnj = dossierPnj+"pnj"+(numPnj+1)+extensionPnj;
	pnj.src = spriteSheetPnj; // donne le chemin de l'image servant de spritesheet
	ctx.drawImage(pnj, largeurPnj*pose, hauteurPnj*dirPnj, largeurPnj, hauteurPnj,  pnjX, pnjY, largeurPnj, hauteurPnj);
	deplacementPnj(numPnj)

}

/*** fonction gérant le changement de pas (pose ou frame) dans la spritesheet) ***/
function changePosePnj(numPnj) {
	pose += vPose; // permet de passer au pas (pose) suivant plus ou moins rapidement
	if (pose >= nbPoses) pose -= (nbPoses-1); // si on dépasse le nombre maximum de pas (poses) sur une ligne, on revient au début.
}

/***** fonction pour animer le personnage *****/
function animePnj() {
	nomPnj(0);
	coordsPerso(0);

	cheminPnj(0); 
	context[2].clearRect(0, 0, canvasLargeur, canvasHauteur);

	deplacementPnj(0);

	dessinePnj(0, pnjY, Math.floor(pose), dir, context[2]);
	changePosePnj(0); // appel de la fonction d'animation du personnage  

	dessinePnj(1, 7*tailleTuile, Math.floor(pose), dir, context[2]);
	deplacementPnj(1);

	requestAnimationFrame(animePnj); // appel de la fonction qui permet de répéter l'animation (à l'aide d'un callback)
}





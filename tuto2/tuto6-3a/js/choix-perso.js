/*** Création de l'image du joueur 1 ***/


var joueur1 = new Image(); // crée une nouvelle image
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


var joueur2 = new Image(); // crée une nouvelle image
joueur2.spritesheet="sprites/joueur2.png"; //chemin de l'image servant de spritesheet
joueur2.src = joueur2.spritesheet; // donne le chemin de l'image servant de spritesheet

joueur2.name = 'joueur2';

/* largeur et hauteur du perso */
joueur2.largeur = 32;
joueur2.hauteur = 48;

joueur2.vx =3;
joueur2.endurance = 0.92;

joueur2.pose = 1;
var dirJoueur = 0;

joueurs = [joueur1, joueur2];

/*** fonction pour effacer le canvas et dessiner le PNJ ***/
function dessineJoueur(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(perso, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur);
}

function dessineJoueurs() {
	for (i=joueurs.length-1; i>=0; i--) {
		dessineJoueur(joueurs[i], context[4], largeurCanvas-(2*tailleTuile)-(tailleTuile*i+1), tailleTuile*6.5, joueurs[i].largeur, joueurs[i].hauteur, Math.floor(joueurs[i].pose), dirJoueur);
	}

}

// clic sur le canvas
function clicCanvas(e){	
	// position de la souris / document
	xSourisDocument = e.pageX; 
    	ySourisDocument = e.pageY;
	// position du canvas / document
	canvas.offsetLeft = 190;
	canvas.offsetTop = 83;
	xCanvas = canvas.offsetLeft;
	yCanvas = canvas.offsetTop;
	console.log('Clic document = '+ xSourisDocument+'-'+ySourisDocument+'\n');
	// position du clic / canvas
	xSourisCanvas = xSourisDocument - xCanvas;
	ySourisCanvas = ySourisDocument - yCanvas;

	console.log('Clic canvas = '+xSourisCanvas+'-'+ySourisCanvas+'\n');

	clicJoueur();
}



function clicJoueur() {
	for (i=joueurs.length-1; i>=0; i--) {
		if(xSourisCanvas>largeurCanvas-(tailleTuile*(i+2)) && xSourisCanvas<largeurCanvas-(tailleTuile*(i+2))+joueur1.largeur && ySourisCanvas>tailleTuile*6.5 && ySourisCanvas<tailleTuile*6.5+joueur2.hauteur) {
			console.log(joueurs[i].name);
			joueur.spritesheet = joueurs[i].spritesheet; 
			joueur.src = joueurs[i].spritesheet;
			joueur.largeur = joueurs[i].largeur;
			joueur.hauteur = joueurs[i].hauteur;
			joueur.vx = joueurs[i].vx;
			joueur.endurance = joueurs[i].endurance;
		
		}
	}
}

	canvas = document.getElementById('textes');

	canvas.addEventListener("click", clicCanvas, false);	// vérifie si on clique sur un des singes


/* dessin de la map */

// récupère le canvas sur lequel on va dessiner
var canvas = document.getElementById('canvas');
// récupération du context qui permet de dessiner sur les canvas
var context = canvas.getContext('2d');

/* Dessin des personnages */
var joueur = new Image();
joueur.src="sprites/joueur1.png";

var pnj1 = new Image();
pnj1.src="sprites/pnj1.png";

// Méthode de dessin d'une image dans le contexte 2D "context" aux coordonnées x et y

function dessineImage(perso, x,y) {
	context.drawImage(perso, x, y, perso.width, perso.height);			
}

var spritesheet = new Image();
spritesheet.src="sprites/sprites-joueur1.png";

var nbPoseparPerso = spritesheet.width/joueur.width;//nombre de tuiles sur la largeur du canvas

function dessinePosePerso(spritesheet, x,y, posX, posY) {
	context.drawImage(spritesheet, x, y, joueur.width, joueur.height, posX, posY, joueur.width, joueur.height);		
}

var direction = {"face" :0, 
		"droite":1, 
		"gauche":2, 
		"dos":3}

function dessinePersoDirection(spritesheet, x, dir, posX, posY) {
	 dessinePosePerso(spritesheet, x,joueur.height*direction[dir], posX, posY);
}

function dessinePersoPoseDirection(spritesheet, pas,dir, posX, posY) {
	 dessinePosePerso(spritesheet, tailleTuile*pas ,joueur.height*direction[dir], posX, posY);
}

function dessineLignePosesPerso(dir,posX,posY) {
	for(pas=0; pas<nbPoseparPerso; pas++) {
		dessinePosePerso(spritesheet, tailleTuile*pas,joueur.height*direction[dir], posX+(tailleTuile*pas), posY)
	}
}

/* dessin de la carte sur le canvas 2 */

// récupère le canvas sur lequel on va dessiner
var canvas2 = document.getElementById('canvas2');
// récupération du context qui permet de dessiner sur les canvas
var context2 = canvas2.getContext('2d');

// on définit la couleur de fond
var couleur ="#798942";

// on créée une fonction pour dessiner le fond de la carte dans une couleur unie
function couleurFond(context, couleur) {
	context.fillStyle=couleur;	
	context.fillRect(0,0, canvas.width, canvas.height);
	context.fill();
}

// on crée une image nommée imageFond et on donne son chemin. 
var tileset = new Image(); // crée une nouvelle image
tileset.src = "tilesets/tileset.png";// donne le chemin de l'image

// Méthode de dessin d'une partie d'image dans le contexte 2D "context" aux coordonnées x et y

var tailleTuile = 32; // largeur de la tuile

// On situe l'arbre sur le tileset par ses coordonnées x et y du coin supérieur gauche
var arbreX = 0;
var arbreY = 0;

var tailleArbre = tailleTuile*2; // hauteur et largeur de l'arbre

function dessineArbre(posX,posY) {

	// On récupère une partie de l'image du tileset pour l'afficher aux coordonnées posX, posY
	context2.drawImage(tileset, arbreX, arbreY, tailleArbre, tailleArbre, posX, posY,  tailleArbre, tailleArbre);	
}

function dessineTuile(x,y, posX, posY) {
	context2.drawImage(tileset, x, y, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile);		
}

var nbTuilesSurLigneCanvas = canvas2.width/tailleTuile;//nombre de tuiles sur la largeur du canvas

function dessineTuileSurLigne(x, y, posY) {
	for(i=0; i<nbTuilesSurLigneCanvas; i++) {
		dessineTuile(x,y, tailleTuile*i, posY);
	}
}

var nbLigneCanvas = canvas2.height/tailleTuile;//nombre de tuiles sur la hauteur du canvas

function dessineTuilesSurCanvas(x, y) {
	for(i=0; i<nbTuilesSurLigneCanvas; i++) {
		for(j=0; j<nbLigneCanvas; j++)
		dessineTuile(x,y, tailleTuile*i, tailleTuile*j);
	}
}

// récupère le canvas sur lequel on va dessiner
var canvas4 = document.getElementById('canvas4');
// récupération du context qui permet de dessiner sur les canvas
var context4 = canvas4.getContext('2d');

var nbTuilesCanvasLargeur = 12;
var nbTuilesCanvasHauteur = 10;

var texte1 = "Guyana-Dream";
var fonte = "px Arial";
var couleurTexte = "#5b6634";

function ajouteTexte(texte, tailleTexte, x, y) {
	context4.font = tailleTexte+fonte ;
	context4.fillStyle = couleurTexte;
	context4.fillText(texte,x,y);
}


function cadreTexte(texte) {
	/* on efface une partie du canvas */
	context4.clearRect(tailleTuile,tailleTuile*5,tailleTuile*8, tailleTuile*3);
	/* on place du texte dans cette zone */	
	ajouteTexte(texte, 16, tailleTuile*5 , canvas4.height-(tailleTuile*5)+20);
}

function dessineCarte(context) {

	canvas4.width=tailleTuile*nbTuilesCanvasLargeur;
	canvas4.height=tailleTuile* nbTuilesCanvasHauteur;

	nbTuilesSurLigneCanvas = canvas4.width/tailleTuile;//nombre de tuiles sur la largeur du canvas
	nbLigneCanvas = canvas4.height/tailleTuile;//nombre de tuiles sur la hauteur du canvas

	/* Remplir le canvas de couleur */
	couleurFond(context, couleur); // on remplit le canvas d'une couleur unie 

	/* dessins d'éléments extraits du tileset, image composée ds différente sparties de la carte */

	dessineArbre(tailleArbre*3,tailleArbre); // on récupère la partie de l'image qui nous intéresse (l'arbre) pour l'afficher à la position indiquée en paramètres, basée sur la taille de l'arbre

	dessineTuile(tailleTuile*2,tailleTuile, 0, 0); // on dessine une tuile du tileset en haut à gauche du canvas (par-dessus l'ara, mais la transparence permet de le voir)

	dessineTuile(tailleTuile*2,0, tailleTuile*3, 0); // on dessine une autre tuile du tileset (extremité chemin) plus à droite

	dessineTuile(tailleTuile*3,tailleTuile, tailleTuile*3, tailleTuile*3); // on dessine une autre tuile du tileset (fruit) à un autre endroit

	// On récupère une autre tuile du tileset qu'on recopie plusieurs fois à l'horizontale grâce à une boucle
	dessineTuileSurLigne(tailleTuile*3,0, tailleTuile);

	// On récupère une autre tuile du tileset qu'on recopie sur tout le canvas grâce à deux boucles imbriquées
	dessineTuilesSurCanvas(tailleTuile*2,tailleTuile);	

	cadreTexte(texte1);
}


// lancement du jeu, quand on charge la page
window.onload = function() { 

	/* Remplir le canvas de couleur */
	couleurFond(context, couleur); // on remplit le canvas d'une couleur unie 
	
	/* Dessin de personnages à partir d'une image*/

	dessineImage(pnj1, 0,0); // on dessine l'image entière de l'ara

	dessineImage(joueur, 0, joueur.height*2); // on dessine l'image entière du singe plus bas, en se basant sur sa hauteur

	// récupère le canvas sur lequel on va dessiner
	var canvas3 = document.getElementById('canvas3');
	// récupération du context qui permet de dessiner sur les canvas
	var context3 = canvas3.getContext('2d');	

	context=context3;

	/* Dessin des personnages avec la spritesheet */

	dessinePosePerso(spritesheet, 0,0, joueur.width*3, 0); // on dessine la 1ère pose de la spritesheet et le déplace sur la droite en se basant sur sa largeur

	/* Chaque direction étant sur une ligne de la spritesheet, on descend pour chaque fonction d'une ligne pour obtenir une direction */

	dessinePosePerso(spritesheet, 0,joueur.width*1, joueur.width*4, 0); // dessine le singe de profil droit à partir de la spritesheet

	dessinePersoDirection(spritesheet, 0,"dos", joueur.width*6, joueur.height); // dessine le singe de dos à partir de la spritesheet, en utilisant le tableau des directions, et on le descend sur l'axe y en se basant sur sa hauteur


	/* Les étapes de la marche se succèdent en plusieurs poses, dont on peut choisir le pas précis désiré, de 0 à 4 */
	 
	dessinePersoPoseDirection(spritesheet, 2,"gauche", joueur.width*8, joueur.height); // dessine le singe de profil gauche et faisant un pas, à partir de la spritesheet


	/* Dessins en boucle de personnages issus de la spritesheet */

	dessineLignePosesPerso("face",joueur.width*2,joueur.height*2); // dessine les poses du singe de face l'une après l'autre

	dessineLignePosesPerso("droite",joueur.width*2,joueur.height*3); // dessine les poses du singe de dos l'une après l'autre

	var joueur2 = joueur;
	joueur2.src="sprites/joueur2.png";

	dessineImage(joueur2, 0, canvas.height-joueur.height); // on dessine l'image entière du deuxième singe plus bas, en se basant la hauteur du canavas et celle du personnage

	var spritesheet2 = spritesheet;
	spritesheet2.src="sprites/sprites-joueur2.png";

	dessinePersoPoseDirection(spritesheet2, 2,"gauche", joueur.width*8, canvas.height-joueur.height); // dessine le singe de profil gauche et faisant un pas, à partir de la spritesheet



	/* Remplir le canvas de couleur */


	couleurFond(context2, couleur); // on remplit le canvas d'une couleur unie 

	/* dessins d'éléments extraits du tileset, image composée ds différente sparties de la carte */

	dessineArbre(tailleArbre*3,tailleArbre); // on récupère la partie de l'image qui nous intéresse (l'arbre) pour l'afficher à la position indiquée en paramètres, basée sur la taille de l'arbre

	dessineTuile(tailleTuile*2,tailleTuile, 0, 0); // on dessine une tuile du tileset en haut à gauche du canvas (par-dessus l'ara, mais la transparence permet de le voir)

	dessineTuile(tailleTuile*2,0, tailleTuile*3, 0); // on dessine une autre tuile du tileset (extremité chemin) plus à droite

	dessineTuile(tailleTuile*3,tailleTuile, tailleTuile*3, tailleTuile*3); // on dessine une autre tuile du tileset (fruit) à un autre endroit

	// On récupère une autre tuile du tileset qu'on recopie plusieurs fois à l'horizontale grâce à une boucle
	dessineTuileSurLigne(tailleTuile*3,0, tailleTuile);

	// On récupère une autre tuile du tileset qu'on recopie sur tout le canvas grâce à deux boucles imbriquées
	dessineTuilesSurCanvas(tailleTuile*2,tailleTuile);	

	/* on recopie cette carte graĉe à une fonction */

	context2=context4;

	dessineCarte(context4);

}

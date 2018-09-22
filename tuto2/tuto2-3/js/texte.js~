/** Le texte **/
// on définit le texte à écrire
var texte1 = "Réalise ta quête du code";

// on choisit les caractéristiques du texte 1
var tailleTexte = 12; // taille de police

var fonte = "Arial"; // style de police utilisée
var couleurTexte = "#5b6634"; // couleur en code hexadécimal

// placement du texte 1 sur la canvas (en partant du point inférieur droit)
var placementTexteX = 10;
var placementTexteY = 20;

// on définit le texte 2 et on choisit ses caractéristiques
var texte2 = "Mon RPG perso";
var tailleTexte2 = 16; // taille de police

// placement du texte 2 sur le canvas (en partant du point supérieur droit)
var placementTexteX2 = 64;
var placementTexteY2 = hauteurCanvas-tailleTexte2;

/** le cadre **/
// caractéristiques du cadre
var couleurCadre = couleurTexte; // couleur du cadre
var margeCadreX = 5; // marge horizontale
var margeCadreY = 5; // marge verticale


/*** fonction d'ajout de texte ***/
function ajouteTexte(texte, tailleTexte, x, y) {
	context.font = tailleTexte+"px "+fonte ;
	context.fillStyle = couleurTexte;
	context.fillText(texte,x,y);
}

/*** fonction dessinant le cadre autour du texte ***/
function cadreTexte(texte, tailleTexte, x, y) {
	// Ces calculs devraient permettre de placer le cadre autour du texte 2 avec les marges définies
	var placementCadreX = x-margeCadreX; // on tient compte de la marge pour placer le bord gauche du cadre
	var placementCadreY = y-tailleTexte-margeCadreY; // on tient compte de la marge pour placer le bord haut du cadre
	var largeurLettres = tailleTexte*0.6; //on estime la largeur des lettres en fonction de la taille de police
	var largeurCadre = largeurLettres*texte.length; // on estime la largeur du cadre en fonction du nombre de lettres dans la chaine
	var hauteurCadre = tailleTexte+(3*margeCadreY); // la marge verticale est comptée 3 fois pour tenir compte des lettres à pattes descendantes.

	// on place le cadre autour du texte
	context.strokeStyle=couleurCadre; // choix de la couleur (verte)
	context.strokeRect(placementCadreX, placementCadreY, largeurCadre, hauteurCadre); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur
	context.fill(); // on remplit la bordure du cadre dans cette zone */	
}

// appel des 2 fonctions
ajouteTexte(texte1, tailleTexte, placementTexteX , placementTexteY);
cadreTexte(texte1, tailleTexte, placementTexteX , placementTexteY);

ajouteTexte(texte2, tailleTexte2, placementTexteX2 , placementTexteY2);
cadreTexte(texte2, tailleTexte2, placementTexteX2 , placementTexteY2);




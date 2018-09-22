/** Le texte **/
// on définit le texte à écrire
let texte1 = "Réalise ta quête du code";

// on choisit les caractéristiques du texte 1
let tailleTexte = 12; // taille de police

let fonte = "Arial"; // style de police utilisée
let couleurTexte = "#5b6634"; // couleur en code hexadécimal

// placement du texte 1 sur la canvas (en partant du point inférieur droit)
let placementTexteX = 10;
let placementTexteY = 20;

// on définit le texte 2 et on choisit ses caractéristiques
let texte2 = "Mon RPG perso";
let tailleTexte2 = 16; // taille de police

// placement du texte 2 sur le canvas (en partant du point supérieur droit)
let placementTexteX2 = 64;
let placementTexteY2 = hauteurCanvas-tailleTexte2;

/** le cadre **/
// caractéristiques du cadre
let couleurCadre = couleurTexte; // couleur du cadre
let margeCadreX = 5; // marge horizontale
let margeCadreY = 5; // marge verticale


/*** fonction d'ajout de texte ***/
function ajouteTexte(texte, tailleTexte, x, y) {
	context.font = tailleTexte+"px "+fonte ;
	context.fillStyle = couleurTexte;
	context.fillText(texte,x,y);
}

/*** fonction dessinant le cadre autour du texte ***/
function cadreTexte(texte, tailleTexte, x, y) {
	// Ces calculs devraient permettre de placer le cadre autour du texte 2 avec les marges définies
	let placementCadreX = x-margeCadreX; // on tient compte de la marge pour placer le bord gauche du cadre
	let placementCadreY = y-tailleTexte-margeCadreY; // on tient compte de la marge pour placer le bord haut du cadre
	let largeurLettres = tailleTexte*0.6; //on estime la largeur des lettres en fonction de la taille de police
	let largeurCadre = largeurLettres*texte.length; // on estime la largeur du cadre en fonction du nombre de lettres dans la chaine
	let hauteurCadre = tailleTexte+(3*margeCadreY); // la marge verticale est comptée 3 fois pour tenir compte des lettres à pattes descendantes.

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



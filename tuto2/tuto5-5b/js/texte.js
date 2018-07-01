var titreJeu = "Guyana-Dream";

var titreInventaire = "Inventaire";

var fonte = "px Arial";
var couleurTexte = "#cb923b";


/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) {
	context3.font = tailleTexte+fonte ;
	context3.fillStyle = couleurTexte;
	context3.fillText(texte,x,y);
}




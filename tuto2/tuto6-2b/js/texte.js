var titreJeu = "Guyana-Dream";

var titreInventaire = "Inventaire";

var dialoguePnj = "Trouve les fleurs !";

var fonte = "px Arial";
var couleurTexte = "#cb923b";


/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) {
	context4.font = tailleTexte+fonte ;
	context4.fillStyle = couleurTexte;
	context4.fillText(texte,x,y);
}


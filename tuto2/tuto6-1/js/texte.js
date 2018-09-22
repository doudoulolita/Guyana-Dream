let titreJeu = "Guyana-Dream";

let titreInventaire = "Inventaire";

let fonte = "px Arial";
let couleurTexte = "#cb923b";


/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) {
	context3.font = tailleTexte+fonte ;
	context3.fillStyle = couleurTexte;
	context3.fillText(texte,x,y);
}

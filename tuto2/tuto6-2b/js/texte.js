let titreJeu = "Guyana-Dream";

let titreInventaire = "Inventaire";

let dialoguePnj = "Trouve les fleurs !";

let fonte = "px Arial";
let couleurTexte = "#cb923b";


/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) {
	context4.font = tailleTexte+fonte ;
	context4.fillStyle = couleurTexte;
	context4.fillText(texte,x,y);
}


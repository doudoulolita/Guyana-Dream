let titreJeu = "Guyana-Dream";

let titreInventaire = "Inventaire";

let texteFin = "Fin du jeu";

let texteGagne = "Gagné !";

let textePerd = "Perdu !";

let textePnj = "Trouve les fleurs !";

let textePnjQueteOk = "Tu as trouvé les fleurs !";

let textePnjGagne = "Bravo !";

let textePnjPerd = "Dommage... Rejoue !";

let fonte = "px Arial";
let couleurTexte = "#cb923b";


/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) {
	context[4].font = tailleTexte+fonte ;
	context[4].fillStyle = couleurTexte;
	context[4].fillText(texte,x,y);
}

function bulleTexte(texte, x, y) {

	context[1].fillStyle = 'rgb(255, 255, 255)';

	context[1].arc(x, y-tailleTuile, tailleTuile/2,  Math.PI/2, Math.PI+(Math.PI/2));

	context[1].arc(x+(textePnj.length*6), y-tailleTuile, tailleTuile/2, Math.PI+(Math.PI/2), 2*Math.PI+(Math.PI/2));
	context[1].fill();

	context[4].clearRect(x, y-(tailleTuile*1.5), textePnj.length*12, tailleTuile);	

	ajouteTexte(texte, 14, x, y-tailleTuile);
}


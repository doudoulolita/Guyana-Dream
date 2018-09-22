var titreJeu = "Guyana-Dream";

var hauteurTitre1=50;

var hauteurTitre=14;

var texteChoixPerso = 'Cliquez vite sur un perso';

var titreInventaire = "Inventaire";


var texteFin = "Fin du jeu";

var texteResultat = "";

var texteGagne = "Gagné !";

var textePerd = "Perdu !";


var textePnj = "Trouve les fleurs !";

var textePnjQueteOk = "Tu as trouvé les fleurs !";


var textePnjResultat = "";

var textePnjGagne = "Bravo ! Super classe !";

var textePnjPerd = "Dommage... Rejoue !";


var texteEnnemi = "Tu ne passes pas !";

var texteEnnemiFin = "Reviens me voir !";


var fonte = "px Arial";
var couleurTexte = "#cb923b";


/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) { // fonction écrivant un texte d'une taille donnée en paramètre aux coordonnées x et y
	context[4].font = tailleTexte+fonte ;
	context[4].fillStyle = couleurTexte;
	context[4].fillText(texte,x,y);
}

function bulleTexte(texte, x, y) { // fonction dessinant un cartouche ("bulle" simplifiée) avec un texte, à l'endroit indiqué lors de l'appel

	context[1].beginPath();
	context[1].fillStyle = 'rgb(255, 255, 255)'; // couleur du cartouche

	context[1].arc(x, y-tailleTuile, tailleTuile/2,  Math.PI/2, Math.PI+(Math.PI/2)); // cercle 1

	context[1].arc(x+(textePnj.length*6), y-tailleTuile, tailleTuile/2, Math.PI+(Math.PI/2), 2*Math.PI+(Math.PI/2)); // cercle 2
	context[1].fill(); // ça remplit les cercles et entre les deux

	context[1].closePath();

	context[4].clearRect(x, y-(tailleTuile*1.5), textePnj.length*9, tailleTuile);// on efface le texte (qui n'est pas sur le même canvas) en se basant sur sa longueur

	ajouteTexte(texte, 14, x, y-tailleTuile); // on écrit le texte
}


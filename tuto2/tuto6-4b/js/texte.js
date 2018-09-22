let titreJeu = "Guyana-Dream";

let hauteurTitre1=50;

let hauteurTitre=14;

let texteChoixPerso = 'Cliquez vite sur un perso';

let titreInventaire = "Inventaire";


let texteFin = "Fin du jeu";

let texteResultat = "";

let texteGagne = "Gagné !";

let textePerd = "Perdu !";


let textePnj = "Trouve les fleurs !";

let textePnjQueteOk = "Tu as trouvé les fleurs !";


let textePnjResultat = "";

let textePnjGagne = "Bravo ! Super classe !";

let textePnjPerd = "Dommage... Rejoue !";


let texteEnnemi = "Tu ne passes pas !";

let texteEnnemiFin = "Reviens me voir !";


let fonte = "px Arial";
let couleurTexte = "#cb923b";


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

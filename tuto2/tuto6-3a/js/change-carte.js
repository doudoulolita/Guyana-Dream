/* Tableau comprenant un autre tableau pour chaque ligne de la carte et donnant le numéro des tuiles à placer sur la carte */
let carte2 = [
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 14,  2,  2,  2,  2,  2,  2,  2,  2,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1, 21,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  7,  1,  1, 10,  1,  1, 19, 20,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1, 23, 24,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1, 19, 20,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1, 23, 24,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  3,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10,  1,  1,  1,  1,  1,  1,  1,  1,  5,  5,  5],
		[ 5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
	];

function changeCarte() {
		context[0].clearRect(0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas);		
		couleurFond(couleurfondCarte, 0, 0, largeurCanvas - (tailleTuile*3), hauteurCanvas); // on remplit le canvas de couleur sauf sur le côté
		dessineCarte(numCarte);
		if (collision === 1) {
			bulleTexte(textePnj, pnj.posX2, pnj.posY2);
		}
}

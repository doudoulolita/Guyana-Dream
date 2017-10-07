/* Ce fichier js gère les èvènements */

/* déclaration et initialisation des variables */

// on fixe les positions X et Y qui provoqueront un changement de carte (en nombre de tuiles)
posChangeMapX = 22;
posChangeMapY = 12;

posChangeMapX2 = 0;
posChangeMapY2 = 0;

var canvasHasFocus = false;

canvases = document.querySelectorAll('canvas');
canvas = canvases[canvases.length - 1];

canvas.addEventListener('mouseenter', function(event) {
  canvasHasFocus = true;
}, false);

canvas.addEventListener('mouseleave', function(event) {
  canvasHasFocus = false;
}, false);




/* changement de carte */

/* fonction pour récupérer les données d"une tuile sur la carte en fonction de son emplacement sur le tableau de map
function recupCoordsTuile() {
	for (Y=0; Y<nomCarte.length;Y++){
		for (X=0; X<nomCarte[Y].length;X++){
			if (nomCarte[Y][X]==tuileChangeCarte) {posFX = X; posFY = Y} // on repère où est située la tuile qui provoque le changement de carte pour avoir ses n° de ligne (posFY)et de colonne (posFX)
		// alert((posFY/tailleTuile)+" - "+(posFY/tailleTuile));
		}
	}
} */

// fonction qui gère le changement de niveau, et donc de carte
function changeCarte(posChangeMapX, posChangeMapY, posChangeMapX2, posChangeMapY2, numNiveau) {

	// si la tuile est celle qui provoque le changement de carte, une condition vérifiera si le perso (coordonnées =  posX et posY) est sur la tuile choisie (celle-ci correspond à un intervalle de coordonnées : du bord gauche au bord droit, du haut au bas de la tuile). 
	// En partant des n° de lignes et de colonnes, le chiffre en px s'obtient en multipliant le n° de ligne posFY et de colonne posFX par la largeur de la tuile.
	if (niveau.innerHTML==1) {
		condition1=posX>=posChangeMapX*tailleTuile;
	}


	if(niveau.innerHTML==1 && condition1) {	
		context[0].clearRect(0,0,canvasLargeur,canvasHauteur); // on efface le premier canvas
		couleurFond(); // on le remplit de couleur
		nomCarte=donneesCarte.carte2; // on récupère les données de la carte 2 (arbres)
		dessineCarte(nomCarte, context[0]); // on dessine la carte 2 (les arbres) sur le deuxième canvas
		niveau.innerHTML=2; // on indique le nouveau n° de niveau dans le span dont l'id est "niveau"
		texte2 = "Niveau"+niveau.innerHTML;
		cadreTexte();
		ajouteTexte(texte1, 16, canvasLargeur-(tailleTuile*6) , canvasHauteur-(tailleTuile*2));
		ajouteTexte(texte2, 12, canvasLargeur-(tailleTuile*5) , canvasHauteur-(tailleTuile*1.5));
	}

	if (niveau.innerHTML==2) {
		condition2 = posX <= posChangeMapX2*persoLargeur;
	}
	
	if(niveau.innerHTML==2 && condition2) {
		context[0].clearRect(0,0,canvasLargeur,canvasHauteur); // on efface le premier canvas
		couleurFond(); // on le remplit de couleur
		nomCarte=donneesCarte.carte1; // on récupère les données de la carte 2 (arbres)
		dessineCarte(nomCarte, context[0]); // on dessine la carte 2 (les arbres) sur le deuxième canvas
		niveau.innerHTML=1; // on indique le nouveau n° de niveau dans le span dont l'id est "niveau"
		texte2 = "Niveau"+niveau.innerHTML;
		cadreTexte();
		ajouteTexte(texte1, 16, canvasLargeur-(tailleTuile*6) , canvasHauteur-(tailleTuile*2));
		ajouteTexte(texte2, 12, canvasLargeur-(tailleTuile*5) , canvasHauteur-(tailleTuile*1.5));
	}
			
}

// La fonction qui initialise le tout
function init() {
// on crée une image nommée tileset et on donne son chemin dans la fonction de pré-chargement
	recupCanvas();
	couleurFond(couleurfondCarte); // on remplit le canvas d'une couleur unie #5b6634
	dessineCarte(nomCarte, context[0]); // on dessine la carte en fonction des données précédentes sur le second canvas
	cadreTexte();
	ajouteTexte(texte1, 16, canvasLargeur-(tailleTuile*6) , canvasHauteur-(tailleTuile*2));
	ajouteTexte(texte2, 12, canvasLargeur-(tailleTuile*5) , canvasHauteur-(tailleTuile*1.5));
	addImageChoix(1);
	addImageChoix(2);
	animePnj();
	//animePnj2();

}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

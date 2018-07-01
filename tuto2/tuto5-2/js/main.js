// La fonction qui initialise le tout
function init() {

	couleurFond(couleurfondCarte); // appel de la fonction qui colorie le fond

	dessineCarte(); // dessin de la carte

	animePerso(); 

	ajouteTexte(texte1, 20, 10 , hauteurCanvas-10);

	ajouteTexte(texte2, 14, largeurCanvas-(3*tailleTuile)+20,20);

	// Lorsqu'une touche est appuyée, lance une fonction
	document.onkeydown = persoBouge;
}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };

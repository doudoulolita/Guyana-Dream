/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) {
	context[3].font = tailleTexte+fonte ;
	context[3].fillStyle = couleurTexte;
	context[3].fillText(texte,x,y);
}

/* cadre pour mettre le texte */
function cadreTexte() {
	/* on efface une partie du canvas */
	context[0].clearRect(canvasLargeur-(tailleTuile*7),canvasHauteur-(tailleTuile*3),tailleTuile*6, tailleTuile*2);
	context[3].clearRect(canvasLargeur-(tailleTuile*7),canvasHauteur-(tailleTuile*3),tailleTuile*6, tailleTuile*2);
	/* on place du texte dans cette zone */	
}




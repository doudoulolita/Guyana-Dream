var haut = 0;
var dirHaut=3;

var bas = 0;
var dirBas=0;

var droite = 0;
var dirDroite=1;

var gauche= 0;
var dirGauche=2;

function touchesClavier(e) {
	e.preventDefault();  // empêche le scrolling vertical

  	// Vérifier quelle touche est pressée
  	if(e.keyCode == "38") {y=haut; dir=dirHaut;} // touche haut
  	
  	// Vérifier les autres touches
  	if(e.keyCode == "40") {y=bas; dir=dirBas;} // bas

  	if(e.keyCode == "39"){x=droite; dir=dirDroite;} // droite	  	
  	
 	if(e.keyCode == "37") {x=gauche; dir=dirGauche; } // gauche

	marchePerso();

 	bloqueSurDecor(2*tailleTuile, 2*tailleTuile);
 	bloqueSurDecor(4*tailleTuile, 4*tailleTuile);
	
}







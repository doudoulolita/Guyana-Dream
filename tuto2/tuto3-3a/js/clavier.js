function affichePosesPerso(e) {

	e.preventDefault(); // evite le scrolling lorsque l'on appuie sur les flèches haut et bas : Le comportement par défaut a été inhibé
  	
  	// Vérifier quelle touche est pressée
  	if(e.keyCode == "38") { affichePoses(3);} // touche haut
  	
  	// Vérifier les autres touches
  	if(e.keyCode == "40") { affichePoses(0);} // bas

  	if(e.keyCode == "39") { affichePoses(1);} // gauche	  	
  	
 	if(e.keyCode == "37") {affichePoses(2);} // droite

}




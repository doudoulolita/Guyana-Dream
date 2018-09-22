function affichePosesPerso(e) {
 	
  	// Vérifier quelle touche est pressée
 	if(e.keyCode == "37") {affichePoses(2);} // gauche : affiche toutes les poses de la 3ème ligne de la spritesheet, regardant vers la gauche  	
  	
  	// Vérifier les autres touches

	if(e.keyCode == "38") { affichePoses(3);} // touche haut :  affiche toutes les poses en vue de dos	

  	if(e.keyCode == "39") { affichePoses(1);} // droite : affiche toutes les pose s regardant vers la droite

  	if(e.keyCode == "40") { affichePoses(0);} // bas : affiche toutes les poses en vue de face

	e.preventDefault(); // evite le scrolling lorsque l'on appuie sur les flèches haut et bas : Le comportement par défaut a été inhibé
}




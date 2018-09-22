function persoBouge(e) {
 	
  	// Vérifier quelle touche est pressée
 	if(e.keyCode == "37") { x -= vx; dir = 2;} // droite

  	if(e.keyCode == "38") { y -= vx; dir = 3;} // touche haut

  	if(e.keyCode == "39"){ x += vx; dir = 1;} // gauche	
  	
  	if(e.keyCode == "40") { y += vx; dir = 0;} // bas 

	e.preventDefault(); // evite le scrolling lorsque l'on appuie sur les flèches haut et bas : Le comportement par défaut a été inhibé

	changePose(); // appel de la fonction d'animation du personnage 
}




function persoBouge(e) {
  	
  	// Vérifier quelle touche est pressée
  	if(e.keyCode == "38") { y -= vx; dir = 3;} // touche haut
  	
  	// Vérifier les autres touches
  	if(e.keyCode == "40") { y += vx; dir = 0;} // bas

  	if(e.keyCode == "39"){ x += vx; dir = 1;} // gauche	  	
  	
 	if(e.keyCode == "37") { x -= vx; dir = 2;} // droite

}




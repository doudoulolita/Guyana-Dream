function persoBouge(e) {
	changePose(); // appel de la fonction d'animation du personnage   
  	
  	// Vérifier quelle touche est pressée
  	if(e.keyCode == "38") { y -= vx; dir = 3;} // touche haut
  	
  	// Vérifier les autres touches
  	if(e.keyCode == "40") { y += vx; dir = 0;} // bas

  	if(e.keyCode == "39"){ x += vx; dir = 1;} // gauche	  	
  	
 	if(e.keyCode == "37") { x -= vx; dir = 2;} // droite

	if(x!=0 || y!=0){// si on bouge
		pose++; // on ajoute une étape au pas du perso
		if (pose>nbPoses){pose=1;}// si on a fini toutes les étapes on revient au premier pas
	return x, y;
	}
	else {pose=0;};
}




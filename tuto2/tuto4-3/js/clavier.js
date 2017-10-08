function persoBouge(e) {

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(); // appel de la fonction d'animation du personnage  

	// vérification de la position du personnage par rapport à la tuile interdite, changement de coordonnées suivant la direction pour qu'il ne reste pas bloqué



	deplacementX(e, "37");

	deplacementX(e, "39");

	deplacementY(e, "38");

	deplacementY(e, "40");

}




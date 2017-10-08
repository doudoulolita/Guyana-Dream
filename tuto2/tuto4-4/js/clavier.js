function persoBouge(e) {

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(); // appel de la fonction d'animation du personnage  



	//déplacements du personnage en fonction des touches

	deplacementX(e, "37"); // appel de la fonction de déplacement horizontal lors de l'appui sur la flèche gauche

	deplacementX(e, "39"); // appel de la fonction de déplacement  horizontal lors de l'appui sur la flèche droite

	deplacementY(e, "38");  // appel de la fonction de déplacement  vertical lors de l'appui sur la flèche haut

	deplacementY(e, "40"); // appel de la fonction de déplacement  vertical lors de l'appui sur la flèche bas

}




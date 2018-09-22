let touche = "";

function persoBouge(e) {

	//déplacements du personnage en fonction des touches

	deplacement(e, "37"); // appel de la fonction de déplacement horizontal lors de l'appui sur la flèche gauche

	deplacement(e, "38");  // appel de la fonction de déplacement  vertical lors de l'appui sur la flèche haut

	deplacement(e, "39"); // appel de la fonction de déplacement  horizontal lors de l'appui sur la flèche droite

	deplacement(e, "40"); // appel de la fonction de déplacement  vertical lors de l'appui sur la flèche bas

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(); // appel de la fonction d'animation du personnage  
}




let touche = "";

function persoBouge(e) {

	// déplacement en fonction des touches du clavier

	deplacement(e, "37");

	deplacement(e, "39");

	deplacement(e, "38");

	deplacement(e, "40");

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(); // appel de la fonction d'animation du personnage  
}




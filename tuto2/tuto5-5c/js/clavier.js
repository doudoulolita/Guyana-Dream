let touche = "";

let touchesDeplace = ["37","38","39","40"];

function persoBouge(e) {


	//déplacements du personnage en fonction des touches

	for (i=0; i<touchesDeplace.length; i++) {

		deplacement(e, touchesDeplace[i]); // appel de la fonction de déplacement horizontal lors de l'appui sur la flèche gauche
	}

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(); // appel de la fonction d'animation du personnage  
}




let touche = "";

let touchesDeplace = ["37","38","39","40"];

function persoBouge(e) {

	//déplacements du personnage en fonction des touches

	deplacement(e, touchesDeplace[0]); // appel de la fonction de déplacement horizontal lors de l'appui sur la flèche gauche

	deplacement(e, touchesDeplace[1]); // appel de la fonction de déplacement  horizontal lors de l'appui sur la flèche droite

	deplacement(e, touchesDeplace[2]);  // appel de la fonction de déplacement  vertical lors de l'appui sur la flèche haut

	deplacement(e, touchesDeplace[3]); // appel de la fonction de déplacement  vertical lors de l'appui sur la flèche bas

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(); // appel de la fonction d'animation du personnage 
}




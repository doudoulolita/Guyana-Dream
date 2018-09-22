let touche = "";

let touchesDeplace = ["37","38","39","40"];

function persoBouge(e) {


	//déplacements du personnage en fonction des touches

	for (i=0; i<touchesDeplace.length; i++) {

		deplacement(joueur, e, touchesDeplace[i]); // appel de la fonction de déplacement lors de l'appui sur les touches
	}

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(joueur, joueur.nbPoses, joueur.vPose); // appel de la fonction qui passe d'une pose à l'autre pour simuler le mouvement 
}




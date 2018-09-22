let touche = "";

let touchesDeplace = ["37","38","39","40"]; // tableau des touches du pavé directionnel

function persoBouge(e) { // fonction qui sera appelée lors de l'évènement que constitue l'appui sur une touche (appelée dans la fonction ecranJeu du fichier ecrans.js)

	//déplacements du personnage en fonction des touches

	for (i=0; i<touchesDeplace.length; i++) { // on parcourt le tableau des touches du pavé directionnel

		deplacement(joueur, e, touchesDeplace[i]); // appel de la fonction de déplacement lors de l'appui sur les touches (fichier deplacement.js)
	}

	e.preventDefault(); // evite le scrolling par défaut lorsque l'on appuie sur les flèches haut et bas

	changePose(joueur, joueur.nbPoses, joueur.vPose); // appel de la fonction qui passe d'une pose à l'autre pour simuler le mouvement (fichier animation.js)
}



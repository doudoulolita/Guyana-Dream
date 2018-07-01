var cheminImage = "pnj1-droite.png"; // chemin de l'image servant de tileset
var largeurImage = 48; // largeur de la tuile
var hauteurImage = 32; // hauteur de la tuile

var monImage = new Image(); // crée une nouvelle image
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.

function afficheImage(posX, posY) {
	context2.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine l'image à l'endroit voulu
}

/* appel de la fonction pour plusieurs images */

afficheImage(largeurImage, hauteurImage*2); // appel de la fonction affichant l'image à un autre endroit du canvas, en fonction de la largeur future des tuiles du jeu.

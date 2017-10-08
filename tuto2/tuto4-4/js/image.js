var cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image servant de tileset
var largeurImage = 32; // largeur de la tuile
var hauteurImage = 32; // hauteur de la tuile

var posXTuile = largeurImage*2;
var posYTuile = hauteurImage*2;

var posXTuile2 = largeurImage*4;
var posYTuile2 = hauteurImage*4;

var monImage = new Image(); // crée une nouvelle image
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.


function afficheImage(posX, posY) {
	context1.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine la tuile à l'endroit voulu
}

afficheImage(posXTuile, posYTuile); // appel de la fonction affichant l'image à un endroit du canvas, en fonction des coordonnées placées en variables plus haut.

afficheImage(posXTuile2, posYTuile2); // nouvel appel fonction pour afficher une autre image à un endroit du canvas, en fonction d'autres coordonnées placées en variables plus haut.



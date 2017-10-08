var cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image servant de tileset
var largeurImage = 32; // largeur de la tuile
var hauteurImage = 32; // hauteur de la tuile

var posXTuile = largeurImage*2;
var posYTuile = hauteurImage*2;

var monImage = new Image(); // crée une nouvelle image
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.


function afficheImage(posX, posY) {
	context1.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine la tuile à l'endroit voulu
}

afficheImage(posXTuile, posYTuile); // fonction affichant l'image à un autre endroit du canvas, en fonction de la largeur future des tuiles du jeu.



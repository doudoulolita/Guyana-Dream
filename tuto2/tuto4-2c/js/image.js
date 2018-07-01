var cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image
var largeurImage = 32; // largeur de la tuile
var hauteurImage = 32; // hauteur de la tuile

var imageX = largeurImage*3;
var imageY= largeurImage*2;

var monImage = new Image(); // crée une nouvelle image
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.


function afficheImage(context, posX, posY) {
	context.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine l'image à l'endroit voulu
}

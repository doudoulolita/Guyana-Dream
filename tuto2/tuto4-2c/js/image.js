let monImage = new Image(); // crée une nouvelle image

let cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.

let largeurImage = 32; // largeur de la tuile
let hauteurImage = 32; // hauteur de la tuile

let imageX = largeurImage*3;
let imageY= largeurImage*2;

function afficheImage(context, posX, posY) {
	context.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine l'image à l'endroit voulu
}

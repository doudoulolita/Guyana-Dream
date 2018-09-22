let cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image servant de tileset
let largeurImage = 32; // largeur de la tuile
let hauteurImage = 32; // hauteur de la tuile

let imageX = largeurImage*2;
let imageY = hauteurImage*2;

let monImage = new Image(); // crée une nouvelle image
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.

function afficheImage(posX, posY) {
	context1.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine la tuile à l'endroit voulu
}

let monImage = new Image(); // crée une nouvelle image

let cheminImage = "pnj1-droite.png"; // chemin de l'image servant de tileset
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.

let largeurImage = 48; // largeur de la tuile
let hauteurImage = 32; // hauteur de la tuile

function afficheImage(context, posX, posY) {
	context.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine l'image à l'endroit voulu
}

let monImage = new Image(); // crée une nouvelle image

let cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image servant de tileset
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.

let largeurImage = 32; // largeur de la tuile
let hauteurImage = 32; // hauteur de la tuile

// emplacement image 1
let posXTuile = largeurImage*2;
let posYTuile = hauteurImage*2;

// emplacement image 2
let posXTuile2 = largeurImage*4;
let posYTuile2 = hauteurImage*4;

function afficheImage(posX, posY) {
	context1.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine la tuile à l'endroit voulu
}

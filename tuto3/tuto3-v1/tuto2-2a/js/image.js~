let monImage = new Image(); // crée une nouvelle image

let cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image servant de tileset
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.

let largeurImage = 32; // largeur de la tuile
let hauteurImage = 32; // hauteur de la tuile

function afficheImage(posX, posY) {
	context.drawImage(monImage, 0, 0, largeurImage, hauteurImage, posX, posY, largeurImage, hauteurImage);//on dessine l'image à l'endroit voulu
}

/* appel de la fonction pour plusieurs images */

afficheImage(0, 0); // appel de la fonction affichant l'image en haut à gauche du canvas.

afficheImage(largeurImage*3, hauteurImage*2); // appel de la fonction affichant l'image à un autre endroit du canvas, en fonction de la largeur future des tuiles du jeu.

afficheImage(largeurCanvas-largeurImage, hauteurCanvas-hauteurImage); // 3ème appel de la fonction, en bas à droite deu canvas.


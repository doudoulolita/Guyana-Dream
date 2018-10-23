ar cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image servant de tileset
var largImg = 32; // largeur de la tuile
var hautImg = 32; // hauteur de la tuile

var monImage = new Image(); // crÃ©e une nouvelle image
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est dÃ©clarÃ©e plus haut.

var cheminImage2 = "choix-joueur2.png"; // chemin de l'image servant de tileset
var largImg2 = 32; // largeur de la tuile
var hautImg2 = 48; // hauteur de la tuile

var monImage2 = new Image(); // crÃ©e une nouvelle image
monImage2.src = cheminImage2;// donne le chemin de l'image dont la variable est dÃ©clarÃ©e plus haut.


function afficheImage(image, posX, posY, largeur, hauteur) {
	context.drawImage(image, 0, 0, largeur, hauteur, posX, posY, largeur, hauteur);//on dessine l'image Ã  l'endroit voulu
}

afficheImage(monImage, 0, 0, largImg, hautImg); // fonction affichant l'image en haut Ã  gauche du canvas.

afficheImage(monImage2, largImg2*3, hautImg2*2, largImg2, hautImg2); // fonction affichant l'image Ã  un autre endroit du canvas, en fonction de la largeur future des tuiles du jeu.

afficheImage(monImage, largeurCanvas-largImg, hauteurCanvas-hautImg, largImg, hautImg);


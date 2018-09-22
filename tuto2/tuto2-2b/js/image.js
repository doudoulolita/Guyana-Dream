let monImage = new Image(); // crée une nouvelle image

let cheminImage = "cachette-fougeres-jaunes.png"; // chemin de l'image servant de tileset
monImage.src = cheminImage;// donne le chemin de l'image dont la variable est déclarée plus haut.

let largImg = 32; // largeur de la tuile
let hautImg = 32; // hauteur de la tuile

let monImage2 = new Image(); // crée une nouvelle image

let cheminImage2 = "choix-joueur2.png"; // chemin de l'image servant de tileset
monImage2.src = cheminImage2;// donne le chemin de l'image dont la variable est déclarée plus haut.

let largImg2 = 32; // largeur de la tuile
let hautImg2 = 48; // hauteur de la tuile

function afficheImage(image, posX, posY, largeur, hauteur) {
	context.drawImage(image, 0, 0, largeur, hauteur, posX, posY, largeur, hauteur);//on dessine l'image à l'endroit voulu
}

afficheImage(monImage, 0, 0, largImg, hautImg); // fonction affichant l'image en haut à gauche du canvas.

afficheImage(monImage2, largImg2*3, hautImg2*2, largImg2, hautImg2); // fonction affichant l'image à un autre endroit du canvas, en fonction de la largeur future des tuiles du jeu.

afficheImage(monImage, largeurCanvas-largImg, hauteurCanvas-hautImg, largImg, hautImg);


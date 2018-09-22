let maTuile = new Image(); // crée une nouvelle image

let cheminTileset = "tileset-mini1.png"; // chemin de l'image servant de tileset
maTuile.src = cheminTileset;// donne le chemin de l'image dont la variable est déclarée plus haut.

let largeurTuile = 32; // largeur de la tuile
let hauteurTuile = 32; // hauteur de la tuile


function afficheTuile(xImage, yImage, posX, posY) {
	context.drawImage(maTuile, xImage, yImage, largeurTuile, hauteurTuile, posX, posY, largeurTuile, hauteurTuile);//on dessine la tuile à l'endroit voulu
}

afficheTuile(0, 0, largeurTuile*1, hauteurTuile*1);

afficheTuile(0, 0, largeurTuile*4, hauteurTuile*2);

afficheTuile(2*largeurTuile, 0, largeurTuile*1, hauteurTuile*4);

afficheTuile(3*largeurTuile, 0, largeurTuile*3, hauteurTuile*5);



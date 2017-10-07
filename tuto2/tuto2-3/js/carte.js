var cheminTileset = "tileset-mini1.png"; // chemin de l'image servant de tileset
var largeurTuile = 32; // largeur de la tuile
var hauteurTuile = 32; // hauteur de la tuile

var maTuile = new Image(); // crée une nouvelle image
maTuile.src = cheminTileset;// donne le chemin de l'image dont la varaible est décalrée plus haut.


function afficheTuile(xImage, yImage, posX, posY) {
	context.drawImage(maTuile, xImage, yImage, largeurTuile, hauteurTuile, posX, posY, largeurTuile, hauteurTuile);//on dessine la tuile à l'endroit voulu
}

afficheTuile(0, 0, largeurTuile*1, hauteurTuile*2);

afficheTuile(3*largeurTuile, 0, largeurTuile*3, hauteurTuile*4);




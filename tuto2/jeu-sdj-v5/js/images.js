
// fonction permettant de charger les images

function precharger_image(url)
{
        var img = new Image();
    	img.src=url;
        return img;
}

// on crée une image nommée tileset et on donne son chemin dans la fonction de pré-chargement
var tileset = precharger_image(imageTileset);

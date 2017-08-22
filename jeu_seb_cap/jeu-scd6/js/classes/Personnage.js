var DIRECTION = {
    "BAS"    : 0,
    "DROITE" : 1,
    "GAUCHE" : 2,
    "HAUT"   : 3
}

var nombreFrames = 5; // nombre de colonnes dans la spritesheet

function Personnage(url, x, y, direction) {
    this.x = x; // (en cases)
    this.y = y; // (en cases)
    this.direction = direction;
    
    // Chargement de l'image dans l'attribut image
    this.image = new Image();
    this.image.referenceDuPerso = this;
    this.image.onload = function() {
        if(!this.complete) 
            throw "Erreur de chargement du sprite nommé \"" + url + "\".";
        
        // Taille du personnage
        this.referenceDuPerso.largeur = this.width / nombreFrames;
        this.referenceDuPerso.hauteur = this.height / 4;
    }
    this.image.src = "sprites/" + url;
}

Personnage.prototype.dessinerPersonnage = function(context) {
   context.drawImage(
    this.image, 
    0, this.direction * this.hauteur, // Point d'origine du rectangle source à prendre dans notre image
    this.largeur, this.hauteur, // Taille du rectangle source (c'est la taille du personnage)
    (this.x * tailleTuile) - (this.largeur / 2) + (tailleTuile/2), (this.y * tailleTuile) - this.hauteur + tailleTuile, // Point de destination (dépend de la taille du personnage)
    this.largeur, this.hauteur // Taille du rectangle destination (c'est la taille du personnage)
);
}

Personnage.prototype.getCoordonneesAdjacentes = function(direction)  {
    var coord = {'x' : this.x, 'y' : this.y};
    switch(direction) {
        case DIRECTION.BAS : 
            coord.y++;
            break;
        case DIRECTION.GAUCHE : 
            coord.x--;
            break;
        case DIRECTION.DROITE : 
            coord.x++;
            break;
        case DIRECTION.HAUT : 
            coord.y--;
            break;
    }
    return coord;
}

Personnage.prototype.deplacer = function(direction, map) {
    // On change la direction du personnage
    this.direction = direction;
        
    // On vérifie que la case demandée est bien située dans la carte
    var prochaineCase = this.getCoordonneesAdjacentes(direction);
    if(prochaineCase.x < 0 || prochaineCase.y < 0 || prochaineCase.x >= map.getLargeur() || prochaineCase.y >= map.getHauteur()) {
        // On retourne un booléen indiquant que le déplacement ne s'est pas fait, 
        // Ça ne coute pas cher et ca peut toujours servir
        return false;
    }
        
    // On effectue le déplacement
    this.x = prochaineCase.x;
    this.y = prochaineCase.y;
        
    return true;
}


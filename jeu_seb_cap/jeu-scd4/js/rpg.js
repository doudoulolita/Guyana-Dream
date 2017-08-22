var tailleTuile = 32; // on indique la largeur de tuile de notre jeu
var couleurfondCarte ="#5b6634"; // on définit la couleur de fond

var map = new Map("premiere");

map.addPersonnage(new Personnage("joueur1.png", 4, 11, DIRECTION.HAUT));
map.addPersonnage(new Personnage("joueur1.png", 4, 1, DIRECTION.BAS));
map.addPersonnage(new Personnage("joueur1.png", 0, 6, DIRECTION.DROITE));
map.addPersonnage(new Personnage("joueur1.png", 11, 6, DIRECTION.GAUCHE));

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width  = map.getLargeur() * tailleTuile;
    canvas.height = map.getHauteur() * tailleTuile;

    map.couleurMap(ctx); // donne une couleur de fond au canvas 
    map.dessinerMap(ctx); // dessine la carte sur le canvas
}


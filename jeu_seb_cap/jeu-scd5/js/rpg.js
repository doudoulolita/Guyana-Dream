var tailleTuile = 32; // on indique la largeur de tuile de notre jeu
var couleurfondCarte ="#5b6634"; // on définit la couleur de fond

var map = new Map("premiere");

var joueur = new Personnage("joueur1.png", 4, 1, DIRECTION.BAS);

map.addPersonnage(joueur);

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width  = map.getLargeur() * tailleTuile;
    canvas.height = map.getHauteur() * tailleTuile;

    map.couleurMap(ctx); // donne une couleur de fond au canvas 
    map.dessinerMap(ctx); // dessine la carte sur le canvas

	// Gestion du clavier
	window.onkeydown = function(event) {
	    	// alert('test'); 
		// une fois le test OK et commenté :
		var e = event || window.event;
		var key = e.which || e.keyCode;
		alert(key);
		return false;
	}

}


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

	setInterval(function() {
    		map.couleurMap(ctx); // donne une couleur de fond au canvas 
		map.dessinerMap(ctx);
	}, 40);

	// Gestion du clavier
	window.onkeydown = function(event) {
	    	// alert('test'); 
		// une fois le test OK et commenté :
		var e = event || window.event;
		var key = e.which || e.keyCode;
		// alert(key);

		// une fois le test OK et commenté :
		switch(key) {
		    case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
			joueur.deplacer(DIRECTION.HAUT, map);
			break;
		    case 40 : case 115 : case 83 : // Flèche bas, s, S
			joueur.deplacer(DIRECTION.BAS, map);
			break;
		    case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
			joueur.deplacer(DIRECTION.GAUCHE, map);
			break;
		    case 39 : case 100 : case 68 : // Flèche droite, d, D
			joueur.deplacer(DIRECTION.DROITE, map);
			break;
		    default : 
			// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
			return true;
		}
	}

}


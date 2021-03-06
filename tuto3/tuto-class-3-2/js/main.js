// La fonction qui initialise le tout
function init() {

	const carte1 = new Carte('canvas', "tileset/tileset-mini.png", 128, "#5b6634", 32);
	
	carte1.map = [
	[ 1,  1,  1,  1,  7,  1],
	[ 2,  2,  2,  2,  2,  2],
	[ 1,  1,  4,  1,  1,  1],
	[ 1,  1,  1,  1,  1,  1],
	[ 1,  7,  1,  1,  4,  1],
	[ 2,  2,  2,  6,  1,  1],
	];

	// paramètres de la classe Joueur : canvas, spritesheet, nom, largeur, hauteur, posX, posY, vx

	const joueur1 = new Joueur('canvas', "sprites/joueur1.png", "joueur1", 32, 32, 0, 0, 1.5);

	const joueur2 = new Joueur('canvas', "sprites/joueur2.png", "joueur2", 32, 48, 0, 64, 1);

	const joueur3 = new Joueur('canvas', "sprites/joueur3.png", "joueur3", 32, 40, 0, 128, 2);

	let joueurs = [joueur1, joueur2, joueur3];

	jeu1 = new Jeu('canvas', '2d', carte1, joueurs);

	jeu1.recupCanvas();

	jeu1.updateCanvas();
}

/***** lorsque la page est chargée, la fonction init est appelée *****/
window.onload = function() { init() };

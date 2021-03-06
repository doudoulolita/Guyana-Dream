let tuile1;
let tuile2;

function Tuile(nomImage, cheminImage, posX, posY) {
	this.cheminImage = cheminImage;
	this.posX = posX;
	this.posY = posY;
}

tuile1 = new Tuile(tuile1, "fougere-jaune.png", 0, 0);
tuile2 = new Tuile(tuile2, "cachette-fougeres-jaunes.png", 50, 0);

let ManagementJeu = {
	// au début du jeu
	setDebutJeu: function(couleur) {
		this.getCanvas();
		this.setCouleur(couleur);
		this.setImage(tuile1, tuile1.cheminImage, tuile1.posX, tuile1.posY);
		this.setImage(tuile2, tuile2.cheminImage, tuile2.posX, tuile2.posY);
	},
	// récupération du canvas et du type de context
	getCanvas: function() {
		this.canvas = document.querySelector('canvas'); 
		this.context = this.canvas.getContext('2d'); 
	},

	// on remplit tout le canvas de couleur 
	setCouleur : function(couleur) {
		this.context.fillStyle = couleur; 
		this.context.fillRect(0,0, this.canvas.width, this.canvas.height);  
		this.context.fill(); 
	},

	// on remplit tout le canvas de couleur 
	setImage : function(tuile, cheminImage, posX, posY) {
		tuile = new Image();
		tuile.src = cheminImage;
		this.context.drawImage(tuile, 0, 0, tuile.width, tuile.height, posX, posY, tuile.width, tuile.height);
	}
}

// on lance la fonction de début de jeu
ManagementJeu.setDebutJeu("#5b6634");




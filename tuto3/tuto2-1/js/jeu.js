let ManagementJeu = {
	// au début du jeu
	setDebutJeu: function(couleur) {
		this.getCanvas();
		this.setCouleur(couleur);
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
	}
}

// on lance la fonction de début de jeu
ManagementJeu.setDebutJeu("#5b6634");

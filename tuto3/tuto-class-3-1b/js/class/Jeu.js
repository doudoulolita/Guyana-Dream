class Jeu {
	constructor(canvas, context, joueurs) {
		this.canvas = canvas;
		this.context = context;
		this.joueurs = joueurs;
	}

	recupCanvas() {
		this.canvas = document.querySelector(this.canvas); //on récupère le canvas sur lequel on va dessiner
		this.context = this.canvas.getContext(this.context); //on indique le contexte précisé en paramètre
	}

	updateCanvas() {
		// efface tout le canvas
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// appelle la fonction deplacePerso pour chacun des élements du tableau "joueurs"
		for (let i=0; i<this.joueurs.length; i++) {
			this.joueurs[i].deplacePerso(this.canvas, this.context);
		}
		// appelle la fonction updateCanvas régulièrement
		requestAnimationFrame(this.updateCanvas.bind(this));
	}
}


class Joueur {
	constructor(spritesheet, nom, largeur, hauteur, posX, posY, vx) {
		this.nom = nom;
		this.image = new Image();
		this.image.src=spritesheet;	
		this.largeur = largeur;
		this.hauteur = hauteur;
		this.posX = posX;
		this.posY = posY;
		this.vx = vx;	
	}

	deplacePerso() {
		// efface le canvas
		context.clearRect(0, 0, canvas.width, canvas.height);
		// dessine le personnage
		context.drawImage(this.image, 0, 0,this.largeur, this.hauteur, this.posX, this.posY, this.largeur, this.hauteur);
		// change la position
		this.posX += this.vx;	

		console.log(this.vx);

		if(this.posX > canvas.width) {this.posX=0;}
	
		requestAnimationFrame(this.deplacePerso.bind(this));
	}
}

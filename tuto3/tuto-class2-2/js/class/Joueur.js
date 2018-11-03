class Joueur {
	constructor(spritesheet, nom, largeur, hauteur, posX, posY) {
		this.nom = nom;
		this.largeur = largeur;
		this.hauteur = hauteur;
		this.posX = posX;
		this.posY = posY;
		this.image = new Image();
		this.image.src=spritesheet;		
	}

	dessineJoueur() {
		context.drawImage(this.image, 0, 0,this.largeur, this.hauteur, this.posX,
			 this.posY, this.largeur, this.hauteur);

	}
}




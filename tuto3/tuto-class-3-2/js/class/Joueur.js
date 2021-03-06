class Joueur {
	constructor(canvas, spritesheet, nom, largeur, hauteur, posX, posY, vx) {
		this.nom = nom;
		this.image = new Image();
		this.spritesheet = spritesheet;
		this.image.src=this.spritesheet; // donne le chemin de la spritesheet à l'image créée	
		this.largeur = largeur;
		this.hauteur = hauteur;
		this.posX = posX;
		this.posY = posY;
		this.vx = vx;	
	}

	deplacePerso(canvas, context) {

		// dessine le personnage
		context.drawImage(this.image, 0, this.hauteur,this.largeur, this.hauteur, this.posX, this.posY, this.largeur, this.hauteur);
		// change la position en ajoutant la vitesse à la position (en pixels)
		this.posX += this.vx;

		// revient à gauche du canvas quand on atteint le bord droit
		if(this.posX > canvas.width) {this.posX=0;} 
	}
}

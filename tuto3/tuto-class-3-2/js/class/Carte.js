class Carte {
	constructor(canvas, tileset, largeur, couleur, tailleTuile) {
		this.decor = new Image();
		this.tileset = tileset;
		this.decor.src= this.tileset; // donne le chemin de la spritesheet à l'image créée
		this.couleur = couleur;	
		this.tailleTuile = tailleTuile;
		this.map = [];
	}

	couleurFond(canvas, context) {
		/* on remplit tout le canvas de couleur */
		context.fillStyle= this.couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
		context.fillRect(0, 0, canvas.width, canvas.height); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
		context.fill(); // on remplit !
	}

	afficheCarte(canvas, context) {
		let nbColonnesTileset = this.decor.width/this.tailleTuile;//nombre de tuiles sur la largeur du tileset 

		for (let j=0; j<this.map.length; j++) {//On parcourt chaque ligne de la carte
			for(let i=0; i<this.map[j].length; i++) {//on parcourt chaque numéro de la ligne (soit les colonnes de la carte)
				let ligneTileset = Math.ceil(this.map[j][i]/nbColonnesTileset);//indique sur quelle ligne du tileset se trouve la tuile à dessiner car Math.ceil donne l'entier le plus proche supérieur ou égal au chiffre donné par la division

				let colonneTileset = this.map[j][i] - ((ligneTileset-1)*nbColonnesTileset);//indique sur quelle colonne du tileset se trouve cette tuile 

				context.drawImage(this.decor, (colonneTileset-1)*this.tailleTuile, (ligneTileset-1)*this.tailleTuile, this.tailleTuile, this.tailleTuile, this.tailleTuile*i, this.tailleTuile*j, this.tailleTuile, this.tailleTuile);//on dessine la tuile à l'endroit voulu				
			}
		} 
	}
}




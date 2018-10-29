let objets = [[3,1], [8,2], [7,3]]; // les numéros des tuiles qu'on peut récupérer dans l'inventaire et le nombre de points qu'elles donnent : [numéro, points] selon leur position dans le tableau

let numTuileNeutre=1; // une tuile sur laquelle il n'y a rien

/* function pour remplir une tuile avec la couleur du fond (appelée dans la fonction effaceObjet) */
function couleurTuile(couleur, posXTuile, posYTuile) {
	// on remplit une tuile de couleur
	context[0].fillStyle= couleur; // choix de la couleur sous forme de variable, déclarée plus haut
	context[0].fillRect(posXTuile, posYTuile, tailleTuile, tailleTuile); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur du rectangle
	context[0].fill(); // on remplit !
}

// fonction pour effacer la tuile sur le canvas si le joueur passe dessus (appelée dans la fonction deplaceTuiles)
function effaceObjet(i,j) {
		context[0].clearRect(tailleTuile*i, tailleTuile*j, tailleTuile, tailleTuile); // efface
		couleurTuile(couleurfondCarte, tailleTuile*i, tailleTuile*j); // remplit de couleur
		dessineTuiles(numTuileNeutre, tailleTuile*i, tailleTuile*j); // dessine une tuile neutre dont la variable est plus haut
}

// fonction effaçant l'objet quand le perso passe dessus et le plaçant dans l'inventaire avec ses points (appelée dans la fonction animePerso du fichier animation.js)
function deplaceTuiles() {
	for (j=0; j<carte1.length; j++) {//cartes[numCarte-1] représente toute la carte
		for(i=0; i<carte1[j].length; i++) {//cartes[numCarte-1][j] représente maintenant une ligne de la carte	
			for (k=0; k<objets.length; k++) {
				if (carte1[j][i] == objets[k][0] && joueur.posX > (tailleTuile*i)-joueur.largeur && joueur.posX < (tailleTuile*i)+tailleTuile && joueur.posY > (tailleTuile*j)-joueur.hauteur && joueur.posY < (tailleTuile*j)+tailleTuile) {  //si la carte présente un n° de tuile compris dans le tableau d'objet et si ses coordonnées du joueur sont comprises dans les limites de cette tuile

					effaceObjet(i,j); // appelle la fonction qui efface la tuile sur le canvas

					carte1[j][i] = numTuileNeutre; // change le numéro de la tuile sur la carte	et met celui de la tuile neutre	
				}
			} 
		}
	}
}

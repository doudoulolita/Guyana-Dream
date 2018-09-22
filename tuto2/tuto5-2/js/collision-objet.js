let objets = [3 ,8, 7]; // tableau des numéros de tuiles correspondant à des objets à attraper

let numObjet = 0; // numéro de l'objet dans le tableau objets

let numTuileNeutre=1; // La tuile neutre est le numéro 1 sur le tileset, elle remplacera l'objet quand le joueur passera dessus

let nbObjets=0; // initialisation du nombre d'objets

/* function pour la couleur du fond */
function couleurTuile(couleur, posXTuile, posYTuile) {
	/* on remplit tout le canvas de couleur */
	context1.fillStyle= couleur; // choix de la couleur sous forme de variable
	context1.fillRect(posXTuile, posYTuile, tailleTuile, tailleTuile); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context1.fill(); // on remplit !
}

// fonction pour effacer la tuile sur le canvas si le joueur passe dessus
function effaceObjet(i,j) {
		context1.clearRect((tailleTuile*i), (tailleTuile*j), tailleTuile, tailleTuile); // efface
		couleurTuile(couleurfondCarte, tailleTuile*i,tailleTuile*j); // remplit de la couleur déclarée dans le fichier jeu.js
		dessineTuiles(numTuileNeutre, tailleTuile*i, tailleTuile*j); // dessine une tuile neutre dont la variable est plus haut
}

function effaceTuiles() { // fonction appelée dans le fichier deplacements.js
	for (j=ligne; j<carte1.length; j++) {//On parcourt chaque ligne de la carte
		for(i=colonne; i<carte1[j].length; i++) {//on parcourt chaque numéro de la ligne (soit les colonnes de la carte)
			for (k=numObjet; k<objets.length; k++) {// on parcourt le tableau des objets
				if (carte1[j][i]== objets[k] && x > (tailleTuile*i)-largeurPerso && x < (tailleTuile*i)+tailleTuile && y > (tailleTuile*j)-hauteurPerso && y < (tailleTuile*j)+tailleTuile) {  //si la carte présente un n° de tuile compris dans le tableau d'objet et si ses coordonnées du joueur sont comprises dans les limites de cette tuile
					effaceObjet(i,j); // appelle la fonction qui efface la tuile sur le canvas
					dessineTuiles(objets[k], largeurCanvas-(3*tailleTuile)+20,tailleTuile*(1+k)+20); // dessine l'objet sur le côté, dans la partie inventaire					
				}
			} 		
		}
	}
}



let objets = [3 ,8, 7]; // tableau des numéros de tuiles correspondant à des objets à attraper

let numObjet = 0; // numéro de l'objet dans le tableau objets

let numTuileNeutre=1; // La tuile neutre est le numéro 1 sur le tileset, elle remplacera l'objet quand le joueur passera dessus

let nbPoints=0; // initialisation du nombre d'objets

let occurence = 1; // initialise le nombre de fois où on rencontre un objet

/* function pour la couleur du fond */
function couleurTuile(couleur, posXTuile, posYTuile) {
	/* on remplit tout le canvas de couleur */
	context1.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context1.fillRect(posXTuile, posYTuile, tailleTuile, tailleTuile); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context1.fill(); // on remplit !
}

// fonction pour effacer la tuile sur le canvas si le joueur passe dessus
function effaceObjet(i,j) {
		context1.clearRect((tailleTuile*i), (tailleTuile*j), tailleTuile, tailleTuile); // efface
		couleurTuile(couleurfondCarte, tailleTuile*i,tailleTuile*j); // remplit de couleur
		dessineTuiles(numTuileNeutre, tailleTuile*i, tailleTuile*j); // dessine une tuile neutre dont la variable est plus haut
}

function effaceTuiles() { // fonction appelée dans le fichier deplacements.js
	for (j=ligne; j<carte1.length; j++) {//On parcourt chaque ligne de la carte
		for(i=colonne; i<carte1[j].length; i++) {//on parcourt chaque numéro de la ligne (soit les colonnes de la carte)
			for (k=numObjet; k<objets.length; k++) { // on parcourt le tableau des objets
				if (carte1[j][i] == objets[k] && x > (tailleTuile*i)-largeurPerso && x < (tailleTuile*i)+tailleTuile && y > (tailleTuile*j)-hauteurPerso && y < (tailleTuile*j)+tailleTuile) {  //si la carte présente un n° de tuile compris dans le tableau d'objet et si ses coordonnées du joueur sont comprises dans les limites de cette tuile

					effaceObjet(i,j); // appelle la fonction qui efface la tuile sur le canvas

					nbPoints += k+1; // le nombre de points augmente quand on récupère des objets

					pointsEnergie += k+1; // les points d'énergie augmentent quand on récupère des objets

					vx *=1.1; // la vitesse augmente légèrement quand on récupère des objets

					dessineTuiles(objets[k], largeurCanvas-(3*tailleTuile)+20,tailleTuile*occurence+tailleTuile); // dessine l'objet sur le côté, dans la partie inventaire, en descendant d'une tuile à chaque occurence

					occurence ++; // chaque fois qu'on rencontre un objet, on augemente le nombre d'occurences

					context3.clearRect(largeurCanvas-(2*tailleTuile)-10, tailleTuile, tailleTuile*2, tailleTuile); // efface le chiffre précédent

					ajouteTexte(nbPoints+ " points", 12, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte.

					ajouteTexte((k+1), 12, largeurCanvas-tailleTuile, tailleTuile*occurence + 20);// indique le nombre de points pour chaque objet

					carte1[j][i] = numTuileNeutre; // change le numéro de la tuile sur la carte				
				}
			} 
		}
	}
}


